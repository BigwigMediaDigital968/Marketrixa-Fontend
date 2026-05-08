"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
import Placeholder from "@tiptap/extension-placeholder";
import { Extension, mergeAttributes } from "@tiptap/core";
import ImageUploadModal from "./Imageuploadmodal";

// ─── Custom Resizable Image ───────────────────────────────────────────────────
const ResizableImage = Image.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      width: {
        default: null,
        parseHTML: (el) => el.getAttribute("width"),
        renderHTML: (a) => (a.width ? { width: a.width } : {}),
      },
      height: {
        default: null,
        parseHTML: (el) => el.getAttribute("height"),
        renderHTML: (a) => (a.height ? { height: a.height } : {}),
      },
      alt: { default: "" },
    };
  },
  renderHTML({ HTMLAttributes }) {
    return [
      "img",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
    ];
  },
});

// ─── Tab / indent extension ───────────────────────────────────────────────────
const IndentExtension = Extension.create({
  name: "indent",
  addKeyboardShortcuts() {
    return {
      Tab: () => {
        if (
          this.editor.isActive("bulletList") ||
          this.editor.isActive("orderedList")
        ) {
          return this.editor.commands.sinkListItem("listItem");
        }
        return false;
      },
      "Shift-Tab": () => {
        if (
          this.editor.isActive("bulletList") ||
          this.editor.isActive("orderedList")
        ) {
          return this.editor.commands.liftListItem("listItem");
        }
        return false;
      },
    };
  },
});

// ─── Types ────────────────────────────────────────────────────────────────────
interface BlogEditorProps {
  content: string;
  onChange: (html: string) => void;
}

// ─── Toolbar button ───────────────────────────────────────────────────────────
const Btn = ({
  onClick,
  active = false,
  disabled = false,
  title,
  children,
  danger = false,
}: {
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
  title: string;
  children: React.ReactNode;
  danger?: boolean;
}) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    title={title}
    className={`relative flex items-center justify-center w-8 h-8 rounded-lg text-sm font-medium transition-all duration-150 select-none
      ${
        active
          ? danger
            ? "bg-red-500/20 text-red-400"
            : "bg-[#f26522] text-white shadow-md shadow-[#f26522]/30"
          : danger
          ? "text-gray-500 hover:text-red-400 hover:bg-red-500/10"
          : "text-gray-400 hover:bg-white/[0.08] hover:text-white"
      }
      disabled:opacity-25 disabled:cursor-not-allowed`}
  >
    {children}
  </button>
);

const Sep = () => <div className="w-px h-5 bg-white/10 mx-0.5 flex-shrink-0" />;

