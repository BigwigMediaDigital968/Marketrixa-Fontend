"use client";

import { useCallback, useRef, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import { BubbleMenu } from "@tiptap/extension-bubble-menu";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
import Placeholder from "@tiptap/extension-placeholder";
import { mergeAttributes } from "@tiptap/core";
import ImageUploadModal from "./Imageuploadmodal";

// Custom resizable image extension
// Note: width/height stored as numbers to match SetImageOptions type
const ResizableImage = Image.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      width: { default: null },
      height: { default: null },
      alt: { default: "" },
      href: { default: null },
    };
  },
  renderHTML({ HTMLAttributes }) {
    return [
      "img",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
    ];
  },
});

interface BlogEditorProps {
  content: string;
  onChange: (html: string) => void;
}

const ToolbarBtn = ({
  onClick,
  active,
  disabled,
  title,
  children,
}: {
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
  title: string;
  children: React.ReactNode;
}) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    title={title}
    className={`p-2 rounded-lg text-sm font-medium transition-all duration-200 ${
      active
        ? "bg-[#f26522] text-white"
        : "text-gray-300 hover:bg-white/10 hover:text-white"
    } disabled:opacity-30 disabled:cursor-not-allowed`}
  >
    {children}
  </button>
);

const Divider = () => <div className="w-px h-6 bg-white/10 mx-1" />;

