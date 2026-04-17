"use client";

import { useCallback, useRef, useState } from "react";

interface ImageUploadModalProps {
  onInsert: (src: string, alt: string, href?: string, width?: number) => void;
  onClose: () => void;
}

type Tab = "upload" | "url";

export default function ImageUploadModal({
  onInsert,
  onClose,
}: ImageUploadModalProps) {
  const [tab, setTab] = useState<Tab>("upload");
  const [preview, setPreview] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [alt, setAlt] = useState("");
  const [href, setHref] = useState("");
  const [width, setWidth] = useState<number>(0);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [naturalSize, setNaturalSize] = useState({ w: 0, h: 0 });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      setError("");
      setUploading(true);
      try {
        const formData = new FormData();
        formData.append("file", file);
        const res = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error);
        setPreview(data.url);
        setImageUrl(data.url);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Upload failed");
      } finally {
        setUploading(false);
      }
    },
    [],
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith("image/")) {
        const fakeEvent = {
          target: { files: [file] },
        } as unknown as React.ChangeEvent<HTMLInputElement>;
        handleFileChange(fakeEvent);
      }
    },
    [handleFileChange],
  );

  const handleInsert = () => {
    const src = tab === "url" ? imageUrl : preview;
    if (!src) {
      setError("Please provide an image");
      return;
    }
    onInsert(src, alt, href || undefined, width || undefined);
  };

  const handleImgLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    setNaturalSize({ w: img.naturalWidth, h: img.naturalHeight });
    if (!width) setWidth(Math.min(img.naturalWidth, 800));
  };

  const displaySrc = tab === "url" ? imageUrl : preview;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-[#0f172a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <h2 className="text-lg font-bold text-white">Insert Image</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="p-6 space-y-5">
          {/* Tabs */}
          <div className="flex gap-1 bg-white/5 rounded-xl p-1">
            {(["upload", "url"] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`flex-1 py-2 text-sm font-medium rounded-lg capitalize transition-all ${
                  tab === t
                    ? "bg-[#f26522] text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {t === "upload" ? "📁 Upload File" : "🔗 Image URL"}
              </button>
            ))}
          </div>

          {/* Upload Area */}
          {tab === "upload" && (
            <div
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center cursor-pointer hover:border-[#f26522]/60 hover:bg-[#f26522]/5 transition-all"
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
              {uploading ? (
                <div className="flex flex-col items-center gap-3">
                  <div className="w-8 h-8 border-2 border-[#f26522] border-t-transparent rounded-full animate-spin" />
                  <p className="text-gray-400 text-sm">Uploading...</p>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-2">
                  <span className="text-4xl">🖼</span>
                  <p className="text-white font-medium">
                    Drop image here or click to browse
                  </p>
                  <p className="text-gray-500 text-xs">
                    PNG, JPG, WebP, GIF, SVG — Max 10MB
                  </p>
                </div>
              )}
            </div>
          )}

          {/* URL Input */}
          {tab === "url" && (
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://example.com/image.jpg"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#f26522]/60"
            />
          )}

          {/* Preview */}
          {displaySrc && (
            <div className="bg-white/5 rounded-xl p-3 flex items-center justify-center max-h-48 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={displaySrc}
                alt="preview"
                className="max-h-40 max-w-full object-contain rounded-lg"
                onLoad={handleImgLoad}
              />
            </div>
          )}

          {/* Fields */}
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1.5">
                Alt Text{" "}
                <span className="text-gray-600">(for SEO & accessibility)</span>
              </label>
              <input
                type="text"
                value={alt}
                onChange={(e) => setAlt(e.target.value)}
                placeholder="Describe this image..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#f26522]/60"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1.5">
                Link URL{" "}
                <span className="text-gray-600">
                  (optional — makes image clickable)
                </span>
              </label>
              <input
                type="text"
                value={href}
                onChange={(e) => setHref(e.target.value)}
                placeholder="https://..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#f26522]/60"
              />
            </div>

            {naturalSize.w > 0 && (
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">
                  Width{" "}
                  <span className="text-gray-600">
                    (original: {naturalSize.w}×{naturalSize.h}px)
                  </span>
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min={100}
                    max={naturalSize.w}
                    step={10}
                    value={width}
                    onChange={(e) => setWidth(Number(e.target.value))}
                    className="flex-1 accent-[#f26522]"
                  />
                  <span className="text-white text-sm w-16 text-right">
                    {width}px
                  </span>
                </div>
                <div className="flex gap-2 mt-2">
                  {[25, 50, 75, 100].map((pct) => (
                    <button
                      key={pct}
                      onClick={() =>
                        setWidth(Math.round((naturalSize.w * pct) / 100))
                      }
                      className="flex-1 py-1 text-xs rounded-lg bg-white/5 hover:bg-[#f26522]/20 hover:text-[#f26522] text-gray-400 transition-all border border-white/10"
                    >
                      {pct}%
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {error && <p className="text-red-400 text-sm text-center">{error}</p>}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-white/10 bg-white/5">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-sm text-gray-400 hover:text-white border border-white/10 hover:border-white/30 transition-all"
          >
            Cancel
          </button>
          <button
            onClick={handleInsert}
            className="px-6 py-2 rounded-xl text-sm font-semibold bg-[#f26522] text-white hover:bg-[#f26522]/80 transition-all"
          >
            Insert Image
          </button>
        </div>
      </div>
    </div>
  );
}