// ─── Custom Floating Selection Menu ──────────────────────────────────────────
function FloatingMenu({ editor }: { editor: Editor }) {
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);
  const [linkMode, setLinkMode] = useState(false);
  const [linkVal, setLinkVal] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);
  const linkInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const update = () => {
      const { from, to, empty } = editor.state.selection;
      if (empty) {
        setPos(null);
        setLinkMode(false);
        return;
      }

      const selection = window.getSelection();
      if (!selection || selection.rangeCount === 0) {
        setPos(null);
        return;
      }

      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      if (rect.width === 0) {
        setPos(null);
        return;
      }

      // Position menu above selection, centred horizontally
      const editorEl = document.querySelector(
        ".blog-editor-content",
      ) as HTMLElement;
      if (!editorEl) return;
      const editorRect = editorEl.getBoundingClientRect();

      const menuWidth = 340;
      let left = rect.left - editorRect.left + rect.width / 2 - menuWidth / 2;
      left = Math.max(4, Math.min(left, editorRect.width - menuWidth - 4));
      const top = rect.top - editorRect.top - 52; // above selection

      setPos({ top, left });
    };

    editor.on("selectionUpdate", update);
    editor.on("transaction", update);
    return () => {
      editor.off("selectionUpdate", update);
      editor.off("transaction", update);
    };
  }, [editor]);

  // Click-outside dismissal
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setLinkMode(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const applyLink = useCallback(() => {
    if (!linkVal.trim()) {
      editor.chain().focus().unsetLink().run();
    } else {
      const href = linkVal.startsWith("http") ? linkVal : `https://${linkVal}`;
      editor.chain().focus().setLink({ href }).run();
    }
    setLinkVal("");
    setLinkMode(false);
  }, [editor, linkVal]);

  if (!pos) return null;

  return (
    <div
      ref={menuRef}
      className="absolute z-50 flex items-center gap-0.5 px-2 py-1.5 rounded-xl shadow-2xl animate-in fade-in slide-in-from-bottom-1 duration-150"
      style={{
        top: pos.top,
        left: pos.left,
        width: linkMode ? 340 : "auto",
        background: "rgba(16,17,26,0.96)",
        border: "1px solid rgba(255,255,255,0.14)",
        backdropFilter: "blur(20px)",
        boxShadow:
          "0 8px 32px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)",
      }}
    >
      {linkMode ? (
        <>
          <input
            ref={linkInputRef}
            autoFocus
            type="text"
            value={linkVal}
            onChange={(e) => setLinkVal(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") applyLink();
              if (e.key === "Escape") setLinkMode(false);
            }}
            placeholder="https://example.com"
            className="flex-1 bg-transparent text-white text-xs outline-none placeholder-gray-600 px-1 min-w-[180px]"
          />
          <button
            type="button"
            onClick={applyLink}
            className="px-2.5 py-1 rounded-lg text-[11px] font-semibold text-white transition-colors"
            style={{ background: "var(--brand-orange)" }}
          >
            Set
          </button>
          {editor.isActive("link") && (
            <button
              type="button"
              onClick={() => {
                editor.chain().focus().unsetLink().run();
                setLinkMode(false);
              }}
              className="px-2 py-1 rounded-lg text-[11px] text-red-400 hover:bg-red-500/10 transition-colors"
            >
              Remove
            </button>
          )}
          <button
            type="button"
            onClick={() => setLinkMode(false)}
            className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-white rounded transition-colors"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d="M2 2l6 6M8 2L2 8"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </>
      ) : (
        <>
          {/* Bold */}
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black transition-all ${
              editor.isActive("bold")
                ? "bg-[#f26522] text-white"
                : "text-gray-300 hover:bg-white/10 hover:text-white"
            }`}
            title="Bold"
          >
            B
          </button>
          {/* Italic */}
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs italic font-semibold transition-all ${
              editor.isActive("italic")
                ? "bg-[#f26522] text-white"
                : "text-gray-300 hover:bg-white/10 hover:text-white"
            }`}
            title="Italic"
          >
            i
          </button>
          {/* Underline */}
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs underline font-semibold transition-all ${
              editor.isActive("underline")
                ? "bg-[#f26522] text-white"
                : "text-gray-300 hover:bg-white/10 hover:text-white"
            }`}
            title="Underline"
          >
            U
          </button>
          {/* Strike */}
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs line-through transition-all ${
              editor.isActive("strike")
                ? "bg-[#f26522] text-white"
                : "text-gray-400 hover:bg-white/10 hover:text-white"
            }`}
            title="Strikethrough"
          >
            S
          </button>
          {/* Highlight */}
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHighlight().run()}
            className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs transition-all ${
              editor.isActive("highlight")
                ? "bg-[#f26522] text-white"
                : "text-yellow-400 hover:bg-white/10"
            }`}
            title="Highlight"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 10h8M5 8L2 5l4-4 3 3-4 4z"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="w-px h-4 bg-white/15 mx-0.5" />

          {/* H2 */}
          <button
            type="button"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={`w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold transition-all ${
              editor.isActive("heading", { level: 2 })
                ? "bg-[#f26522] text-white"
                : "text-gray-400 hover:bg-white/10 hover:text-white"
            }`}
            title="Heading 2"
          >
            H2
          </button>
          {/* H3 */}
          <button
            type="button"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            className={`w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold transition-all ${
              editor.isActive("heading", { level: 3 })
                ? "bg-[#f26522] text-white"
                : "text-gray-400 hover:bg-white/10 hover:text-white"
            }`}
            title="Heading 3"
          >
            H3
          </button>

          <div className="w-px h-4 bg-white/15 mx-0.5" />

          {/* Link */}
          <button
            type="button"
            onClick={() => {
              setLinkVal(
                editor.isActive("link")
                  ? editor.getAttributes("link").href ?? ""
                  : "",
              );
              setLinkMode(true);
              setTimeout(() => linkInputRef.current?.focus(), 30);
            }}
            className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all ${
              editor.isActive("link")
                ? "bg-[#f26522] text-white"
                : "text-gray-400 hover:bg-white/10 hover:text-white"
            }`}
            title="Link"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M5 7a3.5 3.5 0 005 0l1-1a3.5 3.5 0 00-5-5L5 2"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
              <path
                d="M7 5a3.5 3.5 0 00-5 0l-1 1a3.5 3.5 0 005 5l1-1"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Inline code */}
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleCode().run()}
            className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all ${
              editor.isActive("code")
                ? "bg-[#f26522] text-white"
                : "text-gray-400 hover:bg-white/10 hover:text-white"
            }`}
            title="Inline code"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M4 2L1 6l3 4M8 2l3 4-3 4"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Blockquote */}
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm transition-all ${
              editor.isActive("blockquote")
                ? "bg-[#f26522] text-white"
                : "text-gray-400 hover:bg-white/10 hover:text-white"
            }`}
            title="Blockquote"
          >
            ❝
          </button>
        </>
      )}
    </div>
  );
}