export default function BlogEditor({ content, onChange }: BlogEditorProps) {
  const [showImageModal, setShowImageModal] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const [showLinkInput, setShowLinkInput] = useState(false);
  const linkInputRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: { levels: [1, 2, 3, 4] } }),
      ResizableImage.configure({ allowBase64: true }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: { class: "text-[#f26522] underline" },
      }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Underline,
      Highlight.configure({ multicolor: true }),
      Placeholder.configure({ placeholder: "Start writing your blog post..." }),
    ],
    immediatelyRender: false,
    content,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    editorProps: {
      attributes: {
        class:
          "prose prose-invert prose-orange max-w-none min-h-[500px] p-6 focus:outline-none text-gray-200 [&_.ProseMirror-selectednode]:outline-2 [&_.ProseMirror-selectednode]:outline-[#f26522]",
      },
    },
  });

  const insertImage = useCallback(
    (src: string, alt: string, href?: string, width?: number) => {
      if (!editor) return;
      editor
        .chain()
        .focus()
        .setImage({
          src,
          alt,
          // FIX: width must stay as number (not converted to string)
          ...(width !== undefined ? { width } : {}),
        })
        .run();
      setShowImageModal(false);
    },
    [editor],
  );

  const setLink = useCallback(() => {
    if (!editor) return;
    if (linkUrl === "") {
      // FIX: 'extendMarkToWordAndToggleLink' does not exist — use unsetLink instead
      editor.chain().focus().unsetLink().run();
      return;
    }
    const url = linkUrl.startsWith("http") ? linkUrl : `https://${linkUrl}`;
    editor.chain().focus().setLink({ href: url }).run();
    setLinkUrl("");
    setShowLinkInput(false);
  }, [editor, linkUrl]);

  if (!editor) return null;

  return (
    <>
      <div className="rounded-xl overflow-hidden border border-white/10 bg-[rgba(255,255,255,0.02)]">
        {/* ── Toolbar ── */}
        <div className="flex flex-wrap items-center gap-0.5 px-3 py-2 border-b border-white/10 bg-[rgba(0,0,0,0.3)] sticky top-0 z-10">
          {/* Headings */}
          <select
            className="bg-transparent text-gray-300 text-sm px-2 py-1.5 rounded-lg border border-white/10 cursor-pointer hover:border-[#f26522]/50 focus:outline-none focus:border-[#f26522]"
            value={
              editor.isActive("heading", { level: 1 })
                ? "h1"
                : editor.isActive("heading", { level: 2 })
                ? "h2"
                : editor.isActive("heading", { level: 3 })
                ? "h3"
                : editor.isActive("heading", { level: 4 })
                ? "h4"
                : "p"
            }
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
          >
            <option value="p">Paragraph</option>
            <option value="h1">Heading 1</option>
            <option value="h2">Heading 2</option>
            <option value="h3">Heading 3</option>
            <option value="h4">Heading 4</option>
          </select>

          <Divider />

          {/* Text formatting */}
          <ToolbarBtn
            onClick={() => editor.chain().focus().toggleBold().run()}
            active={editor.isActive("bold")}
            title="Bold (Ctrl+B)"
          >
            <strong>B</strong>
          </ToolbarBtn>
          <ToolbarBtn
            onClick={() => editor.chain().focus().toggleItalic().run()}
            active={editor.isActive("italic")}
            title="Italic (Ctrl+I)"
          >
            <em>I</em>
          </ToolbarBtn>
          <ToolbarBtn
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            active={editor.isActive("underline")}
            title="Underline (Ctrl+U)"
          >
            <span className="underline">U</span>
          </ToolbarBtn>
          <ToolbarBtn
            onClick={() => editor.chain().focus().toggleStrike().run()}
            active={editor.isActive("strike")}
            title="Strikethrough"
          >
            <span className="line-through">S</span>
          </ToolbarBtn>
          <ToolbarBtn
            onClick={() => editor.chain().focus().toggleHighlight().run()}
            active={editor.isActive("highlight")}
            title="Highlight"
          >
            <span className="text-yellow-400">H</span>
          </ToolbarBtn>
          <ToolbarBtn
            onClick={() => editor.chain().focus().toggleCode().run()}
            active={editor.isActive("code")}
            title="Inline Code"
          >
            <span className="font-mono text-xs">{"<>"}</span>
          </ToolbarBtn>

          <Divider />

          {/* Alignment */}
          <ToolbarBtn
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
            active={editor.isActive({ textAlign: "left" })}
            title="Align left"
          >
            ≡
          </ToolbarBtn>
          <ToolbarBtn
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
            active={editor.isActive({ textAlign: "center" })}
            title="Center"
          >
            ≡
          </ToolbarBtn>
          <ToolbarBtn
            onClick={() => editor.chain().focus().setTextAlign("right").run()}
            active={editor.isActive({ textAlign: "right" })}
            title="Align right"
          >
            ≡
          </ToolbarBtn>

          <Divider />

          {/* Lists */}
          <ToolbarBtn
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            active={editor.isActive("bulletList")}
            title="Bullet list"
          >
            • —
          </ToolbarBtn>
          <ToolbarBtn
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            active={editor.isActive("orderedList")}
            title="Ordered list"
          >
            1.—
          </ToolbarBtn>

          <Divider />

          {/* Blocks */}
          <ToolbarBtn
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            active={editor.isActive("blockquote")}
            title="Blockquote"
          >
            ❝
          </ToolbarBtn>
          <ToolbarBtn
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            active={editor.isActive("codeBlock")}
            title="Code block"
          >
            <span className="font-mono text-xs">{"{ }"}</span>
          </ToolbarBtn>
          <ToolbarBtn
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
            active={false}
            title="Horizontal rule"
          >
            —
          </ToolbarBtn>

          <Divider />

          {/* Link */}
          <div className="relative">
            <ToolbarBtn
              onClick={() => {
                if (editor.isActive("link")) {
                  editor.chain().focus().unsetLink().run();
                } else {
                  setShowLinkInput(!showLinkInput);
                  setTimeout(() => linkInputRef.current?.focus(), 50);
                }
              }}
              active={editor.isActive("link")}
              title="Add link"
            >
              🔗
            </ToolbarBtn>
            {showLinkInput && (
              <div className="absolute top-10 left-0 z-20 flex items-center gap-2 bg-[#1a1a1a] border border-white/20 rounded-xl p-2 shadow-2xl min-w-[280px]">
                <input
                  ref={linkInputRef}
                  type="text"
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && setLink()}
                  placeholder="https://..."
                  className="flex-1 bg-transparent text-white text-sm outline-none placeholder-gray-500"
                />
                <button
                  onClick={setLink}
                  className="px-3 py-1 bg-[#f26522] text-white text-xs rounded-lg hover:bg-[#f26522]/80"
                >
                  Add
                </button>
                <button
                  onClick={() => setShowLinkInput(false)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
            )}
          </div>

          {/* Image */}
          <ToolbarBtn
            onClick={() => setShowImageModal(true)}
            active={false}
            title="Insert image"
          >
            🖼
          </ToolbarBtn>

          <Divider />

          {/* History */}
          <ToolbarBtn
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
            active={false}
            title="Undo (Ctrl+Z)"
          >
            ↩
          </ToolbarBtn>
          <ToolbarBtn
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
            active={false}
            title="Redo (Ctrl+Shift+Z)"
          >
            ↪
          </ToolbarBtn>

          <div className="ml-auto text-xs text-gray-500">
            {editor.storage.characterCount?.characters?.() ?? 0} chars
          </div>
        </div>

        {/* ── Editor Area ── */}
        <EditorContent editor={editor} />

        {/* ── Bubble Menu ── */}
        {/* FIX: BubbleMenu imported from @tiptap/extension-bubble-menu, not @tiptap/react */}
        {/* <BubbleMenu
          editor={editor}
          tippyOptions={{ duration: 150 }}
          className="flex items-center gap-1 bg-[#1a1a1a] border border-white/20 rounded-xl px-2 py-1.5 shadow-2xl"
        >
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`px-2 py-1 rounded text-xs font-bold transition-colors ${
              editor.isActive("bold")
                ? "text-[#f26522]"
                : "text-gray-300 hover:text-white"
            }`}
          >
            B
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`px-2 py-1 rounded text-xs italic transition-colors ${
              editor.isActive("italic")
                ? "text-[#f26522]"
                : "text-gray-300 hover:text-white"
            }`}
          >
            I
          </button>
          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={`px-2 py-1 rounded text-xs underline transition-colors ${
              editor.isActive("underline")
                ? "text-[#f26522]"
                : "text-gray-300 hover:text-white"
            }`}
          >
            U
          </button>
          <div className="w-px h-4 bg-white/20 mx-0.5" />
          <button
            onClick={() => {
              const url = window.prompt("Enter URL:");
              if (url) editor.chain().focus().setLink({ href: url }).run();
            }}
            className={`px-2 py-1 rounded text-xs transition-colors ${
              editor.isActive("link")
                ? "text-[#f26522]"
                : "text-gray-300 hover:text-white"
            }`}
          >
            🔗
          </button>
        </BubbleMenu> */}
      </div>

      {showImageModal && (
        <ImageUploadModal
          onInsert={insertImage}
          onClose={() => setShowImageModal(false)}
        />
      )}
    </>
  );
}
