"use client";

import { SEOFields as SEOFieldsType } from "@/app/types/blog";
import { useState } from "react";

interface SEOFieldsProps {
  seo: SEOFieldsType;
  onChange: (seo: SEOFieldsType) => void;
}

export default function SEOFields({ seo, onChange }: SEOFieldsProps) {
  const [open, setOpen] = useState(false);

  const update = (key: keyof SEOFieldsType, val: string) => {
    onChange({ ...seo, [key]: val });
  };

  const titleLen = seo.metaTitle.length;
  const descLen = seo.metaDescription.length;

  const ScoreBar = ({
    len,
    ideal,
    max,
  }: {
    len: number;
    ideal: number;
    max: number;
  }) => {
    const pct = Math.min((len / max) * 100, 100);
    const color =
      len === 0
        ? "bg-gray-600"
        : len <= ideal
        ? "bg-green-500"
        : len <= max
        ? "bg-yellow-500"
        : "bg-red-500";
    return (
      <div className="flex items-center gap-2 mt-1">
        <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all ${color}`}
            style={{ width: `${pct}%` }}
          />
        </div>
        <span
          className={`text-xs ${
            len > max
              ? "text-red-400"
              : len <= ideal
              ? "text-green-400"
              : "text-yellow-400"
          }`}
        >
          {len}/{max}
        </span>
      </div>
    );
  };

  return (
    <div className="border border-white/10 rounded-2xl overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-white/[0.03] hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-[#f26522]">🔍</span>
          <span className="font-semibold text-white">SEO Settings</span>
          <div className="flex gap-1.5">
            <div
              className={`w-2 h-2 rounded-full ${
                titleLen > 0 && titleLen <= 60
                  ? "bg-green-500"
                  : titleLen > 60
                  ? "bg-yellow-500"
                  : "bg-gray-600"
              }`}
              title="Meta title"
            />
            <div
              className={`w-2 h-2 rounded-full ${
                descLen >= 120 && descLen <= 160
                  ? "bg-green-500"
                  : descLen > 0
                  ? "bg-yellow-500"
                  : "bg-gray-600"
              }`}
              title="Meta description"
            />
          </div>
        </div>
        <span
          className={`text-gray-400 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      {open && (
        <div className="p-5 space-y-5 border-t border-white/10">
          {/* Preview */}
          <div className="bg-white/5 rounded-xl p-4 space-y-1">
            <p className="text-[#f26522] text-sm font-medium">
              Google Search Preview
            </p>
            <div className="space-y-0.5">
              <p className="text-blue-400 text-base truncate">
                {seo.metaTitle || "Page Title Will Appear Here"}
              </p>
              <p className="text-green-500 text-xs">
                {seo.canonicalUrl || "https://marketrixa.com/blogs/your-slug"}
              </p>
              <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                {seo.metaDescription ||
                  "Meta description will appear here — keep it between 120-160 characters."}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <Field label="Meta Title" hint="50–60 characters ideal">
              <input
                value={seo.metaTitle}
                onChange={(e) => update("metaTitle", e.target.value)}
                placeholder="Compelling title for search engines..."
                className="input-style"
              />
              <ScoreBar len={titleLen} ideal={60} max={70} />
            </Field>

            <Field label="Meta Description" hint="120–160 characters ideal">
              <textarea
                value={seo.metaDescription}
                onChange={(e) => update("metaDescription", e.target.value)}
                placeholder="Brief description that entices clicks from search results..."
                rows={3}
                className="input-style resize-none"
              />
              <ScoreBar len={descLen} ideal={160} max={180} />
            </Field>

            <Field label="Meta Keywords" hint="Comma-separated">
              <input
                value={seo.metaKeywords}
                onChange={(e) => update("metaKeywords", e.target.value)}
                placeholder="keyword1, keyword2, keyword3..."
                className="input-style"
              />
            </Field>

            <div className="grid grid-cols-2 gap-4">
              <Field label="OG Title">
                <input
                  value={seo.ogTitle}
                  onChange={(e) => update("ogTitle", e.target.value)}
                  placeholder="Social media title..."
                  className="input-style"
                />
              </Field>
              <Field label="OG Image URL">
                <input
                  value={seo.ogImage}
                  onChange={(e) => update("ogImage", e.target.value)}
                  placeholder="https://..."
                  className="input-style"
                />
              </Field>
            </div>

            <Field label="OG Description">
              <textarea
                value={seo.ogDescription}
                onChange={(e) => update("ogDescription", e.target.value)}
                placeholder="Description shown on social media share..."
                rows={2}
                className="input-style resize-none"
              />
            </Field>

            <Field label="Canonical URL">
              <input
                value={seo.canonicalUrl}
                onChange={(e) => update("canonicalUrl", e.target.value)}
                placeholder="https://marketrixa.com/blogs/your-slug"
                className="input-style"
              />
            </Field>

            <Field label="Structured Data (JSON-LD)" hint="Optional — advanced">
              <textarea
                value={seo.structuredData || ""}
                onChange={(e) => update("structuredData", e.target.value)}
                placeholder='{"@context":"https://schema.org","@type":"Article",...}'
                rows={4}
                className="input-style resize-none font-mono text-xs"
              />
            </Field>
          </div>
        </div>
      )}

      <style jsx>{`
        .input-style {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.75rem;
          padding: 0.625rem 1rem;
          color: white;
          font-size: 0.875rem;
          outline: none;
          transition: border-color 0.2s;
        }
        .input-style::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }
        .input-style:focus {
          border-color: rgba(242, 101, 34, 0.6);
        }
      `}</style>
    </div>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-1.5">
        <label className="text-xs font-medium text-gray-400">{label}</label>
        {hint && <span className="text-xs text-gray-600">{hint}</span>}
      </div>
      {children}
    </div>
  );
}