// ─── Word / char counter ──────────────────────────────────────────────────────
function EditorStats({ editor }: { editor: Editor }) {
  const html = editor.getHTML();
  const text = html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const words = text ? text.split(" ").filter(Boolean).length : 0;
  const chars = text.length;
  return (
    <div
      className="flex items-center gap-3 text-[11px]"
      style={{ color: "rgba(255,255,255,0.2)" }}
    >
      <span>{words.toLocaleString()} words</span>
      <span style={{ color: "rgba(255,255,255,0.08)" }}>·</span>
      <span>{chars.toLocaleString()} chars</span>
    </div>
  );
}

// ─── Main Editor ──────────────────────────────────────────────────────────────
export default function BlogEditor({ content, onChange }: BlogEditorProps) {
  const [showImageModal, setShowImageModal] = useState(false);
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const [editorFocused, setEditorFocused] = useState(false);
  const toolbarLinkRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        // CRITICAL: configure heading levels explicitly
        heading: { levels: [1, 2, 3, 4] },
        // CRITICAL: bulletList and orderedList must NOT be disabled
        bulletList: {
          keepMarks: true,
          keepAttributes: true,
          HTMLAttributes: { class: "be-bullet-list" },
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: true,
          HTMLAttributes: { class: "be-ordered-list" },
        },
        listItem: {
          HTMLAttributes: { class: "be-list-item" },
        },
        blockquote: {
          HTMLAttributes: { class: "be-blockquote" },
        },
        code: {
          HTMLAttributes: { class: "be-code" },
        },
        codeBlock: {
          HTMLAttributes: { class: "be-code-block" },
        },
        horizontalRule: {
          HTMLAttributes: { class: "be-hr" },
        },
      }),
      ResizableImage.configure({ allowBase64: true }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        linkOnPaste: true,
        HTMLAttributes: { class: "be-link", rel: "noopener noreferrer" },
      }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Underline,
      Highlight.configure({ multicolor: false }),
      Placeholder.configure({
        placeholder:
          "Start writing your blog post… Use the toolbar above for formatting, or select any text for quick options.",
        showOnlyWhenEditable: true,
      }),
      IndentExtension,
    ],
    immediatelyRender: false,
    content: content || "",
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    onFocus: () => setEditorFocused(true),
    onBlur: () => setEditorFocused(false),
    editorProps: {
      attributes: {
        class: "blog-editor-prose focus:outline-none",
        spellcheck: "true",
      },
      // Handle paste to clean up
      handlePaste(view, event) {
        // Allow default paste handling (keeps formatting)
        return false;
      },
    },
  });

  // ── Toolbar link handler ──
  const applyToolbarLink = useCallback(() => {
    if (!editor) return;
    if (!linkUrl.trim()) {
      editor.chain().focus().unsetLink().run();
    } else {
      const href = linkUrl.startsWith("http") ? linkUrl : `https://${linkUrl}`;
      editor.chain().focus().setLink({ href }).run();
    }
    setLinkUrl("");
    setShowLinkInput(false);
  }, [editor, linkUrl]);

  // ── Image insert ──
  const insertImage = useCallback(
    (src: string, alt: string, href?: string, width?: number) => {
      if (!editor) return;
      editor
        .chain()
        .focus()
        .setImage({ src, alt, ...(width !== undefined ? { width } : {}) })
        .run();
      setShowImageModal(false);
    },
    [editor],
  );

  if (!editor) return null;

  // Overloaded helper: accepts (name) | (name, attrs) | (attrsOnly)
  const isActive = (
    nameOrAttrs: string | Record<string, unknown>,
    attrs?: Record<string, unknown>,
  ): boolean => {
    if (typeof nameOrAttrs === "string")
      return editor.isActive(nameOrAttrs, attrs);
    return editor.isActive(nameOrAttrs);
  };

  // ─── Heading selector value ───
  const headingValue = isActive("heading", { level: 1 })
    ? "h1"
    : isActive("heading", { level: 2 })
    ? "h2"
    : isActive("heading", { level: 3 })
    ? "h3"
    : isActive("heading", { level: 4 })
    ? "h4"
    : "p";

  return (
    <>
      <div
        className="rounded-2xl overflow-hidden transition-all duration-200"
        style={{
          border: editorFocused
            ? "1px solid rgba(242,101,34,0.4)"
            : "1px solid rgba(255,255,255,0.09)",
          background: "rgba(255,255,255,0.02)",
          boxShadow: editorFocused ? "0 0 0 3px rgba(242,101,34,0.08)" : "none",
        }}
      >
        {/* ════════════════════════════════════════
            TOOLBAR
        ════════════════════════════════════════ */}
        <div
          className="sticky top-0 z-10 flex flex-wrap items-center gap-0.5 px-3 py-2.5"
          style={{
            background: "rgba(10,11,18,0.95)",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            backdropFilter: "blur(12px)",
          }}
        >
          {/* ── Heading selector ── */}
          <select
            value={headingValue}
            onChange={(e) => {
              const v = e.target.value;
              if (v === "p") editor.chain().focus().setParagraph().run();
              else
                editor
                  .chain()
                  .focus()
                  .toggleHeading({ level: parseInt(v[1]) as 1 | 2 | 3 | 4 })
                  .run();
            }}
            className="h-8 px-2 rounded-lg text-xs font-medium cursor-pointer focus:outline-none transition-all"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#d1d5db",
              minWidth: "108px",
            }}
          >
            <option value="p" style={{ background: "#111" }}>
              Paragraph
            </option>
            <option value="h1" style={{ background: "#111" }}>
              Heading 1
            </option>
            <option value="h2" style={{ background: "#111" }}>
              Heading 2
            </option>
            <option value="h3" style={{ background: "#111" }}>
              Heading 3
            </option>
            <option value="h4" style={{ background: "#111" }}>
              Heading 4
            </option>
          </select>

          <Sep />

          {/* ── Text formatting ── */}
          <Btn
            onClick={() => editor.chain().focus().toggleBold().run()}
            active={isActive("bold")}
            title="Bold (Ctrl+B)"
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <text
                x="1"
                y="11"
                fontFamily="serif"
                fontSize="13"
                fontWeight="900"
                fill="currentColor"
              >
                B
              </text>
            </svg>
          </Btn>
          <Btn
            onClick={() => editor.chain().focus().toggleItalic().run()}
            active={isActive("italic")}
            title="Italic (Ctrl+I)"
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <text
                x="2"
                y="11"
                fontFamily="serif"
                fontSize="13"
                fontStyle="italic"
                fontWeight="500"
                fill="currentColor"
              >
                i
              </text>
            </svg>
          </Btn>
          <Btn
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            active={isActive("underline")}
            title="Underline (Ctrl+U)"
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <text
                x="1"
                y="10"
                fontFamily="serif"
                fontSize="11"
                fontWeight="600"
                fill="currentColor"
              >
                U
              </text>
              <line
                x1="1"
                y1="12.5"
                x2="12"
                y2="12.5"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
          </Btn>
          <Btn
            onClick={() => editor.chain().focus().toggleStrike().run()}
            active={isActive("strike")}
            title="Strikethrough"
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <text
                x="1"
                y="11"
                fontFamily="serif"
                fontSize="11"
                fontWeight="600"
                fill="currentColor"
              >
                S
              </text>
              <line
                x1="0"
                y1="6.5"
                x2="13"
                y2="6.5"
                stroke="currentColor"
                strokeWidth="1.3"
              />
            </svg>
          </Btn>
          <Btn
            onClick={() => editor.chain().focus().toggleHighlight().run()}
            active={isActive("highlight")}
            title="Highlight text"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 12h10M5.5 9.5L2.5 6.5l4-4 3 3-4 4z"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 3.5l2 2"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
          </Btn>
          <Btn
            onClick={() => editor.chain().focus().toggleCode().run()}
            active={isActive("code")}
            title="Inline code"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M5 3L2 7l3 4M9 3l3 4-3 4"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Btn>

          <Sep />

          {/* ── Alignment ── */}
          <Btn
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
            active={isActive({ textAlign: "left" })}
            title="Align left"
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <line
                x1="0"
                y1="2"
                x2="13"
                y2="2"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
              <line
                x1="0"
                y1="6"
                x2="9"
                y2="6"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
              <line
                x1="0"
                y1="10"
                x2="11"
                y2="10"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
          </Btn>
          <Btn
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
            active={isActive({ textAlign: "center" })}
            title="Center"
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <line
                x1="0"
                y1="2"
                x2="13"
                y2="2"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
              <line
                x1="2"
                y1="6"
                x2="11"
                y2="6"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
              <line
                x1="1"
                y1="10"
                x2="12"
                y2="10"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
          </Btn>
          <Btn
            onClick={() => editor.chain().focus().setTextAlign("right").run()}
            active={isActive({ textAlign: "right" })}
            title="Align right"
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <line
                x1="0"
                y1="2"
                x2="13"
                y2="2"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
              <line
                x1="4"
                y1="6"
                x2="13"
                y2="6"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
              <line
                x1="2"
                y1="10"
                x2="13"
                y2="10"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
          </Btn>

          <Sep />

          {/* ── Lists — THE MOST IMPORTANT BUTTONS ── */}
          <Btn
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            active={isActive("bulletList")}
            title="Bullet list (unordered)"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="2" cy="3.5" r="1.2" fill="currentColor" />
              <circle cx="2" cy="7" r="1.2" fill="currentColor" />
              <circle cx="2" cy="10.5" r="1.2" fill="currentColor" />
              <line
                x1="5"
                y1="3.5"
                x2="13"
                y2="3.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              <line
                x1="5"
                y1="7"
                x2="13"
                y2="7"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              <line
                x1="5"
                y1="10.5"
                x2="11"
                y2="10.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </Btn>
          <Btn
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            active={isActive("orderedList")}
            title="Numbered list (ordered)"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <text
                x="0.5"
                y="5"
                fontSize="4.5"
                fill="currentColor"
                fontWeight="700"
              >
                1.
              </text>
              <text
                x="0.5"
                y="8.5"
                fontSize="4.5"
                fill="currentColor"
                fontWeight="700"
              >
                2.
              </text>
              <text
                x="0.5"
                y="12"
                fontSize="4.5"
                fill="currentColor"
                fontWeight="700"
              >
                3.
              </text>
              <line
                x1="5.5"
                y1="3.5"
                x2="13"
                y2="3.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              <line
                x1="5.5"
                y1="7"
                x2="13"
                y2="7"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              <line
                x1="5.5"
                y1="10.5"
                x2="11"
                y2="10.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </Btn>

          {/* Indent / outdent (list context) */}
          <Btn
            onClick={() =>
              editor.chain().focus().sinkListItem("listItem").run()
            }
            disabled={!editor.can().sinkListItem("listItem")}
            active={false}
            title="Indent list item (Tab)"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 3h12M4 7h9M4 11h7"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
              <path d="M1 7l2.5-2v4L1 7z" fill="currentColor" />
            </svg>
          </Btn>
          <Btn
            onClick={() =>
              editor.chain().focus().liftListItem("listItem").run()
            }
            disabled={!editor.can().liftListItem("listItem")}
            active={false}
            title="Outdent list item (Shift+Tab)"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 3h12M4 7h9M4 11h7"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
              <path d="M4 7l-2.5-2v4L4 7z" fill="currentColor" />
            </svg>
          </Btn>

          <Sep />

          {/* ── Block elements ── */}
          <Btn
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            active={isActive("blockquote")}
            title="Blockquote"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 4.5C2 3.7 2.7 3 3.5 3H6v3H3.5V7A2.5 2.5 0 006 9.5V11H3.5A1.5 1.5 0 012 9.5V4.5z"
                fill="currentColor"
                opacity="0.7"
              />
              <path
                d="M8 4.5C8 3.7 8.7 3 9.5 3H12v3H9.5V7A2.5 2.5 0 0012 9.5V11H9.5A1.5 1.5 0 018 9.5V4.5z"
                fill="currentColor"
                opacity="0.7"
              />
            </svg>
          </Btn>
          <Btn
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            active={isActive("codeBlock")}
            title="Code block"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect
                x="1"
                y="2"
                width="12"
                height="10"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M4 6l-2 1.5 2 1.5M10 6l2 1.5-2 1.5"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1="6.5"
                y1="5"
                x2="7.5"
                y2="9"
                stroke="currentColor"
                strokeWidth="1.1"
                strokeLinecap="round"
              />
            </svg>
          </Btn>
          <Btn
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
            active={false}
            title="Horizontal divider"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <line
                x1="1"
                y1="7"
                x2="13"
                y2="7"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeDasharray="2 1.5"
              />
            </svg>
          </Btn>

          <Sep />

          {/* ── Link ── */}
          <div className="relative">
            <Btn
              onClick={() => {
                if (isActive("link")) {
                  editor.chain().focus().unsetLink().run();
                } else {
                  setLinkUrl("");
                  setShowLinkInput((v) => !v);
                  setTimeout(() => toolbarLinkRef.current?.focus(), 50);
                }
              }}
              active={isActive("link")}
              title="Link (Ctrl+K)"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M6 8a3.5 3.5 0 005 0l1.5-1.5a3.5 3.5 0 00-5-5L6 3"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
                <path
                  d="M8 6a3.5 3.5 0 00-5 0L1.5 7.5a3.5 3.5 0 005 5L8 11"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </Btn>
            {showLinkInput && (
              <div
                className="absolute top-[calc(100%+8px)] left-0 z-30 flex items-center gap-2 rounded-xl px-3 py-2 shadow-2xl"
                style={{
                  background: "rgba(14,15,22,0.98)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  backdropFilter: "blur(16px)",
                  minWidth: "280px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.6)",
                }}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="text-gray-500 flex-shrink-0"
                >
                  <path
                    d="M5 7a3 3 0 004 0l1-1a3 3 0 00-4-4L5 3"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7 5a3 3 0 00-4 0L2 6a3 3 0 004 4l1-1"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                </svg>
                <input
                  ref={toolbarLinkRef}
                  type="url"
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      applyToolbarLink();
                    }
                    if (e.key === "Escape") setShowLinkInput(false);
                  }}
                  placeholder="https://example.com"
                  className="flex-1 bg-transparent text-white text-xs outline-none placeholder-gray-600"
                />
                <button
                  type="button"
                  onClick={applyToolbarLink}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-semibold text-white flex-shrink-0"
                  style={{ background: "var(--brand-orange)" }}
                >
                  Add
                </button>
                <button
                  type="button"
                  onClick={() => setShowLinkInput(false)}
                  className="text-gray-600 hover:text-gray-300 flex-shrink-0 transition-colors"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M2 2l6 6M8 2L2 8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* ── Image ── */}
          <Btn
            onClick={() => setShowImageModal(true)}
            active={false}
            title="Insert image"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect
                x="1"
                y="2"
                width="12"
                height="10"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <circle
                cx="4.5"
                cy="5.5"
                r="1.2"
                stroke="currentColor"
                strokeWidth="1"
              />
              <path
                d="M1 10l3.5-3.5 2.5 2.5 2-2 3 3"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Btn>

          <Sep />

          {/* ── History ── */}
          <Btn
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
            active={false}
            title="Undo (Ctrl+Z)"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 6H9a3.5 3.5 0 010 7H5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              <path
                d="M3 3.5L1 6l2 2.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Btn>
          <Btn
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
            active={false}
            title="Redo (Ctrl+Shift+Z)"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M11 6H5a3.5 3.5 0 000 7h4"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              <path
                d="M11 3.5L13 6l-2 2.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Btn>

          {/* ── Stats ── */}
          <div className="ml-auto pl-2">
            <EditorStats editor={editor} />
          </div>
        </div>

        {/* ════════════════════════════════════════
            EDITOR CONTENT AREA
        ════════════════════════════════════════ */}
        <div className="relative blog-editor-content">
          {/* Custom floating selection menu */}
          <FloatingMenu editor={editor} />

          <EditorContent editor={editor} className="blog-editor-content" />
        </div>
      </div>

      {/* ── Image modal ── */}
      {showImageModal && (
        <ImageUploadModal
          onInsert={insertImage}
          onClose={() => setShowImageModal(false)}
        />
      )}

      {/* ════════════════════════════════════════
          CRITICAL: Editor styles
          These are what fix bullets + all formatting
      ════════════════════════════════════════ */}
      <style jsx global>{`
        /* ── Editor container ── */
        .blog-editor-content .ProseMirror {
          min-height: 480px;
          padding: 1.75rem 2rem;
          color: rgba(255, 255, 255, 0.82);
          font-size: 0.9375rem;
          line-height: 1.85;
          outline: none;
          word-break: break-word;
        }

        /* ── Placeholder ── */
        .blog-editor-content
          .ProseMirror
          p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          color: rgba(255, 255, 255, 0.2);
          pointer-events: none;
          float: left;
          height: 0;
          font-style: normal;
        }

        /* ── Headings ── */
        .blog-editor-content .ProseMirror h1 {
          font-size: 2rem;
          font-weight: 800;
          color: #fff;
          margin: 1.8em 0 0.6em;
          line-height: 1.2;
          padding-bottom: 0.4em;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .blog-editor-content .ProseMirror h2 {
          font-size: 1.45rem;
          font-weight: 700;
          color: #fff;
          margin: 1.6em 0 0.5em;
          line-height: 1.25;
          padding-left: 0.875rem;
          border-left: 3px solid #f26522;
        }
        .blog-editor-content .ProseMirror h3 {
          font-size: 1.15rem;
          font-weight: 600;
          color: rgba(242, 101, 34, 0.88);
          margin: 1.4em 0 0.4em;
          line-height: 1.3;
        }
        .blog-editor-content .ProseMirror h4 {
          font-size: 1rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.85);
          margin: 1.2em 0 0.35em;
        }

        /* ── Paragraphs ── */
        .blog-editor-content .ProseMirror p {
          margin-bottom: 1em;
          color: rgba(255, 255, 255, 0.78);
        }

        /* ══════════════════════════════════════════════
           BULLET & ORDERED LISTS — THE CRITICAL FIX
           TipTap uses data-list-type attributes, not
           standard <ul>/<ol> markers in some configs.
           We override EVERYTHING to guarantee visibility.
        ══════════════════════════════════════════════ */
        .blog-editor-content .ProseMirror ul,
        .blog-editor-content .ProseMirror ul.be-bullet-list {
          list-style-type: disc !important;
          list-style-position: outside !important;
          padding-left: 1.6em !important;
          margin: 0.75em 0 1em !important;
        }
        .blog-editor-content .ProseMirror ol,
        .blog-editor-content .ProseMirror ol.be-ordered-list {
          list-style-type: decimal !important;
          list-style-position: outside !important;
          padding-left: 1.6em !important;
          margin: 0.75em 0 1em !important;
        }
        .blog-editor-content .ProseMirror li,
        .blog-editor-content .ProseMirror li.be-list-item {
          margin-bottom: 0.3em;
          color: rgba(255, 255, 255, 0.75);
          display: list-item !important;
        }
        .blog-editor-content .ProseMirror ul > li {
          list-style-type: disc !important;
        }
        .blog-editor-content .ProseMirror ol > li {
          list-style-type: decimal !important;
        }
        /* Nested lists */
        .blog-editor-content .ProseMirror ul ul {
          list-style-type: circle !important;
        }
        .blog-editor-content .ProseMirror ul ul ul {
          list-style-type: square !important;
        }
        .blog-editor-content .ProseMirror ol ol {
          list-style-type: lower-alpha !important;
        }
        .blog-editor-content .ProseMirror ol ol ol {
          list-style-type: lower-roman !important;
        }
        /* List item paragraph reset */
        .blog-editor-content .ProseMirror li > p {
          margin: 0;
          display: inline;
        }
        /* Marker color */
        .blog-editor-content .ProseMirror ul > li::marker {
          color: #f26522;
        }
        .blog-editor-content .ProseMirror ol > li::marker {
          color: #f26522;
          font-weight: 700;
        }

        /* ── TipTap specific: override pseudo-bullet trick ── */
        .blog-editor-content .ProseMirror [data-type="bulletList"] > li::before,
        .blog-editor-content .ProseMirror ul > li[data-list-item]::before {
          display: none !important;
        }

        /* ── Blockquote ── */
        .blog-editor-content .ProseMirror blockquote,
        .blog-editor-content .ProseMirror .be-blockquote {
          border-left: 3px solid #f26522;
          padding: 0.8rem 1.2rem;
          margin: 1.5em 0;
          background: rgba(242, 101, 34, 0.055);
          border-radius: 0 0.75rem 0.75rem 0;
          color: rgba(255, 255, 255, 0.72);
          font-style: italic;
        }
        .blog-editor-content .ProseMirror blockquote p {
          margin: 0;
          color: inherit;
        }

        /* ── Inline code ── */
        .blog-editor-content .ProseMirror code,
        .blog-editor-content .ProseMirror .be-code {
          background: rgba(255, 255, 255, 0.08) !important;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          padding: 0.1em 0.4em;
          font-size: 0.85em;
          color: #f26522;
          font-family: "Fira Code", "Cascadia Code", "JetBrains Mono", monospace;
        }

        /* ── Code block ── */
        .blog-editor-content .ProseMirror pre,
        .blog-editor-content .ProseMirror .be-code-block {
          background: rgba(0, 0, 0, 0.5) !important;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 0.75rem;
          padding: 1.2rem 1.4rem;
          overflow-x: auto;
          margin: 1.5em 0;
          font-family: "Fira Code", "Cascadia Code", monospace;
        }
        .blog-editor-content .ProseMirror pre code {
          background: none !important;
          border: none !important;
          padding: 0;
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.875em;
        }

        /* ── Horizontal rule ── */
        .blog-editor-content .ProseMirror hr {
          border: none;
          height: 1px;
          background: rgba(255, 255, 255, 0.08);
          margin: 2em 0;
        }

        /* ── Links ── */
        .blog-editor-content .ProseMirror a,
        .blog-editor-content .ProseMirror .be-link {
          color: #f26522 !important;
          text-decoration: underline;
          text-underline-offset: 3px;
          text-decoration-color: rgba(242, 101, 34, 0.45);
          cursor: pointer;
          transition: opacity 0.15s;
        }
        .blog-editor-content .ProseMirror a:hover {
          opacity: 0.75;
        }

        /* ── Bold / italic / underline / strike / highlight ── */
        .blog-editor-content .ProseMirror strong {
          color: #fff !important;
          font-weight: 700;
        }
        .blog-editor-content .ProseMirror em {
          font-style: italic;
          color: rgba(255, 255, 255, 0.88);
        }
        .blog-editor-content .ProseMirror u {
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .blog-editor-content .ProseMirror s {
          text-decoration: line-through;
          color: rgba(255, 255, 255, 0.5);
        }
        .blog-editor-content .ProseMirror mark {
          background: rgba(251, 191, 36, 0.25) !important;
          color: #fde68a !important;
          border-radius: 2px;
          padding: 0 2px;
        }

        /* ── Images ── */
        .blog-editor-content .ProseMirror img {
          border-radius: 0.75rem;
          max-width: 100%;
          height: auto;
          margin: 1.5em 0;
          border: 1px solid rgba(255, 255, 255, 0.07);
          display: block;
        }
        .blog-editor-content .ProseMirror img.ProseMirror-selectednode {
          outline: 2px solid #f26522;
          outline-offset: 2px;
        }

        /* ── Text alignment ── */
        .blog-editor-content .ProseMirror [style*="text-align: center"] {
          text-align: center;
        }
        .blog-editor-content .ProseMirror [style*="text-align: right"] {
          text-align: right;
        }
        .blog-editor-content .ProseMirror [style*="text-align: left"] {
          text-align: left;
        }

        /* ── Selection ── */
        .blog-editor-content .ProseMirror ::selection {
          background: rgba(242, 101, 34, 0.28);
        }

        /* ── Floating menu animation ── */
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-in {
          animation: fade-in-up 0.15s ease-out forwards;
        }
        .fade-in {
          opacity: 0;
        }
        .slide-in-from-bottom-1 {
          transform: translateY(4px);
        }
      `}</style>
    </>
  );
}
