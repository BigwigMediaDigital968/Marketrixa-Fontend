// "use client";

// import { useCallback, useEffect, useRef, useState } from "react";
// import { useRouter } from "next/navigation";
// import dynamic from "next/dynamic";
// import {
//   Blog,
//   BlogFormData,
//   BlogStatus,
//   FAQ,
//   SEOFields as SEOFieldsType,
// } from "@/app/types/blog";
// import StatusBadge from "./Statusbadge";
// import SEOFields from "./Seofields";

// const BlogEditor = dynamic(
//   () => import("@/app/component/admin/blog/BlogEditor"),
//   {
//     ssr: false,
//     loading: () => (
//       <div className="h-96 rounded-xl border border-white/10 flex items-center justify-center">
//         <div className="w-6 h-6 border-2 border-[#f26522] border-t-transparent rounded-full animate-spin" />
//       </div>
//     ),
//   },
// );

// // ─── Constants ───────────────────────────────────────────────────────────────

// const INDUSTRIES = [
//   "Technology",
//   "Sales",
//   "Marketing",
//   "Finance",
//   "Healthcare",
//   "Manufacturing",
//   "SaaS",
//   "E-commerce",
//   "Education",
//   "Other",
// ];

// const emptySEO: SEOFieldsType = {
//   metaTitle: "",
//   metaDescription: "",
//   metaKeywords: "",
//   ogTitle: "",
//   ogDescription: "",
//   ogImage: "",
//   canonicalUrl: "",
//   structuredData: "",
// };

// const emptyForm: BlogFormData = {
//   title: "",
//   slug: "",
//   excerpt: "",
//   content: "",
//   coverImage: "",
//   coverImageAlt: "",
//   author: "Marketrixa Team",
//   industry: "Technology",
//   tags: [],
//   status: "draft",
//   seo: emptySEO,
// };

// interface InlineFAQ {
//   title: string;
//   description: string;
//   items: Array<{ id: string; question: string; answer: string }>;
// }

// const emptyFAQ: InlineFAQ = { title: "", description: "", items: [] };

// // ─── Types ───────────────────────────────────────────────────────────────────

// interface BlogFormProps {
//   initialData?: Blog;
//   initialFAQGroup?: { title: string; description?: string; faqs: FAQ[] } | null;
//   mode: "new" | "edit";
// }

// // ─── Helpers ─────────────────────────────────────────────────────────────────

// function slugify(str: string) {
//   return str
//     .toLowerCase()
//     .replace(/[^a-z0-9]+/g, "-")
//     .replace(/(^-|-$)/g, "");
// }

// function charCount(str: string) {
//   return str.length;
// }

// function seoScore(form: BlogFormData, faq: InlineFAQ) {
//   let score = 0;
//   if (
//     form.seo.metaTitle &&
//     form.seo.metaTitle.length >= 30 &&
//     form.seo.metaTitle.length <= 60
//   )
//     score += 20;
//   if (
//     form.seo.metaDescription &&
//     form.seo.metaDescription.length >= 120 &&
//     form.seo.metaDescription.length <= 160
//   )
//     score += 20;
//   if (form.seo.metaKeywords) score += 10;
//   if (form.coverImage) score += 10;
//   if (form.seo.canonicalUrl) score += 10;
//   if (form.seo.ogTitle && form.seo.ogDescription) score += 10;
//   if (faq.items.length > 0) score += 10;
//   if (form.seo.structuredData) score += 10;
//   return score;
// }

// // ─── Sub-components ──────────────────────────────────────────────────────────

// function SeoScoreRing({ score }: { score: number }) {
//   const color = score >= 80 ? "#10b981" : score >= 50 ? "#f59e0b" : "#ef4444";
//   const label = score >= 80 ? "Good" : score >= 50 ? "Needs work" : "Poor";
//   const r = 22;
//   const circ = 2 * Math.PI * r;
//   const dash = (score / 100) * circ;
//   return (
//     <div className="flex items-center gap-3">
//       <svg width="56" height="56" viewBox="0 0 56 56">
//         <circle
//           cx="28"
//           cy="28"
//           r={r}
//           fill="none"
//           stroke="rgba(255,255,255,0.06)"
//           strokeWidth="4"
//         />
//         <circle
//           cx="28"
//           cy="28"
//           r={r}
//           fill="none"
//           stroke={color}
//           strokeWidth="4"
//           strokeDasharray={`${dash} ${circ}`}
//           strokeLinecap="round"
//           transform="rotate(-90 28 28)"
//           style={{ transition: "stroke-dasharray 0.6s ease" }}
//         />
//         <text
//           x="28"
//           y="32"
//           textAnchor="middle"
//           fill="white"
//           fontSize="12"
//           fontWeight="600"
//         >
//           {score}
//         </text>
//       </svg>
//       <div>
//         <p className="text-white text-sm font-semibold">SEO Score</p>
//         <p className="text-xs" style={{ color }}>
//           {label}
//         </p>
//       </div>
//     </div>
//   );
// }

// function ReadabilityMeta({
//   content,
//   readTime,
// }: {
//   content: string;
//   readTime: number;
// }) {
//   const text = content.replace(/<[^>]+>/g, "");
//   const words = text.trim() ? text.trim().split(/\s+/).length : 0;
//   return (
//     <div className="flex items-center gap-4 text-xs text-gray-500">
//       <span>{words.toLocaleString()} words</span>
//       <span className="w-px h-3 bg-white/10" />
//       <span>{readTime} min read</span>
//       <span className="w-px h-3 bg-white/10" />
//       <span>{charCount(text).toLocaleString()} chars</span>
//     </div>
//   );
// }

// function FAQItem({
//   item,
//   index,
//   onUpdate,
//   onDelete,
//   onMoveUp,
//   onMoveDown,
//   isFirst,
//   isLast,
// }: {
//   item: { id: string; question: string; answer: string };
//   index: number;
//   onUpdate: (id: string, field: "question" | "answer", val: string) => void;
//   onDelete: (id: string) => void;
//   onMoveUp: (index: number) => void;
//   onMoveDown: (index: number) => void;
//   isFirst: boolean;
//   isLast: boolean;
// }) {
//   const [open, setOpen] = useState(true);
//   return (
//     <div className="border border-white/[0.08] rounded-xl overflow-hidden bg-white/[0.02]">
//       <div
//         className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-white/[0.03] transition-colors"
//         onClick={() => setOpen((o) => !o)}
//       >
//         <span className="text-gray-600 text-xs font-mono w-5 text-center select-none">
//           {index + 1}
//         </span>
//         <span className="flex-1 text-sm text-gray-300 truncate">
//           {item.question || (
//             <span className="text-gray-600 italic">Question not set</span>
//           )}
//         </span>
//         <div
//           className="flex items-center gap-1"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <button
//             onClick={() => onMoveUp(index)}
//             disabled={isFirst}
//             className="p-1.5 text-gray-600 hover:text-gray-300 disabled:opacity-20 transition-colors rounded-lg hover:bg-white/5"
//             title="Move up"
//           >
//             <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
//               <path
//                 d="M2 8l4-4 4 4"
//                 stroke="currentColor"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </button>
//           <button
//             onClick={() => onMoveDown(index)}
//             disabled={isLast}
//             className="p-1.5 text-gray-600 hover:text-gray-300 disabled:opacity-20 transition-colors rounded-lg hover:bg-white/5"
//             title="Move down"
//           >
//             <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
//               <path
//                 d="M2 4l4 4 4-4"
//                 stroke="currentColor"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </button>
//           <button
//             onClick={() => onDelete(item.id)}
//             className="p-1.5 text-gray-600 hover:text-red-400 transition-colors rounded-lg hover:bg-red-500/10"
//             title="Delete"
//           >
//             <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
//               <path
//                 d="M2 2l8 8M10 2l-8 8"
//                 stroke="currentColor"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//               />
//             </svg>
//           </button>
//           <svg
//             width="12"
//             height="12"
//             viewBox="0 0 12 12"
//             fill="none"
//             className={`text-gray-600 transition-transform ${
//               open ? "rotate-180" : ""
//             }`}
//           >
//             <path
//               d="M2 4l4 4 4-4"
//               stroke="currentColor"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </div>
//       </div>
//       {open && (
//         <div className="px-4 pb-4 space-y-3 border-t border-white/[0.06]">
//           <div className="pt-3">
//             <label className="label-sm">Question</label>
//             <input
//               value={item.question}
//               onChange={(e) => onUpdate(item.id, "question", e.target.value)}
//               placeholder="e.g. What industries do you serve?"
//               className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#f26522]/60 transition-colors"
//             />
//           </div>
//           <div>
//             <label className="label-sm">Answer</label>
//             <textarea
//               value={item.answer}
//               onChange={(e) => onUpdate(item.id, "answer", e.target.value)}
//               placeholder="Provide a clear, concise answer…"
//               rows={3}
//               className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#f26522]/60 transition-colors resize-none"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// // ─── Main component ───────────────────────────────────────────────────────────

// export default function BlogForm({
//   initialData,
//   initialFAQGroup,
//   mode,
// }: BlogFormProps) {
//   const router = useRouter();

//   const [form, setForm] = useState<BlogFormData>(
//     initialData
//       ? {
//           title: initialData.title,
//           slug: initialData.slug,
//           excerpt: initialData.excerpt,
//           content: initialData.content,
//           coverImage: initialData.coverImage,
//           coverImageAlt: initialData.coverImageAlt,
//           author: initialData.author,
//           industry: initialData.industry,
//           tags: initialData.tags,
//           status: initialData.status,
//           seo: initialData.seo,
//           faqGroupId: initialData.faqGroupId,
//         }
//       : emptyForm,
//   );

//   const [faq, setFaq] = useState<InlineFAQ>(() => {
//     if (initialFAQGroup) {
//       return {
//         title: initialFAQGroup.title,
//         description: initialFAQGroup.description ?? "",
//         items: initialFAQGroup.faqs.map((f) => ({
//           id: f.id,
//           question: f.question,
//           answer: f.answer,
//         })),
//       };
//     }
//     return emptyFAQ;
//   });

//   const [tagInput, setTagInput] = useState("");
//   const [saving, setSaving] = useState(false);
//   const [error, setError] = useState("");
//   const [autoSlug, setAutoSlug] = useState(mode === "new");
//   const [activeTab, setActiveTab] = useState<
//     "content" | "seo" | "faq" | "settings"
//   >("content");
//   const [readTime, setReadTime] = useState(initialData?.readTime ?? 0);
//   const coverInputRef = useRef<HTMLInputElement>(null);
//   const ogImageRef = useRef<HTMLInputElement>(null);

//   const score = seoScore(form, faq);

//   // Auto-slug
//   useEffect(() => {
//     if (autoSlug && form.title) {
//       setForm((p) => ({ ...p, slug: slugify(p.title) }));
//     }
//   }, [form.title, autoSlug]);

//   // Auto-fill SEO title/og from title
//   useEffect(() => {
//     if (!form.seo.metaTitle && form.title) {
//       setForm((p) => ({
//         ...p,
//         seo: {
//           ...p.seo,
//           metaTitle: `${p.title} | Marketrixa`,
//           ogTitle: p.title,
//         },
//       }));
//     }
//   }, [form.title]); // eslint-disable-line

//   // Auto read-time from content
//   useEffect(() => {
//     const words = form.content
//       .replace(/<[^>]+>/g, "")
//       .trim()
//       .split(/\s+/).length;
//     setReadTime(Math.max(1, Math.ceil(words / 200)));
//   }, [form.content]);

//   // Auto canonical URL
//   useEffect(() => {
//     if (form.slug && !form.seo.canonicalUrl) {
//       setForm((p) => ({
//         ...p,
//         seo: {
//           ...p.seo,
//           canonicalUrl: `https://marketrixa.com/blogs/${form.slug}`,
//         },
//       }));
//     }
//   }, [form.slug]); // eslint-disable-line

//   const update = useCallback(
//     <K extends keyof BlogFormData>(key: K, val: BlogFormData[K]) => {
//       setForm((p) => ({ ...p, [key]: val }));
//     },
//     [],
//   );

//   const updateSeo = useCallback(
//     <K extends keyof SEOFieldsType>(key: K, val: SEOFieldsType[K]) => {
//       setForm((p) => ({ ...p, seo: { ...p.seo, [key]: val } }));
//     },
//     [],
//   );

//   // ── Tag helpers ──
//   const addTag = () => {
//     const t = tagInput.trim();
//     if (t && !form.tags.includes(t)) update("tags", [...form.tags, t]);
//     setTagInput("");
//   };

//   // ── FAQ helpers ──
//   const addFAQItem = () => {
//     setFaq((p) => ({
//       ...p,
//       items: [
//         ...p.items,
//         { id: `faq_${Date.now()}`, question: "", answer: "" },
//       ],
//     }));
//   };

//   const updateFAQItem = (
//     id: string,
//     field: "question" | "answer",
//     val: string,
//   ) => {
//     setFaq((p) => ({
//       ...p,
//       items: p.items.map((i) => (i.id === id ? { ...i, [field]: val } : i)),
//     }));
//   };

//   const deleteFAQItem = (id: string) => {
//     setFaq((p) => ({ ...p, items: p.items.filter((i) => i.id !== id) }));
//   };

//   const moveFAQItem = (index: number, dir: "up" | "down") => {
//     const newItems = [...faq.items];
//     const swap = dir === "up" ? index - 1 : index + 1;
//     [newItems[index], newItems[swap]] = [newItems[swap], newItems[index]];
//     setFaq((p) => ({ ...p, items: newItems }));
//   };

//   // ── Cover image ──
//   const handleCoverUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     const fd = new FormData();
//     fd.append("file", file);
//     const res = await fetch("/api/upload", { method: "POST", body: fd });
//     const data = await res.json();
//     if (data.url) update("coverImage", data.url);
//   };

//   // ── Generate structured data ──
//   const generateStructuredData = () => {
//     const sd: Record<string, unknown> = {
//       "@context": "https://schema.org",
//       "@type": "BlogPosting",
//       headline: form.title,
//       description: form.excerpt,
//       author: { "@type": "Organization", name: form.author },
//       publisher: { "@type": "Organization", name: "Marketrixa" },
//       url: form.seo.canonicalUrl,
//       image: form.coverImage || undefined,
//     };
//     if (faq.items.length > 0) {
//       Object.assign(sd, {
//         mainEntity: {
//           "@type": "FAQPage",
//           mainEntity: faq.items.map((f) => ({
//             "@type": "Question",
//             name: f.question,
//             acceptedAnswer: { "@type": "Answer", text: f.answer },
//           })),
//         },
//       });
//     }
//     updateSeo("structuredData", JSON.stringify(sd, null, 2));
//   };

//   // ── Submit ──
//   const handleSubmit = async (overrideStatus?: BlogStatus) => {
//     setError("");
//     if (!form.title.trim()) {
//       setError("Title is required");
//       return;
//     }
//     if (!form.slug.trim()) {
//       setError("Slug is required");
//       return;
//     }
//     if (!form.content || form.content === "<p></p>") {
//       setError("Content cannot be empty");
//       return;
//     }

//     setSaving(true);
//     try {
//       const validFAQItems = faq.items.filter(
//         (i) => i.question.trim() && i.answer.trim(),
//       );
//       const payload = {
//         ...form,
//         readTime,
//         ...(overrideStatus ? { status: overrideStatus } : {}),
//         ...(validFAQItems.length > 0
//           ? {
//               faqs: {
//                 title: faq.title || `${form.title} - FAQs`,
//                 description: faq.description || undefined,
//                 items: validFAQItems.map(({ question, answer }) => ({
//                   question,
//                   answer,
//                 })),
//               },
//             }
//           : { faqs: { title: "", items: [] } }),
//       };

//       const url =
//         mode === "new" ? "/api/blogs" : `/api/blogs/${initialData?.id}`;
//       const method = mode === "new" ? "POST" : "PUT";
//       const res = await fetch(url, {
//         method,
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });
//       const data = await res.json().catch(() => ({}));

//       if (!res.ok) {
//         throw new Error(data?.error || "Something went wrong");
//       }
//       router.push("/blog-management");
//       router.refresh();
//     } catch (err: unknown) {
//       setError(err instanceof Error ? err.message : "Save failed");
//     } finally {
//       setSaving(false);
//     }
//   };

//   const inputCls =
//     "w-full bg-white/[0.04] border border-white/[0.09] rounded-xl px-4 py-2.5 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#f26522]/60 focus:bg-white/[0.06] transition-all";

//   // ─── SEO tab helpers ──────────────────────────────────────────────────────

//   function MetaBar({
//     label,
//     value,
//     min,
//     max,
//     warn,
//   }: {
//     label: string;
//     value: string;
//     min: number;
//     max: number;
//     warn?: boolean;
//   }) {
//     const len = value.length;
//     const pct = Math.min(100, (len / max) * 100);
//     const ok = len >= min && len <= max;
//     const over = len > max;
//     const barColor = over ? "#ef4444" : ok ? "#10b981" : "#f59e0b";
//     return (
//       <div className="space-y-1">
//         <div className="flex justify-between items-center">
//           <label className="label-sm">{label}</label>
//           <span
//             className={`text-xs tabular-nums ${
//               over ? "text-red-400" : ok ? "text-emerald-400" : "text-gray-500"
//             }`}
//           >
//             {len} / {max}
//           </span>
//         </div>
//         <div className="h-1 rounded-full bg-white/[0.06] overflow-hidden">
//           <div
//             className="h-full rounded-full transition-all duration-300"
//             style={{ width: `${pct}%`, backgroundColor: barColor }}
//           />
//         </div>
//         {warn && over && (
//           <p className="text-xs text-red-400">
//             Exceeds recommended length — may be truncated in search results
//           </p>
//         )}
//       </div>
//     );
//   }

//   // ─── Render ───────────────────────────────────────────────────────────────

//   return (
//     <div className="min-h-screen p-6 lg:p-8">
//       <div className="max-w-5xl mx-auto space-y-6">
//         {/* ── Top bar ── */}
//         <div className="flex items-center justify-between gap-4">
//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => router.back()}
//               className="p-2 rounded-xl border border-white/10 text-gray-500 hover:text-white hover:border-white/20 transition-all"
//             >
//               <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                 <path
//                   d="M10 4l-4 4 4 4"
//                   stroke="currentColor"
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </button>
//             <div>
//               <div className="flex items-center gap-2">
//                 <h1 className="text-xl font-bold text-white">
//                   {mode === "new" ? "New Blog Post" : "Edit Blog Post"}
//                 </h1>
//                 {initialData && <StatusBadge status={form.status} />}
//               </div>
//               <ReadabilityMeta content={form.content} readTime={readTime} />
//             </div>
//           </div>
//           <div className="flex items-center gap-2">
//             <button
//               onClick={() => handleSubmit("draft")}
//               disabled={saving}
//               className="px-4 py-2.5 rounded-xl text-sm font-medium border border-white/10 text-gray-400 hover:border-[#f26522]/40 hover:text-[#f26522] transition-all disabled:opacity-40"
//             >
//               Save Draft
//             </button>
//             <button
//               onClick={() => handleSubmit("published")}
//               disabled={saving}
//               className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-[#f26522] text-white hover:bg-[#f26522]/80 transition-all shadow-lg shadow-[#f26522]/20 disabled:opacity-50 flex items-center gap-2"
//             >
//               {saving && (
//                 <span className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
//               )}
//               {form.status === "published" ? "Update" : "Publish"}
//             </button>
//           </div>
//         </div>

//         {/* ── Error ── */}
//         {error && (
//           <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-red-400 text-sm">
//             <svg
//               width="16"
//               height="16"
//               viewBox="0 0 16 16"
//               fill="none"
//               className="shrink-0"
//             >
//               <circle
//                 cx="8"
//                 cy="8"
//                 r="7"
//                 stroke="currentColor"
//                 strokeWidth="1.4"
//               />
//               <path
//                 d="M8 5v3.5M8 10.5v.5"
//                 stroke="currentColor"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//               />
//             </svg>
//             {error}
//           </div>
//         )}

//         {/* ── Tabs ── */}
//         <div className="flex gap-1 bg-white/[0.04] rounded-xl p-1 w-fit border border-white/[0.06]">
//           {(
//             [
//               { id: "content", label: "Content", icon: "✍" },
//               { id: "seo", label: "SEO", icon: "🔍" },
//               {
//                 id: "faq",
//                 label: `FAQs${
//                   faq.items.length > 0 ? ` (${faq.items.length})` : ""
//                 }`,
//                 icon: "❓",
//               },
//               { id: "settings", label: "Settings", icon: "⚙" },
//             ] as const
//           ).map((tab) => (
//             <button
//               key={tab.id}
//               onClick={() => setActiveTab(tab.id)}
//               className={`px-4 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-1.5 ${
//                 activeTab === tab.id
//                   ? "bg-[#f26522] text-white shadow-md shadow-[#f26522]/20"
//                   : "text-gray-500 hover:text-gray-300"
//               }`}
//             >
//               <span className="text-xs">{tab.icon}</span>
//               {tab.label}
//             </button>
//           ))}
//         </div>

//         {/* ════════════════════════════════════════════════
//             CONTENT TAB
//         ════════════════════════════════════════════════ */}
//         {activeTab === "content" && (
//           <div className="space-y-5">
//             {/* Cover image */}
//             <div className="rounded-2xl p-5 space-y-4 bg-white/[0.03] border border-white/[0.07]">
//               <h3 className="text-sm font-semibold text-gray-300 flex items-center gap-2">
//                 <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//                   <rect
//                     x="1"
//                     y="2"
//                     width="12"
//                     height="10"
//                     rx="2"
//                     stroke="currentColor"
//                     strokeWidth="1.2"
//                   />
//                   <circle
//                     cx="5"
//                     cy="6"
//                     r="1.2"
//                     stroke="currentColor"
//                     strokeWidth="1"
//                   />
//                   <path
//                     d="M1 10l3.5-3 2.5 2 2-1.5L13 10"
//                     stroke="currentColor"
//                     strokeWidth="1"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//                 Cover Image
//               </h3>
//               <div className="flex gap-4 items-start">
//                 {form.coverImage ? (
//                   <div className="relative group shrink-0">
//                     {/* eslint-disable-next-line @next/next/no-img-element */}
//                     <img
//                       src={form.coverImage}
//                       alt="cover"
//                       className="w-28 h-20 object-cover rounded-lg border border-white/10 shadow-sm transition-transform duration-300 group-hover:scale-[1.03]"
//                     />
//                     <button
//                       onClick={() => update("coverImage", "")}
//                       className="absolute top-1.5 right-1.5 w-6 h-6 bg-black/70 text-white text-xs rounded-lg hidden group-hover:flex items-center justify-center border border-white/20 hover:bg-red-500/80 transition-colors"
//                     >
//                       ✕
//                     </button>
//                   </div>
//                 ) : (
//                   <div
//                     onClick={() => coverInputRef.current?.click()}
//                     className="w-44 h-28 border border-dashed border-white/20 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-[#f26522]/50 transition-all text-gray-600 hover:text-[#f26522] shrink-0 group"
//                   >
//                     <svg
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       className="mb-1.5"
//                     >
//                       <path
//                         d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"
//                         stroke="currentColor"
//                         strokeWidth="1.5"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                     <span className="text-xs">Upload cover</span>
//                     <span className="text-[10px] text-gray-700 mt-0.5">
//                       1200×630 recommended
//                     </span>
//                   </div>
//                 )}
//                 <input
//                   ref={coverInputRef}
//                   type="file"
//                   accept="image/*"
//                   className="hidden"
//                   onChange={handleCoverUpload}
//                 />
//                 <div className="flex-1 space-y-3">
//                   <div>
//                     <label className="label-sm">
//                       Alt Text <span className="text-gray-700">(SEO)</span>
//                     </label>
//                     <input
//                       type="text"
//                       value={form.coverImageAlt}
//                       onChange={(e) => update("coverImageAlt", e.target.value)}
//                       placeholder="Describe the image for screen readers and search engines…"
//                       className={inputCls}
//                     />
//                   </div>
//                   {!form.coverImage && (
//                     <p className="text-xs text-amber-500/70 flex items-center gap-1.5">
//                       <svg
//                         width="12"
//                         height="12"
//                         viewBox="0 0 12 12"
//                         fill="none"
//                       >
//                         <path
//                           d="M6 1l5 10H1L6 1z"
//                           stroke="currentColor"
//                           strokeWidth="1"
//                           strokeLinejoin="round"
//                         />
//                         <path
//                           d="M6 5v2.5M6 9v.5"
//                           stroke="currentColor"
//                           strokeWidth="1.2"
//                           strokeLinecap="round"
//                         />
//                       </svg>
//                       Missing cover image reduces SEO score
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Title + Slug */}
//             <div className="rounded-2xl p-5 space-y-4 bg-white/[0.03] border border-white/[0.07]">
//               <div>
//                 <label className="label-sm">
//                   Blog Title <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   value={form.title}
//                   onChange={(e) => update("title", e.target.value)}
//                   placeholder="Enter a compelling blog title…"
//                   className={`${inputCls} text-base font-semibold`}
//                   maxLength={100}
//                 />
//                 <p className="text-xs text-gray-700 mt-1 text-right">
//                   {form.title.length}/100
//                 </p>
//               </div>

//               <div>
//                 <div className="flex items-center justify-between mb-1.5">
//                   <label className="label-sm">
//                     URL Slug <span className="text-red-500">*</span>
//                   </label>
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setAutoSlug(true);
//                       update("slug", slugify(form.title));
//                     }}
//                     className="text-xs text-[#f26522]/60 hover:text-[#f26522] transition-colors flex items-center gap-1"
//                   >
//                     <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
//                       <path
//                         d="M8.5 1.5A4.5 4.5 0 115 9.5"
//                         stroke="currentColor"
//                         strokeWidth="1.2"
//                         strokeLinecap="round"
//                       />
//                       <path
//                         d="M8.5 4.5V1.5H5.5"
//                         stroke="currentColor"
//                         strokeWidth="1.2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                     Auto-generate
//                   </button>
//                 </div>
//                 <div className="flex items-center gap-0">
//                   <span className="px-3 py-2.5 bg-white/[0.03] border border-r-0 border-white/[0.08] rounded-l-xl text-gray-600 text-xs font-mono whitespace-nowrap">
//                     marketrixa.com/blogs/
//                   </span>
//                   <input
//                     value={form.slug}
//                     onChange={(e) => {
//                       setAutoSlug(false);
//                       update("slug", slugify(e.target.value));
//                     }}
//                     placeholder="your-blog-slug"
//                     className="flex-1 bg-white/[0.04] border border-white/[0.09] rounded-r-xl px-4 py-2.5 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#f26522]/60 font-mono transition-all"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <div className="flex items-center justify-between mb-1.5">
//                   <label className="label-sm">Excerpt / Summary</label>
//                   <span
//                     className={`text-xs tabular-nums ${
//                       form.excerpt.length > 200
//                         ? "text-amber-400"
//                         : "text-gray-600"
//                     }`}
//                   >
//                     {form.excerpt.length}/200
//                   </span>
//                 </div>
//                 <textarea
//                   value={form.excerpt}
//                   onChange={(e) => update("excerpt", e.target.value)}
//                   placeholder="Brief summary shown in blog listings and social shares (150–200 chars recommended)…"
//                   rows={3}
//                   maxLength={300}
//                   className={`${inputCls} resize-none`}
//                 />
//               </div>
//             </div>

//             {/* Editor */}
//             <div className="space-y-2">
//               <div className="flex items-center justify-between">
//                 <label className="label-sm">
//                   Content <span className="text-red-500">*</span>
//                 </label>
//                 <ReadabilityMeta content={form.content} readTime={readTime} />
//               </div>
//               <BlogEditor
//                 content={form.content}
//                 onChange={(html) => update("content", html)}
//               />
//             </div>
//           </div>
//         )}

//         {/* ════════════════════════════════════════════════
//             SEO TAB
//         ════════════════════════════════════════════════ */}
//         {activeTab === "seo" && (
//           <div className="space-y-5">
//             {/* Score card */}
//             <div className="rounded-2xl p-5 bg-white/[0.03] border border-white/[0.07] flex items-center justify-between">
//               <SeoScoreRing score={score} />
//               <div className="grid grid-cols-3 gap-3 flex-1 ml-8">
//                 {[
//                   {
//                     label: "Title",
//                     ok:
//                       form.seo.metaTitle.length >= 30 &&
//                       form.seo.metaTitle.length <= 60,
//                   },
//                   {
//                     label: "Description",
//                     ok:
//                       form.seo.metaDescription.length >= 120 &&
//                       form.seo.metaDescription.length <= 160,
//                   },
//                   { label: "Keywords", ok: !!form.seo.metaKeywords },
//                   { label: "Cover image", ok: !!form.coverImage },
//                   { label: "Canonical URL", ok: !!form.seo.canonicalUrl },
//                   { label: "FAQ schema", ok: faq.items.length > 0 },
//                 ].map((c) => (
//                   <div key={c.label} className="flex items-center gap-2">
//                     <div
//                       className={`w-1.5 h-1.5 rounded-full ${
//                         c.ok ? "bg-emerald-400" : "bg-white/20"
//                       }`}
//                     />
//                     <span
//                       className={`text-xs ${
//                         c.ok ? "text-gray-300" : "text-gray-600"
//                       }`}
//                     >
//                       {c.label}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* SERP Preview */}
//             <div className="rounded-2xl p-5 bg-white/[0.03] border border-white/[0.07] space-y-3">
//               <h3 className="text-sm font-semibold text-gray-300">
//                 Search Preview (Google SERP)
//               </h3>
//               <div className="rounded-xl bg-white p-4 space-y-0.5">
//                 <p className="text-black text-base font-medium leading-tight truncate">
//                   {form.seo.metaTitle ||
//                     form.title ||
//                     "Page title appears here"}
//                 </p>
//                 <p className="text-black text-xs">
//                   https://marketrixa.com/blogs/{form.slug || "your-slug"}
//                 </p>
//                 <p className="text-black text-sm leading-snug line-clamp-2">
//                   {form.seo.metaDescription ||
//                     form.excerpt ||
//                     "Page description appears here. Make it compelling and keyword-rich."}
//                 </p>
//               </div>
//             </div>

//             {/* Meta fields */}
//             <div className="rounded-2xl p-5 bg-white/[0.03] border border-white/[0.07] space-y-5">
//               <h3 className="text-sm font-semibold text-gray-300">Meta Tags</h3>

//               <div className="space-y-3">
//                 <MetaBar
//                   label="Meta Title"
//                   value={form.seo.metaTitle}
//                   min={30}
//                   max={60}
//                   warn
//                 />
//                 <input
//                   value={form.seo.metaTitle}
//                   onChange={(e) => updateSeo("metaTitle", e.target.value)}
//                   placeholder="e.g. How AI is Transforming B2B Marketing in 2025 | Marketrixa"
//                   className={inputCls}
//                 />
//               </div>

//               <div className="space-y-3">
//                 <MetaBar
//                   label="Meta Description"
//                   value={form.seo.metaDescription}
//                   min={120}
//                   max={160}
//                   warn
//                 />
//                 <textarea
//                   value={form.seo.metaDescription}
//                   onChange={(e) => updateSeo("metaDescription", e.target.value)}
//                   placeholder="Concise description of this page that entices users to click in search results…"
//                   rows={3}
//                   className={`${inputCls} resize-none`}
//                 />
//               </div>

//               <div>
//                 <label className="label-sm">Focus Keywords</label>
//                 <input
//                   value={form.seo.metaKeywords}
//                   onChange={(e) => updateSeo("metaKeywords", e.target.value)}
//                   placeholder="AI, B2B marketing, marketing automation, lead generation"
//                   className={inputCls}
//                 />
//                 <p className="text-xs text-gray-700 mt-1">
//                   Comma-separated, 5–10 keywords recommended
//                 </p>
//               </div>

//               <div>
//                 <label className="label-sm">Canonical URL</label>
//                 <input
//                   value={form.seo.canonicalUrl}
//                   onChange={(e) => updateSeo("canonicalUrl", e.target.value)}
//                   placeholder="https://marketrixa.com/blogs/your-slug"
//                   className={`${inputCls} font-mono text-xs`}
//                 />
//               </div>
//             </div>

//             {/* Open Graph */}
//             <div className="rounded-2xl p-5 bg-white/[0.03] border border-white/[0.07] space-y-5">
//               <h3 className="text-sm font-semibold text-gray-300 flex items-center gap-2">
//                 Open Graph
//                 <span className="text-xs font-normal text-gray-600">
//                   — controls how this page looks when shared on social media
//                 </span>
//               </h3>

//               {/* OG Preview */}
//               <div className="rounded-xl overflow-hidden border border-white/10">
//                 <div className="h-32 bg-white/5 flex items-center justify-center relative overflow-hidden">
//                   {form.seo.ogImage || form.coverImage ? (
//                     // eslint-disable-next-line @next/next/no-img-element
//                     <img
//                       src={form.seo.ogImage || form.coverImage}
//                       alt="og"
//                       className="w-full h-full object-cover"
//                     />
//                   ) : (
//                     <span className="text-gray-700 text-sm">
//                       OG Image Preview
//                     </span>
//                   )}
//                 </div>
//                 <div className="p-3 bg-[#f0f2f5]">
//                   <p className="text-[#65676b] text-[10px] uppercase tracking-wider">
//                     MARKETRIXA.COM
//                   </p>
//                   <p className="text-[#050505] text-sm font-semibold leading-tight mt-0.5 line-clamp-1">
//                     {form.seo.ogTitle || form.title || "Article title"}
//                   </p>
//                   <p className="text-[#65676b] text-xs mt-0.5 line-clamp-2">
//                     {form.seo.ogDescription ||
//                       form.excerpt ||
//                       "Article description"}
//                   </p>
//                 </div>
//               </div>

//               <div>
//                 <label className="label-sm">OG Title</label>
//                 <input
//                   value={form.seo.ogTitle}
//                   onChange={(e) => updateSeo("ogTitle", e.target.value)}
//                   placeholder="Social share title (defaults to blog title)"
//                   className={inputCls}
//                 />
//               </div>
//               <div>
//                 <MetaBar
//                   label="OG Description"
//                   value={form.seo.ogDescription}
//                   min={60}
//                   max={200}
//                 />
//                 <textarea
//                   value={form.seo.ogDescription}
//                   onChange={(e) => updateSeo("ogDescription", e.target.value)}
//                   placeholder="Social share description…"
//                   rows={2}
//                   className={`${inputCls} resize-none mt-2`}
//                 />
//               </div>
//               <div>
//                 <label className="label-sm">
//                   OG Image URL{" "}
//                   <span className="text-gray-700">(or upload)</span>
//                 </label>
//                 <div className="flex gap-2">
//                   <input
//                     value={form.seo.ogImage}
//                     onChange={(e) => updateSeo("ogImage", e.target.value)}
//                     placeholder="https://… or use cover image"
//                     className={`${inputCls} flex-1 font-mono text-xs`}
//                   />
//                   <button
//                     onClick={() => ogImageRef.current?.click()}
//                     className="px-3 py-2.5 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all text-sm whitespace-nowrap"
//                   >
//                     Upload
//                   </button>
//                   {form.coverImage && !form.seo.ogImage && (
//                     <button
//                       onClick={() => updateSeo("ogImage", form.coverImage)}
//                       className="px-3 py-2.5 rounded-xl border border-white/10 text-gray-400 hover:text-[#f26522] hover:border-[#f26522]/30 transition-all text-xs whitespace-nowrap"
//                     >
//                       Use cover
//                     </button>
//                   )}
//                 </div>
//                 <input
//                   ref={ogImageRef}
//                   type="file"
//                   accept="image/*"
//                   className="hidden"
//                   onChange={async (e) => {
//                     const file = e.target.files?.[0];
//                     if (!file) return;
//                     const fd = new FormData();
//                     fd.append("file", file);
//                     const res = await fetch("/api/upload", {
//                       method: "POST",
//                       body: fd,
//                     });
//                     const d = await res.json();
//                     if (d.url) updateSeo("ogImage", d.url);
//                   }}
//                 />
//               </div>
//             </div>

//             {/* Structured Data */}
//             <div className="rounded-2xl p-5 bg-white/[0.03] border border-white/[0.07] space-y-4">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h3 className="text-sm font-semibold text-gray-300">
//                     Structured Data (JSON-LD)
//                   </h3>
//                   <p className="text-xs text-gray-600 mt-0.5">
//                     Schema.org markup for rich search results. FAQ items are
//                     auto-included.
//                   </p>
//                 </div>
//                 <button
//                   onClick={generateStructuredData}
//                   className="px-3 py-2 rounded-xl border border-white/10 text-gray-400 hover:text-[#f26522] hover:border-[#f26522]/30 transition-all text-xs flex items-center gap-1.5"
//                 >
//                   <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
//                     <path
//                       d="M10 2L6 6m0 0L2 2m4 4v8"
//                       stroke="currentColor"
//                       strokeWidth="1.2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                   Auto-generate
//                 </button>
//               </div>
//               <textarea
//                 value={form.seo.structuredData || ""}
//                 onChange={(e) => updateSeo("structuredData", e.target.value)}
//                 placeholder={
//                   '{\n  "@context": "https://schema.org",\n  "@type": "BlogPosting"\n}'
//                 }
//                 rows={10}
//                 className={`${inputCls} font-mono text-xs resize-none`}
//               />
//             </div>
//           </div>
//         )}

//         {/* ════════════════════════════════════════════════
//             FAQ TAB
//         ════════════════════════════════════════════════ */}
//         {activeTab === "faq" && (
//           <div className="space-y-5">
//             {/* Info banner */}
//             <div className="rounded-xl px-4 py-3 bg-[#f26522]/5 border border-[#f26522]/15 flex items-start gap-3 text-sm">
//               <svg
//                 width="16"
//                 height="16"
//                 viewBox="0 0 16 16"
//                 fill="none"
//                 className="text-[#f26522] mt-0.5 shrink-0"
//               >
//                 <circle
//                   cx="8"
//                   cy="8"
//                   r="7"
//                   stroke="currentColor"
//                   strokeWidth="1.2"
//                 />
//                 <path
//                   d="M8 5v3.5M8 10.5v.5"
//                   stroke="currentColor"
//                   strokeWidth="1.4"
//                   strokeLinecap="round"
//                 />
//               </svg>
//               <div>
//                 <p className="text-gray-300 font-medium">
//                   FAQs boost SEO with FAQ rich snippets
//                 </p>
//                 <p className="text-gray-600 text-xs mt-0.5">
//                   Q&amp;As added here are automatically included in the JSON-LD
//                   structured data and linked to this blog post.
//                 </p>
//               </div>
//             </div>

//             {/* FAQ group metadata */}
//             <div className="rounded-2xl p-5 bg-white/[0.03] border border-white/[0.07] space-y-4">
//               <h3 className="text-sm font-semibold text-gray-300">
//                 FAQ Group Details
//               </h3>
//               <div>
//                 <label className="label-sm">Group Title</label>
//                 <input
//                   value={faq.title}
//                   onChange={(e) =>
//                     setFaq((p) => ({ ...p, title: e.target.value }))
//                   }
//                   placeholder={`${
//                     form.title || "Blog"
//                   } — Frequently Asked Questions`}
//                   className={inputCls}
//                 />
//               </div>
//               <div>
//                 <label className="label-sm">
//                   Group Description{" "}
//                   <span className="text-gray-700">(optional)</span>
//                 </label>
//                 <input
//                   value={faq.description}
//                   onChange={(e) =>
//                     setFaq((p) => ({ ...p, description: e.target.value }))
//                   }
//                   placeholder="Short context about this FAQ section…"
//                   className={inputCls}
//                 />
//               </div>
//             </div>

//             {/* FAQ items */}
//             <div className="rounded-2xl p-5 bg-white/[0.03] border border-white/[0.07] space-y-4">
//               <div className="flex items-center justify-between">
//                 <h3 className="text-sm font-semibold text-gray-300">
//                   Questions &amp; Answers
//                   <span className="ml-2 px-2 py-0.5 rounded-full bg-white/[0.06] text-gray-500 text-xs font-normal">
//                     {faq.items.length}
//                   </span>
//                 </h3>
//                 <button
//                   onClick={addFAQItem}
//                   className="px-3 py-2 rounded-xl bg-[#f26522]/10 border border-[#f26522]/20 text-[#f26522] text-xs font-medium hover:bg-[#f26522]/20 transition-all flex items-center gap-1.5"
//                 >
//                   <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
//                     <path
//                       d="M6 1v10M1 6h10"
//                       stroke="currentColor"
//                       strokeWidth="1.8"
//                       strokeLinecap="round"
//                     />
//                   </svg>
//                   Add Question
//                 </button>
//               </div>

//               {faq.items.length === 0 ? (
//                 <div className="rounded-xl border border-dashed border-white/10 p-10 text-center">
//                   <svg
//                     width="32"
//                     height="32"
//                     viewBox="0 0 32 32"
//                     fill="none"
//                     className="mx-auto mb-3 text-gray-700"
//                   >
//                     <circle
//                       cx="16"
//                       cy="16"
//                       r="14"
//                       stroke="currentColor"
//                       strokeWidth="1.5"
//                     />
//                     <path
//                       d="M12 13c0-2.2 1.8-4 4-4s4 1.8 4 4c0 1.8-1.2 3.4-3 3.8V19"
//                       stroke="currentColor"
//                       strokeWidth="1.5"
//                       strokeLinecap="round"
//                     />
//                     <circle cx="16" cy="22" r="1" fill="currentColor" />
//                   </svg>
//                   <p className="text-gray-500 text-sm font-medium">
//                     No questions yet
//                   </p>
//                   <p className="text-gray-700 text-xs mt-1">
//                     Add questions that readers commonly ask about this topic
//                   </p>
//                   <button
//                     onClick={addFAQItem}
//                     className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-xl bg-[#f26522]/10 border border-[#f26522]/20 text-[#f26522] text-xs font-medium hover:bg-[#f26522]/20 transition-all"
//                   >
//                     <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
//                       <path
//                         d="M5 1v8M1 5h8"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                       />
//                     </svg>
//                     Add First Question
//                   </button>
//                 </div>
//               ) : (
//                 <div className="space-y-3">
//                   {faq.items.map((item, i) => (
//                     <FAQItem
//                       key={item.id}
//                       item={item}
//                       index={i}
//                       onUpdate={updateFAQItem}
//                       onDelete={deleteFAQItem}
//                       onMoveUp={(idx) => moveFAQItem(idx, "up")}
//                       onMoveDown={(idx) => moveFAQItem(idx, "down")}
//                       isFirst={i === 0}
//                       isLast={i === faq.items.length - 1}
//                     />
//                   ))}
//                   <button
//                     onClick={addFAQItem}
//                     className="w-full py-3 rounded-xl border border-dashed border-white/10 text-gray-600 hover:text-[#f26522] hover:border-[#f26522]/30 transition-all text-sm flex items-center justify-center gap-2"
//                   >
//                     <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//                       <path
//                         d="M7 1v12M1 7h12"
//                         stroke="currentColor"
//                         strokeWidth="1.5"
//                         strokeLinecap="round"
//                       />
//                     </svg>
//                     Add Another Question
//                   </button>
//                 </div>
//               )}
//             </div>

//             {/* Reminder about structured data */}
//             {faq.items.length > 0 && (
//               <div className="rounded-xl px-4 py-3 bg-emerald-500/5 border border-emerald-500/15 flex items-center gap-3 text-sm">
//                 <svg
//                   width="16"
//                   height="16"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   className="text-emerald-400 shrink-0"
//                 >
//                   <circle
//                     cx="8"
//                     cy="8"
//                     r="7"
//                     stroke="currentColor"
//                     strokeWidth="1.2"
//                   />
//                   <path
//                     d="M5 8l2 2 4-4"
//                     stroke="currentColor"
//                     strokeWidth="1.4"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//                 <span className="text-gray-400">
//                   {faq.items.filter((i) => i.question && i.answer).length} valid
//                   Q&amp;As will be saved.{" "}
//                   <button
//                     onClick={() => setActiveTab("seo")}
//                     className="text-emerald-400 hover:underline"
//                   >
//                     Auto-generate structured data →
//                   </button>
//                 </span>
//               </div>
//             )}
//           </div>
//         )}

//         {/* ════════════════════════════════════════════════
//             SETTINGS TAB
//         ════════════════════════════════════════════════ */}
//         {activeTab === "settings" && (
//           <div className="space-y-5">
//             <div className="rounded-2xl p-5 bg-white/[0.03] border border-white/[0.07] space-y-5">
//               <h3 className="text-sm font-semibold text-gray-300">
//                 Post Settings
//               </h3>

//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="label-sm">Author</label>
//                   <input
//                     value={form.author}
//                     onChange={(e) => update("author", e.target.value)}
//                     className={inputCls}
//                   />
//                 </div>
//                 <div>
//                   <label className="label-sm">Industry</label>
//                   <select
//                     value={form.industry}
//                     onChange={(e) => update("industry", e.target.value)}
//                     className={inputCls + " cursor-pointer"}
//                   >
//                     {INDUSTRIES.map((i) => (
//                       <option key={i} value={i}>
//                         {i}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               <div>
//                 <label className="label-sm">Publication Status</label>
//                 <div className="grid grid-cols-3 gap-2 mt-1">
//                   {(["draft", "published", "archived"] as BlogStatus[]).map(
//                     (s) => (
//                       <button
//                         key={s}
//                         onClick={() => update("status", s)}
//                         className={`py-2.5 rounded-xl text-sm font-medium border transition-all capitalize ${
//                           form.status === s
//                             ? s === "published"
//                               ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-400"
//                               : s === "draft"
//                               ? "bg-amber-500/15 border-amber-500/30 text-amber-400"
//                               : "bg-white/10 border-white/20 text-gray-300"
//                             : "border-white/[0.08] text-gray-600 hover:text-gray-400 hover:border-white/15"
//                         }`}
//                       >
//                         {s}
//                       </button>
//                     ),
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <label className="label-sm">Tags</label>
//                 <div className="flex gap-2 mb-2">
//                   <input
//                     value={tagInput}
//                     onChange={(e) => setTagInput(e.target.value)}
//                     onKeyDown={(e) => {
//                       if (e.key === "Enter") {
//                         e.preventDefault();
//                         addTag();
//                       }
//                     }}
//                     placeholder="Type a tag and press Enter…"
//                     className={`${inputCls} flex-1`}
//                   />
//                   <button
//                     onClick={addTag}
//                     className="px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.09] text-gray-400 hover:bg-[#f26522]/10 hover:text-[#f26522] hover:border-[#f26522]/30 transition-all text-sm"
//                   >
//                     Add
//                   </button>
//                 </div>
//                 <div className="flex flex-wrap gap-2">
//                   {form.tags.map((tag) => (
//                     <span
//                       key={tag}
//                       className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-[#f26522]/10 text-[#f26522] border border-[#f26522]/20"
//                     >
//                       #{tag}
//                       <button
//                         onClick={() =>
//                           update(
//                             "tags",
//                             form.tags.filter((t) => t !== tag),
//                           )
//                         }
//                         className="hover:text-white transition-colors ml-0.5"
//                       >
//                         <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
//                           <path
//                             d="M1 1l6 6M7 1L1 7"
//                             stroke="currentColor"
//                             strokeWidth="1.4"
//                             strokeLinecap="round"
//                           />
//                         </svg>
//                       </button>
//                     </span>
//                   ))}
//                   {form.tags.length === 0 && (
//                     <span className="text-xs text-gray-700">No tags yet</span>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Read time override */}
//             <div className="rounded-2xl p-5 bg-white/[0.03] border border-white/[0.07] space-y-4">
//               <h3 className="text-sm font-semibold text-gray-300">Read Time</h3>
//               <div className="flex items-center gap-4">
//                 <div className="flex-1">
//                   <input
//                     type="number"
//                     min={1}
//                     max={60}
//                     value={readTime}
//                     onChange={(e) => setReadTime(Number(e.target.value))}
//                     className={`${inputCls} w-24`}
//                   />
//                 </div>
//                 <p className="text-xs text-gray-600">
//                   Auto-calculated:{" "}
//                   {Math.max(
//                     1,
//                     Math.ceil(
//                       form.content
//                         .replace(/<[^>]+>/g, "")
//                         .trim()
//                         .split(/\s+/).length / 200,
//                     ),
//                   )}{" "}
//                   min from content
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* ── Bottom save bar ── */}
//         <div className="rounded-2xl p-4 flex items-center justify-between bg-white/[0.03] border border-white/[0.07] sticky bottom-6">
//           <div className="flex items-center gap-4">
//             <p className="text-gray-600 text-xs">Changes are not auto-saved</p>
//             <SeoScoreRing score={score} />
//           </div>
//           <div className="flex gap-2">
//             <button
//               onClick={() => handleSubmit("draft")}
//               disabled={saving}
//               className="px-4 py-2.5 rounded-xl text-sm border border-white/10 text-gray-400 hover:border-white/20 hover:text-white transition-all disabled:opacity-40"
//             >
//               Save Draft
//             </button>
//             <button
//               onClick={() => handleSubmit()}
//               disabled={saving}
//               className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-[#f26522] text-white hover:bg-[#f26522]/80 transition-all shadow-lg shadow-[#f26522]/20 disabled:opacity-50 flex items-center gap-2"
//             >
//               {saving && (
//                 <span className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
//               )}
//               {mode === "new" ? "Create Post" : "Update Post"}
//             </button>
//           </div>
//         </div>
//       </div>

//       <style jsx global>{`
//         .label-sm {
//           display: block;
//           font-size: 0.72rem;
//           font-weight: 600;
//           color: #6b7280;
//           margin-bottom: 0.375rem;
//           letter-spacing: 0.04em;
//           text-transform: uppercase;
//         }
//       `}</style>
//     </div>
//   );
// }

"use client";

import { useCallback, useEffect, useRef, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import {
  Blog,
  BlogFormData,
  BlogStatus,
  FAQ,
  SEOFields as SEOFieldsType,
} from "@/app/types/blog";
import StatusBadge from "./Statusbadge";

// ─── Dynamic editor import ────────────────────────────────────────────────────
const BlogEditor = dynamic(
  () => import("@/app/component/admin/blog/BlogEditor"),
  {
    ssr: false,
    loading: () => (
      <div className="h-96 rounded-xl border border-white/10 flex items-center justify-center bg-white/[0.02]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-6 h-6 border-2 border-[#f26522] border-t-transparent rounded-full animate-spin" />
          <span className="text-xs text-gray-600">Loading editor…</span>
        </div>
      </div>
    ),
  },
);

// ─── Constants ────────────────────────────────────────────────────────────────
const INDUSTRIES = [
  "Technology",
  "Sales",
  "Marketing",
  "Finance",
  "Healthcare",
  "Manufacturing",
  "SaaS",
  "E-commerce",
  "Education",
  "Real Estate",
  "Legal",
  "Consulting",
  "Retail",
  "Logistics",
  "Other",
];

const emptySEO: SEOFieldsType = {
  metaTitle: "",
  metaDescription: "",
  metaKeywords: "",
  ogTitle: "",
  ogDescription: "",
  ogImage: "",
  canonicalUrl: "",
  structuredData: "",
};

const emptyForm: BlogFormData = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  coverImage: "",
  coverImageAlt: "",
  author: "Marketrixa Team",
  industry: "Technology",
  tags: [],
  status: "draft",
  seo: emptySEO,
};

interface InlineFAQ {
  title: string;
  description: string;
  items: Array<{ id: string; question: string; answer: string }>;
}

interface BlogFormProps {
  initialData?: Blog;
  initialFAQGroup?: { title: string; description?: string; faqs: FAQ[] } | null;
  mode: "new" | "edit";
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function wordCount(html: string) {
  return html
    .replace(/<[^>]+>/g, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

function calcReadTime(html: string) {
  return Math.max(1, Math.ceil(wordCount(html) / 200));
}

// ─── SEO scoring with detailed suggestions ────────────────────────────────────
interface SEOCheck {
  key: string;
  label: string;
  ok: boolean;
  points: number;
  tip: string;
  priority: "high" | "medium" | "low";
}

function buildSeoChecks(form: BlogFormData, faq: InlineFAQ): SEOCheck[] {
  const titleLen = form.seo.metaTitle.length;
  const descLen = form.seo.metaDescription.length;
  const words = wordCount(form.content);
  return [
    {
      key: "metaTitle",
      label: "Meta Title length (30–60 chars)",
      ok: titleLen >= 30 && titleLen <= 60,
      points: 15,
      priority: "high",
      tip: `Currently ${titleLen} chars. ${
        titleLen < 30
          ? "Add more descriptive text — aim for 30–60 characters."
          : titleLen > 60
          ? "Trim to 60 chars max or it'll be cut off in Google results."
          : "Perfect length!"
      }`,
    },
    {
      key: "metaDesc",
      label: "Meta Description (120–160 chars)",
      ok: descLen >= 120 && descLen <= 160,
      points: 15,
      priority: "high",
      tip: `Currently ${descLen} chars. ${
        descLen < 120
          ? "Expand — more detail improves click-through rates."
          : descLen > 160
          ? "Shorten to 160 chars or Google will truncate it."
          : "Perfect length!"
      }`,
    },
    {
      key: "keywords",
      label: "Focus Keywords set",
      ok: !!form.seo.metaKeywords,
      points: 10,
      priority: "high",
      tip: "Add 5–10 comma-separated keywords that describe this article. Include your primary keyword in the meta title and first paragraph.",
    },
    {
      key: "coverImage",
      label: "Cover image uploaded",
      ok: !!form.coverImage,
      points: 10,
      priority: "high",
      tip: "Articles with cover images get 94% more views. Upload a 1200×630 px image for best results.",
    },
    {
      key: "coverAlt",
      label: "Cover image has alt text",
      ok: !!form.coverImageAlt,
      points: 5,
      priority: "medium",
      tip: "Alt text helps screen readers and gives Google context about your image. Describe the image in plain language.",
    },
    {
      key: "canonicalUrl",
      label: "Canonical URL set",
      ok: !!form.seo.canonicalUrl,
      points: 10,
      priority: "medium",
      tip: "A canonical URL prevents duplicate-content penalties. It's usually auto-filled from your slug.",
    },
    {
      key: "ogTags",
      label: "Open Graph title & description",
      ok: !!(form.seo.ogTitle && form.seo.ogDescription),
      points: 10,
      priority: "medium",
      tip: "OG tags control how this article looks when shared on LinkedIn, Twitter and Facebook. Add both title and description.",
    },
    {
      key: "faqSchema",
      label: "FAQ structured data",
      ok: faq.items.filter((i) => i.question && i.answer).length > 0,
      points: 10,
      priority: "medium",
      tip: "FAQ schema can generate rich snippets in search results, increasing visibility. Add at least 3 Q&As.",
    },
    {
      key: "structuredData",
      label: "JSON-LD structured data",
      ok: !!form.seo.structuredData,
      points: 10,
      priority: "low",
      tip: "Use the Auto-generate button in the SEO tab to create BlogPosting schema. Helps Google understand your content type.",
    },
    {
      key: "wordCount",
      label: "Content length (≥ 800 words)",
      ok: words >= 800,
      points: 5,
      priority: "medium",
      tip: `Currently ${words} words. ${
        words < 800
          ? `Add ${
              800 - words
            } more words — longer content ranks better for competitive keywords.`
          : "Great depth!"
      }`,
    },
    {
      key: "excerpt",
      label: "Excerpt / summary filled",
      ok: form.excerpt.length >= 80,
      points: 5,
      priority: "low",
      tip: `Currently ${form.excerpt.length} chars. Write a compelling 150–200 char summary — it appears in search listings and social cards.`,
    },
    {
      key: "ogImage",
      label: "OG image set",
      ok: !!(form.seo.ogImage || form.coverImage),
      points: 5,
      priority: "low",
      tip: "Set a custom 1200×630 OG image or reuse your cover image. This controls the thumbnail shown when sharing.",
    },
  ];
}

// ─── Score ring ───────────────────────────────────────────────────────────────
function SeoScoreRing({ score, size = 56 }: { score: number; size?: number }) {
  const color = score >= 80 ? "#10b981" : score >= 50 ? "#f59e0b" : "#ef4444";
  const label =
    score >= 80
      ? "Excellent"
      : score >= 60
      ? "Good"
      : score >= 40
      ? "Fair"
      : "Needs work";
  const r = size / 2 - 5;
  const circ = 2 * Math.PI * r;
  const dash = (score / 100) * circ;
  return (
    <div className="flex items-center gap-3">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="4"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeDasharray={`${dash} ${circ}`}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{ transition: "stroke-dasharray 0.6s ease" }}
        />
        <text
          x={size / 2}
          y={size / 2 + 5}
          textAnchor="middle"
          fill="white"
          fontSize={size === 56 ? "12" : "10"}
          fontWeight="700"
        >
          {score}
        </text>
      </svg>
      <div>
        <p className="text-white text-sm font-semibold leading-tight">
          SEO Score
        </p>
        <p className="text-xs font-medium" style={{ color }}>
          {label}
        </p>
      </div>
    </div>
  );
}

// ─── Meta length bar ──────────────────────────────────────────────────────────
function MetaBar({
  label,
  value,
  min,
  max,
  warn = false,
}: {
  label: string;
  value: string;
  min: number;
  max: number;
  warn?: boolean;
}) {
  const len = value.length;
  const pct = Math.min(100, (len / max) * 100);
  const ok = len >= min && len <= max;
  const over = len > max;
  const col = over ? "#ef4444" : ok ? "#10b981" : "#f59e0b";
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <label className="lbl">{label}</label>
        <span
          className="text-xs tabular-nums"
          style={{ color: over ? "#f87171" : ok ? "#34d399" : "#6b7280" }}
        >
          {len}/{max}
        </span>
      </div>
      <div className="h-1 rounded-full bg-white/[0.06] overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{ width: `${pct}%`, backgroundColor: col }}
        />
      </div>
      {warn && over && (
        <p className="text-[11px] text-red-400 flex items-center gap-1">
          <span>⚠</span> Exceeds recommended — may be truncated in search
          results
        </p>
      )}
    </div>
  );
}

// ─── Readability stats ────────────────────────────────────────────────────────
function ReadabilityStats({
  content,
  readTime,
}: {
  content: string;
  readTime: number;
}) {
  const words = wordCount(content);
  const chars = content.replace(/<[^>]+>/g, "").length;
  return (
    <div className="flex items-center gap-3 text-xs text-gray-600 flex-wrap">
      <span className="flex items-center gap-1">
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
          <rect
            x="1"
            y="2"
            width="9"
            height="1.2"
            rx="0.6"
            fill="currentColor"
          />
          <rect
            x="1"
            y="4.5"
            width="7"
            height="1.2"
            rx="0.6"
            fill="currentColor"
          />
          <rect
            x="1"
            y="7"
            width="9"
            height="1.2"
            rx="0.6"
            fill="currentColor"
          />
        </svg>
        {words.toLocaleString()} words
      </span>
      <span className="text-white/10">·</span>
      <span className="flex items-center gap-1">
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
          <circle
            cx="5.5"
            cy="5.5"
            r="4"
            stroke="currentColor"
            strokeWidth="1.1"
          />
          <path
            d="M5.5 3.5v2.2l1.5 1"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
        </svg>
        {readTime} min read
      </span>
      <span className="text-white/10">·</span>
      <span>{chars.toLocaleString()} chars</span>
      {words >= 800 && (
        <span className="text-emerald-500 flex items-center gap-0.5">
          <span>✓</span>Good length
        </span>
      )}
      {words > 0 && words < 300 && (
        <span className="text-amber-500">Too short</span>
      )}
    </div>
  );
}

// ─── FAQ item ─────────────────────────────────────────────────────────────────
function FAQItem({
  item,
  index,
  onUpdate,
  onDelete,
  onMoveUp,
  onMoveDown,
  isFirst,
  isLast,
}: {
  item: { id: string; question: string; answer: string };
  index: number;
  onUpdate: (id: string, field: "question" | "answer", val: string) => void;
  onDelete: (id: string) => void;
  onMoveUp: (i: number) => void;
  onMoveDown: (i: number) => void;
  isFirst: boolean;
  isLast: boolean;
}) {
  const [open, setOpen] = useState(true);
  return (
    <div
      className="rounded-xl overflow-hidden border transition-all duration-200"
      style={{
        background: "rgba(255,255,255,0.025)",
        borderColor: open ? "rgba(242,101,34,0.18)" : "rgba(255,255,255,0.07)",
      }}
    >
      <div
        className="flex items-center gap-3 px-4 py-3 cursor-pointer select-none"
        onClick={() => setOpen((o) => !o)}
      >
        <span
          className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
          style={{
            background: "rgba(242,101,34,0.15)",
            color: "rgba(242,101,34,0.8)",
          }}
        >
          {index + 1}
        </span>
        <span className="flex-1 text-sm text-gray-300 truncate">
          {item.question || (
            <span className="text-gray-600 italic">No question yet</span>
          )}
        </span>
        <div
          className="flex items-center gap-1"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => onMoveUp(index)}
            disabled={isFirst}
            className="p-1.5 text-gray-600 hover:text-gray-300 disabled:opacity-20 rounded-lg hover:bg-white/5 transition-colors"
            title="Move up"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d="M2 7l3-3 3 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={() => onMoveDown(index)}
            disabled={isLast}
            className="p-1.5 text-gray-600 hover:text-gray-300 disabled:opacity-20 rounded-lg hover:bg-white/5 transition-colors"
            title="Move down"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d="M2 3l3 3 3-3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={() => onDelete(item.id)}
            className="p-1.5 text-gray-600 hover:text-red-400 rounded-lg hover:bg-red-500/10 transition-colors"
            title="Delete"
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
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            className={`text-gray-600 transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          >
            <path
              d="M2 3l3 3 3-3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div
        style={{
          maxHeight: open ? "600px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div className="px-4 pb-4 space-y-3 border-t border-white/[0.06]">
          <div className="pt-3">
            <label className="lbl">Question</label>
            <input
              value={item.question}
              onChange={(e) => onUpdate(item.id, "question", e.target.value)}
              placeholder="What question do readers commonly ask?"
              className="inp"
            />
          </div>
          <div>
            <label className="lbl">Answer</label>
            <textarea
              value={item.answer}
              onChange={(e) => onUpdate(item.id, "answer", e.target.value)}
              placeholder="Provide a clear, helpful answer…"
              rows={3}
              className="inp resize-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── SEO Suggestions Panel ────────────────────────────────────────────────────
function SEOSuggestions({
  checks,
  onTabSwitch,
}: {
  checks: SEOCheck[];
  onTabSwitch: (tab: "seo" | "faq") => void;
}) {
  const failing = checks.filter((c) => !c.ok);
  const [expanded, setExpanded] = useState<string | null>(null);
  if (!failing.length)
    return (
      <div
        className="rounded-xl px-4 py-4 flex items-center gap-3"
        style={{
          background: "rgba(16,185,129,0.07)",
          border: "1px solid rgba(16,185,129,0.2)",
        }}
      >
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: "rgba(16,185,129,0.15)" }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M2 7l3.5 3.5L12 3"
              stroke="#10b981"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <p className="text-emerald-400 text-sm font-semibold">
            All SEO checks passing!
          </p>
          <p className="text-emerald-700 text-xs">
            This article is well-optimized for search engines.
          </p>
        </div>
      </div>
    );
  const high = failing.filter((c) => c.priority === "high");
  const medium = failing.filter((c) => c.priority === "medium");
  const low = failing.filter((c) => c.priority === "low");

  const Group = ({
    items,
    label,
    color,
  }: {
    items: SEOCheck[];
    label: string;
    color: string;
  }) => {
    if (!items.length) return null;
    return (
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: color }}
          />
          <span
            className="text-[10px] font-bold uppercase tracking-widest"
            style={{ color }}
          >
            {label} Priority
          </span>
        </div>
        {items.map((c) => (
          <div
            key={c.key}
            className="rounded-xl overflow-hidden border transition-all duration-200"
            style={{
              borderColor:
                expanded === c.key
                  ? "rgba(242,101,34,0.25)"
                  : "rgba(255,255,255,0.06)",
              background:
                expanded === c.key
                  ? "rgba(242,101,34,0.04)"
                  : "rgba(255,255,255,0.02)",
            }}
          >
            <button
              type="button"
              onClick={() => setExpanded(expanded === c.key ? null : c.key)}
              className="w-full flex items-start gap-3 px-4 py-3 text-left"
            >
              <div
                className="w-4 h-4 rounded-full border flex-shrink-0 mt-0.5"
                style={{ borderColor: color }}
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-300 font-medium leading-snug">
                  {c.label}
                </p>
                {expanded === c.key && (
                  <div className="mt-2 space-y-2">
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {c.tip}
                    </p>
                    {(c.key === "metaTitle" ||
                      c.key === "metaDesc" ||
                      c.key === "keywords" ||
                      c.key === "canonicalUrl" ||
                      c.key === "ogTags" ||
                      c.key === "structuredData") && (
                      <button
                        type="button"
                        onClick={() => onTabSwitch("seo")}
                        className="text-xs font-semibold flex items-center gap-1 transition-colors hover:opacity-80"
                        style={{ color: "var(--brand-orange)" }}
                      >
                        Fix in SEO tab →
                      </button>
                    )}
                    {c.key === "faqSchema" && (
                      <button
                        type="button"
                        onClick={() => onTabSwitch("faq")}
                        className="text-xs font-semibold flex items-center gap-1 transition-colors hover:opacity-80"
                        style={{ color: "var(--brand-orange)" }}
                      >
                        Add FAQs →
                      </button>
                    )}
                  </div>
                )}
              </div>
              <span
                className="text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0"
                style={{
                  background: "rgba(242,101,34,0.12)",
                  color: "rgba(242,101,34,0.7)",
                }}
              >
                +{c.points}pts
              </span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                className={`text-gray-600 transition-transform flex-shrink-0 mt-1 ${
                  expanded === c.key ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M2 3l3 3 3-3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      className="rounded-2xl p-5 space-y-4"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-300 flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 1l1.5 4H13l-3.5 2.5 1.5 4L7 9 3 11.5l1.5-4L1 5h4.5z"
              stroke="#f59e0b"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
          </svg>
          SEO Improvement Suggestions
        </h3>
        <span
          className="text-xs font-medium px-2.5 py-1 rounded-full"
          style={{
            background: "rgba(242,101,34,0.12)",
            color: "rgba(242,101,34,0.8)",
          }}
        >
          {failing.length} to fix
        </span>
      </div>
      <Group items={high} label="High" color="#ef4444" />
      <Group items={medium} label="Medium" color="#f59e0b" />
      <Group items={low} label="Low" color="#6b7280" />
    </div>
  );
}

// ─── Tag input ────────────────────────────────────────────────────────────────
function TagInput({
  tags,
  onChange,
}: {
  tags: string[];
  onChange: (t: string[]) => void;
}) {
  const [input, setInput] = useState("");
  const add = () => {
    const t = input.trim().toLowerCase().replace(/\s+/g, "-");
    if (t && !tags.includes(t)) onChange([...tags, t]);
    setInput("");
  };
  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              add();
            }
            if (e.key === "," && input) {
              e.preventDefault();
              add();
            }
          }}
          placeholder="Type a tag and press Enter or comma…"
          className="inp flex-1"
        />
        <button
          type="button"
          onClick={add}
          className="px-4 py-2.5 rounded-xl border text-sm transition-all"
          style={{
            borderColor: "rgba(255,255,255,0.09)",
            color: "#9ca3af",
            background: "rgba(255,255,255,0.04)",
          }}
        >
          Add
        </button>
      </div>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs"
              style={{
                background: "rgba(242,101,34,0.1)",
                color: "rgba(242,101,34,0.85)",
                border: "1px solid rgba(242,101,34,0.2)",
              }}
            >
              #{tag}
              <button
                type="button"
                onClick={() => onChange(tags.filter((t) => t !== tag))}
                className="hover:text-white transition-colors"
              >
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path
                    d="M1 1l6 6M7 1L1 7"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Section header ───────────────────────────────────────────────────────────
function SectionHeader({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex items-start gap-3 mb-5">
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{
          background: "rgba(242,101,34,0.12)",
          border: "1px solid rgba(242,101,34,0.18)",
        }}
      >
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-semibold text-gray-200">{title}</h3>
        {subtitle && <p className="text-xs text-gray-600 mt-0.5">{subtitle}</p>}
      </div>
    </div>
  );
}

// ─── Card wrapper ─────────────────────────────────────────────────────────────
function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl p-5 ${className}`}
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {children}
    </div>
  );
}

// ─── Tab button ───────────────────────────────────────────────────────────────
type Tab = "content" | "seo" | "faq" | "settings";
function TabBtn({
  id,
  active,
  label,
  icon,
  badge,
  onClick,
}: {
  id: Tab;
  active: boolean;
  label: string;
  icon: string;
  badge?: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3.5 py-2.5 text-sm font-medium rounded-xl transition-all flex items-center gap-2 whitespace-nowrap ${
        active
          ? "text-white shadow-lg"
          : "text-gray-500 hover:text-gray-300 cursor-pointer"
      }`}
      style={
        active
          ? {
              background: "var(--brand-orange)",
              boxShadow: "0 4px 14px rgba(242,101,34,0.3)",
            }
          : {}
      }
    >
      <span className="text-base leading-none">{icon}</span>
      <span>{label}</span>
      {badge !== undefined && badge > 0 && (
        <span
          className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none ${
            active ? "bg-white/20 text-white" : "bg-white/10 text-gray-400"
          }`}
        >
          {badge}
        </span>
      )}
    </button>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function BlogForm({
  initialData,
  initialFAQGroup,
  mode,
}: BlogFormProps) {
  const router = useRouter();

  const [form, setForm] = useState<BlogFormData>(
    initialData
      ? {
          title: initialData.title,
          slug: initialData.slug,
          excerpt: initialData.excerpt,
          content: initialData.content,
          coverImage: initialData.coverImage,
          coverImageAlt: initialData.coverImageAlt,
          author: initialData.author,
          industry: initialData.industry,
          tags: initialData.tags,
          status: initialData.status,
          seo: initialData.seo,
          faqGroupId: initialData.faqGroupId,
        }
      : emptyForm,
  );

  const [faq, setFaq] = useState<InlineFAQ>(() => {
    if (initialFAQGroup) {
      return {
        title: initialFAQGroup.title,
        description: initialFAQGroup.description ?? "",
        items: initialFAQGroup.faqs.map((f) => ({
          id: f.id,
          question: f.question,
          answer: f.answer,
        })),
      };
    }
    return { title: "", description: "", items: [] };
  });

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [autoSlug, setAutoSlug] = useState(mode === "new");
  const [activeTab, setActiveTab] = useState<Tab>("content");
  const [readTime, setReadTime] = useState(initialData?.readTime ?? 0);
  const [previewMode, setPreviewMode] = useState(false);
  const coverInputRef = useRef<HTMLInputElement>(null);
  const ogImageRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState<"cover" | "og" | null>(null);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  const seoChecks = useMemo(() => buildSeoChecks(form, faq), [form, faq]);
  const score = useMemo(
    () => seoChecks.reduce((a, c) => a + (c.ok ? c.points : 0), 0),
    [seoChecks],
  );

  // Auto slug
  useEffect(() => {
    if (autoSlug && form.title)
      setForm((p) => ({ ...p, slug: slugify(p.title) }));
  }, [form.title, autoSlug]);

  // Auto fill SEO title once
  const seoTitleFilled = useRef(!!initialData?.seo?.metaTitle);
  useEffect(() => {
    if (!seoTitleFilled.current && form.title) {
      setForm((p) => ({
        ...p,
        seo: {
          ...p.seo,
          metaTitle: `${p.title} | Marketrixa`,
          ogTitle: p.title,
        },
      }));
      seoTitleFilled.current = true;
    }
  }, [form.title]);

  // Auto read time
  useEffect(() => {
    setReadTime(calcReadTime(form.content));
  }, [form.content]);

  // Auto canonical
  const canonFilled = useRef(!!initialData?.seo?.canonicalUrl);
  useEffect(() => {
    if (!canonFilled.current && form.slug) {
      setForm((p) => ({
        ...p,
        seo: {
          ...p.seo,
          canonicalUrl: `https://marketrixa.com/blogs/${form.slug}`,
        },
      }));
    }
  }, [form.slug]);

  const update = useCallback(
    <K extends keyof BlogFormData>(key: K, val: BlogFormData[K]) => {
      setForm((p) => ({ ...p, [key]: val }));
    },
    [],
  );

  const updateSeo = useCallback(
    <K extends keyof SEOFieldsType>(key: K, val: SEOFieldsType[K]) => {
      setForm((p) => ({ ...p, seo: { ...p.seo, [key]: val } }));
    },
    [],
  );

  // FAQ helpers
  const addFAQItem = () =>
    setFaq((p) => ({
      ...p,
      items: [
        ...p.items,
        { id: `faq_${Date.now()}`, question: "", answer: "" },
      ],
    }));
  const updateFAQItem = (
    id: string,
    field: "question" | "answer",
    val: string,
  ) =>
    setFaq((p) => ({
      ...p,
      items: p.items.map((i) => (i.id === id ? { ...i, [field]: val } : i)),
    }));
  const deleteFAQItem = (id: string) =>
    setFaq((p) => ({ ...p, items: p.items.filter((i) => i.id !== id) }));
  const moveFAQItem = (index: number, dir: "up" | "down") => {
    const arr = [...faq.items],
      swap = dir === "up" ? index - 1 : index + 1;
    [arr[index], arr[swap]] = [arr[swap], arr[index]];
    setFaq((p) => ({ ...p, items: arr }));
  };

  // Image upload
  const uploadImage = async (file: File, target: "cover" | "og") => {
    setUploading(target);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      const d = await res.json();
      if (d.url) {
        target === "cover"
          ? update("coverImage", d.url)
          : updateSeo("ogImage", d.url);
      }
    } finally {
      setUploading(null);
    }
  };

  // Structured data generator
  const generateStructuredData = () => {
    const sd: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: form.title,
      description: form.excerpt,
      author: { "@type": "Organization", name: form.author },
      publisher: { "@type": "Organization", name: "Marketrixa" },
      url: form.seo.canonicalUrl,
      image: form.coverImage || undefined,
      datePublished: new Date().toISOString(),
    };
    const valid = faq.items.filter((i) => i.question && i.answer);
    if (valid.length > 0) {
      (sd as any).mainEntity = {
        "@type": "FAQPage",
        mainEntity: valid.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      };
    }
    updateSeo("structuredData", JSON.stringify(sd, null, 2));
  };

  // Submit
  const handleSubmit = async (overrideStatus?: BlogStatus) => {
    setError("");
    setSuccessMsg("");
    if (!form.title.trim()) {
      setError("Title is required");
      return;
    }
    if (!form.slug.trim()) {
      setError("Slug is required");
      return;
    }
    if (
      !form.content ||
      form.content === "<p></p>" ||
      form.content === "<p><br></p>"
    ) {
      setError("Content cannot be empty");
      return;
    }
    setSaving(true);
    try {
      const valid = faq.items.filter(
        (i) => i.question.trim() && i.answer.trim(),
      );
      const payload = {
        ...form,
        readTime,
        ...(overrideStatus ? { status: overrideStatus } : {}),
        ...(valid.length > 0
          ? {
              faqs: {
                title: faq.title || `${form.title} — FAQs`,
                description: faq.description || undefined,
                items: valid.map(({ question, answer }) => ({
                  question,
                  answer,
                })),
              },
            }
          : { faqs: { title: "", items: [] } }),
      };
      const url =
        mode === "new" ? "/api/blogs" : `/api/blogs/${initialData?.id}`;
      const method = mode === "new" ? "POST" : "PUT";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Something went wrong");
      setLastSaved(new Date());
      setSuccessMsg(
        overrideStatus === "draft"
          ? "Saved as draft"
          : "Published successfully!",
      );
      setTimeout(() => setSuccessMsg(""), 3000);
      if (
        overrideStatus === "published" ||
        (form.status === "published" && !overrideStatus)
      ) {
        router.push("/blog-management");
        router.refresh();
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Save failed");
    } finally {
      setSaving(false);
    }
  };

  const validFAQCount = faq.items.filter((i) => i.question && i.answer).length;

  // ─── Render ────────────────────────────────────────────────────────────────
  return (
    <div
      className="min-h-screen"
      style={{ background: "transparent", color: "white" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-5">
        {/* ── Top bar ── */}
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3 min-w-0">
            <button
              type="button"
              onClick={() => router.back()}
              className="p-2 rounded-xl border text-gray-500 hover:text-white transition-all flex-shrink-0"
              style={{ borderColor: "rgba(255,255,255,0.1)" }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M10 4l-4 4 4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-lg font-bold text-white leading-tight">
                  {mode === "new" ? "New Blog Post" : "Edit Blog Post"}
                </h1>
                {initialData && <StatusBadge status={form.status} />}
                {lastSaved && (
                  <span className="text-[11px] text-emerald-500 flex items-center gap-1">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M1.5 5l2.5 2.5L8.5 2"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Saved{" "}
                    {lastSaved.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                )}
              </div>
              <ReadabilityStats content={form.content} readTime={readTime} />
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              type="button"
              onClick={() => setPreviewMode((p) => !p)}
              className={`px-3.5 py-2.5 rounded-xl text-sm border transition-all flex items-center gap-2 ${
                previewMode
                  ? "text-[#f26522] border-[#f26522]/30 bg-[#f26522]/5"
                  : "text-gray-400 border-white/10 hover:border-white/20 hover:text-white"
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M1 7c1.3-2.6 3.2-4 6-4s4.7 1.4 6 4c-1.3 2.6-3.2 4-6 4s-4.7-1.4-6-4z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <circle
                  cx="7"
                  cy="7"
                  r="1.8"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
              {previewMode ? "Edit" : "Preview"}
            </button>
            <button
              type="button"
              onClick={() => handleSubmit("draft")}
              disabled={saving}
              className="px-4 py-2.5 rounded-xl text-sm border text-gray-400 hover:text-white transition-all disabled:opacity-40"
              style={{ borderColor: "rgba(255,255,255,0.1)" }}
            >
              Save Draft
            </button>
            <button
              type="button"
              onClick={() => handleSubmit("published")}
              disabled={saving}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all disabled:opacity-50 flex items-center gap-2"
              style={{
                background: "var(--brand-orange)",
                boxShadow: "0 4px 18px rgba(242,101,34,0.3)",
              }}
            >
              {saving && (
                <span className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              )}
              {saving
                ? "Saving…"
                : form.status === "published"
                ? "Update Post"
                : "Publish Post"}
            </button>
          </div>
        </div>

        {/* ── Error / Success ── */}
        {error && (
          <div
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-red-400"
            style={{
              background: "rgba(239,68,68,0.08)",
              border: "1px solid rgba(239,68,68,0.2)",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="shrink-0"
            >
              <circle
                cx="8"
                cy="8"
                r="7"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <path
                d="M8 5v3.5M8 10.5v.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            {error}
            <button
              type="button"
              onClick={() => setError("")}
              className="ml-auto hover:text-red-300 transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 2l8 8M10 2L2 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        )}
        {successMsg && (
          <div
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-emerald-400"
            style={{
              background: "rgba(16,185,129,0.08)",
              border: "1px solid rgba(16,185,129,0.2)",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="shrink-0"
            >
              <circle
                cx="8"
                cy="8"
                r="7"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <path
                d="M5 8l2 2 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {successMsg}
          </div>
        )}

        {/* ── Tabs ── */}
        <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-none">
          <div
            className="flex gap-1 p-1 rounded-xl flex-shrink-0"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <TabBtn
              id="content"
              active={activeTab === "content"}
              label="Content"
              icon="✍"
              onClick={() => setActiveTab("content")}
            />
            <TabBtn
              id="seo"
              active={activeTab === "seo"}
              label="SEO"
              icon="🔍"
              badge={
                seoChecks.filter((c) => !c.ok && c.priority === "high")
                  .length || undefined
              }
              onClick={() => setActiveTab("seo")}
            />
            <TabBtn
              id="faq"
              active={activeTab === "faq"}
              label="FAQs"
              icon="❓"
              badge={validFAQCount || undefined}
              onClick={() => setActiveTab("faq")}
            />
            <TabBtn
              id="settings"
              active={activeTab === "settings"}
              label="Settings"
              icon="⚙"
              onClick={() => setActiveTab("settings")}
            />
          </div>

          {/* SEO mini score */}
          <div
            className="flex items-center gap-2 ml-auto px-4 py-2 rounded-xl flex-shrink-0"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <SeoScoreRing score={score} size={40} />
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            CONTENT TAB
        ══════════════════════════════════════════════ */}
        {activeTab === "content" && (
          <div className="space-y-5">
            {/* Cover image */}
            <Card>
              <SectionHeader
                icon={
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <rect
                      x="1"
                      y="2"
                      width="12"
                      height="10"
                      rx="2"
                      stroke="#f26522"
                      strokeWidth="1.2"
                    />
                    <circle
                      cx="5"
                      cy="6"
                      r="1.2"
                      stroke="#f26522"
                      strokeWidth="1"
                    />
                    <path
                      d="M1 10l3.5-3 2.5 2 2-1.5L13 10"
                      stroke="#f26522"
                      strokeWidth="1"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
                title="Cover Image"
                subtitle="Recommended size: 1200 × 630 px • JPG, PNG, WebP"
              />

              <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 items-start">
                {/* LEFT SIDE */}
                <div className="space-y-3">
                  {form.coverImage ? (
                    <div
                      className="relative group overflow-hidden rounded-2xl border"
                      style={{
                        borderColor: "rgba(255,255,255,0.08)",
                        background: "rgba(255,255,255,0.02)",
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={form.coverImage}
                        alt="Cover Preview"
                        className="w-full aspect-[16/9] object-cover"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

                      {/* Remove */}
                      <button
                        type="button"
                        onClick={() => update("coverImage", "")}
                        className="absolute top-3 right-3 w-9 h-9 rounded-xl backdrop-blur-md hidden group-hover:flex items-center justify-center text-sm font-bold text-white transition-all cursor-pointer"
                        style={{
                          background: "rgba(239,68,68,0.85)",
                          boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
                        }}
                      >
                        ✕
                      </button>

                      {/* Bottom Info */}
                      <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-white text-xs font-semibold">
                              Cover Preview
                            </p>
                            <p className="text-white/60 text-[11px]">
                              Optimized for SEO & social sharing
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={() => coverInputRef.current?.click()}
                            className="px-3 py-1.5 rounded-lg text-[11px] font-semibold text-white transition-all"
                            style={{
                              background: "rgba(255,255,255,0.12)",
                              border: "1px solid rgba(255,255,255,0.12)",
                            }}
                          >
                            Change
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => coverInputRef.current?.click()}
                      className="w-full aspect-[16/9] rounded-2xl flex flex-col items-center justify-center transition-all group relative overflow-hidden cursor-pointer"
                      style={{
                        border: "2px dashed rgba(255,255,255,0.12)",
                        background:
                          "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015))",
                      }}
                    >
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                        style={{
                          background:
                            "radial-gradient(circle at center, rgba(242,101,34,0.08), transparent 70%)",
                        }}
                      />

                      {uploading === "cover" ? (
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 border-2 border-[#f26522] border-t-transparent rounded-full animate-spin mb-3" />
                          <span className="text-sm text-[#f26522] font-medium">
                            Uploading...
                          </span>
                        </div>
                      ) : (
                        <>
                          <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all"
                            style={{
                              background: "rgba(242,101,34,0.08)",
                              border: "1px solid rgba(242,101,34,0.12)",
                            }}
                          >
                            <svg
                              width="28"
                              height="28"
                              viewBox="0 0 24 24"
                              fill="none"
                              className="text-[#f26522]"
                            >
                              <path
                                d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"
                                stroke="currentColor"
                                strokeWidth="1.7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>

                          <h4 className="text-sm font-semibold text-white mb-1">
                            Upload Cover Image
                          </h4>

                          <p className="text-xs text-gray-400 text-center max-w-[220px] leading-relaxed">
                            Drag & drop or click to upload a high-quality blog
                            cover image
                          </p>

                          <div className="flex items-center gap-2 mt-4">
                            <span
                              className="px-2.5 py-1 rounded-md text-[10px] font-medium"
                              style={{
                                background: "rgba(255,255,255,0.04)",
                                border: "1px solid rgba(255,255,255,0.06)",
                                color: "rgba(255,255,255,0.6)",
                              }}
                            >
                              PNG
                            </span>

                            <span
                              className="px-2.5 py-1 rounded-md text-[10px] font-medium"
                              style={{
                                background: "rgba(255,255,255,0.04)",
                                border: "1px solid rgba(255,255,255,0.06)",
                                color: "rgba(255,255,255,0.6)",
                              }}
                            >
                              JPG
                            </span>

                            <span
                              className="px-2.5 py-1 rounded-md text-[10px] font-medium"
                              style={{
                                background: "rgba(255,255,255,0.04)",
                                border: "1px solid rgba(255,255,255,0.06)",
                                color: "rgba(255,255,255,0.6)",
                              }}
                            >
                              WebP
                            </span>
                          </div>
                        </>
                      )}
                    </button>
                  )}

                  <input
                    ref={coverInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const f = e.target.files?.[0];
                      if (f) uploadImage(f, "cover");
                    }}
                  />
                </div>

                {/* RIGHT SIDE */}
                <div className="space-y-5">
                  {/* ALT TEXT */}
                  <div>
                    <label className="lbl mb-2 block">
                      Alt Text
                      <span className="text-gray-500 font-normal ml-1">
                        (SEO & accessibility)
                      </span>
                    </label>

                    <textarea
                      rows={4}
                      value={form.coverImageAlt}
                      onChange={(e) => update("coverImageAlt", e.target.value)}
                      placeholder="Example: AI-powered democracy concept showing digital governance and futuristic civic technology..."
                      className="inp resize-none"
                    />

                    <div className="flex items-center justify-between mt-2">
                      <p className="text-[11px] text-gray-500 leading-relaxed">
                        Describe the image naturally using keywords relevant to
                        your blog.
                      </p>

                      <span
                        className={`text-[11px] font-medium ${
                          form.coverImageAlt?.length > 20
                            ? "text-green-500"
                            : "text-amber-500"
                        }`}
                      >
                        {form.coverImageAlt?.length || 0}/120
                      </span>
                    </div>
                  </div>

                  {/* SEO INFO */}
                  <div
                    className="rounded-2xl p-4 space-y-3"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: "rgba(34,197,94,0.08)",
                          border: "1px solid rgba(34,197,94,0.12)",
                        }}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="text-green-500"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-white mb-1">
                          SEO Optimization Tips
                        </h4>

                        <ul className="space-y-1 text-xs text-gray-400 leading-relaxed">
                          <li>• Use high-resolution landscape images</li>
                          <li>• Add descriptive alt text with keywords</li>
                          <li>• Keep image size under 300KB for performance</li>
                          <li>• Recommended aspect ratio: 16:9</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {!form.coverImage && (
                    <div
                      className="flex items-start gap-3 text-sm px-4 py-3 rounded-xl"
                      style={{
                        background: "rgba(245,158,11,0.06)",
                        border: "1px solid rgba(245,158,11,0.14)",
                        color: "rgba(251,191,36,0.9)",
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 12 12"
                        fill="none"
                        className="mt-0.5 flex-shrink-0"
                      >
                        <path
                          d="M6 1l5 10H1L6 1z"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6 5v2.5M6 9v.5"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                        />
                      </svg>

                      <div>
                        <p className="font-semibold mb-0.5">
                          Cover image missing
                        </p>
                        <p className="text-xs opacity-80 leading-relaxed">
                          Blogs with optimized featured images perform
                          significantly better on Google Discover, social
                          previews, and search rankings.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Card>

            {/* Title + Slug + Excerpt */}
            <Card>
              <SectionHeader
                icon={
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 3h10M2 7h7M2 11h5"
                      stroke="#f26522"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                }
                title="Post Identity"
                subtitle="Title, URL slug, and excerpt - the face of your blog post"
              />
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="lbl">
                      Blog Title <span className="text-red-500">*</span>
                    </label>
                    <span
                      className={`text-xs tabular-nums ${
                        form.title.length > 80
                          ? "text-amber-400"
                          : "text-gray-600"
                      }`}
                    >
                      {form.title.length}/100
                    </span>
                  </div>
                  <input
                    value={form.title}
                    onChange={(e) => update("title", e.target.value)}
                    placeholder="Write a compelling, keyword-rich title…"
                    maxLength={100}
                    className="inp text-base font-semibold"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="lbl">
                      URL Slug <span className="text-red-500">*</span>
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        setAutoSlug(true);
                        update("slug", slugify(form.title));
                      }}
                      className="text-xs flex items-center gap-1 transition-colors"
                      style={{ color: "rgba(242,101,34,0.65)" }}
                    >
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M8.5 1.5A4.5 4.5 0 115 9.5"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M8.5 4.5V1.5H5.5"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Auto-generate
                    </button>
                  </div>
                  <div className="flex">
                    <span
                      className="px-3 py-2.5 rounded-l-xl text-xs font-mono text-gray-600 flex items-center whitespace-nowrap"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRight: "none",
                      }}
                    >
                      marketrixa.com/blogs/
                    </span>
                    <input
                      value={form.slug}
                      onChange={(e) => {
                        setAutoSlug(false);
                        update("slug", slugify(e.target.value));
                      }}
                      placeholder="your-post-slug"
                      className="flex-1 rounded-r-xl px-4 py-2.5 text-sm font-mono text-white placeholder-gray-600 focus:outline-none transition-all"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.09)",
                        borderLeft: "none",
                      }}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor =
                          "rgba(242,101,34,0.5)")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor =
                          "rgba(255,255,255,0.09)")
                      }
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="lbl">Excerpt / Summary</label>
                    <span
                      className={`text-xs tabular-nums ${
                        form.excerpt.length > 200
                          ? "text-amber-400"
                          : form.excerpt.length >= 80
                          ? "text-emerald-500"
                          : "text-gray-600"
                      }`}
                    >
                      {form.excerpt.length}/300
                    </span>
                  </div>
                  <textarea
                    value={form.excerpt}
                    onChange={(e) => update("excerpt", e.target.value)}
                    placeholder="Brief summary shown in listings, search results & social shares (150–200 chars recommended)…"
                    rows={3}
                    maxLength={300}
                    className="inp resize-none"
                  />
                  {form.excerpt.length > 0 && form.excerpt.length < 80 && (
                    <p className="text-xs text-amber-500/70 mt-1">
                      Tip: Aim for at least 80 characters for better SEO impact
                    </p>
                  )}
                </div>
              </div>
            </Card>

            {/* Editor */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="lbl">
                  Content <span className="text-red-500">*</span>
                </label>
                <ReadabilityStats content={form.content} readTime={readTime} />
              </div>

              {/* Editor tips */}
              <div className="flex flex-wrap gap-2 mb-2">
                {[
                  {
                    label: "Use H2 for sections",
                    tip: "Heading 2 for main sections",
                  },
                  {
                    label: "Use H3 for subsections",
                    tip: "Heading 3 for sub-topics",
                  },
                  { label: "Bold key terms", tip: "Ctrl+B or ⌘+B" },
                  { label: "Bullet lists", tip: "Toolbar → list icon" },
                  { label: "Block quotes", tip: "For important callouts" },
                ].map((t) => (
                  <span
                    key={t.label}
                    className="text-[10px] px-2.5 py-1 rounded-full flex items-center gap-1"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      color: "rgba(255,255,255,0.3)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <span>💡</span>
                    {t.label}
                  </span>
                ))}
              </div>

              <BlogEditor
                content={form.content}
                onChange={(html) => update("content", html)}
              />

              {/* Word count guidance */}
              {form.content && wordCount(form.content) > 0 && (
                <div
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div className="flex-1">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600">Content depth</span>
                      <span
                        className={
                          wordCount(form.content) >= 1500
                            ? "text-emerald-400"
                            : wordCount(form.content) >= 800
                            ? "text-amber-400"
                            : "text-red-400"
                        }
                      >
                        {wordCount(form.content) >= 1500
                          ? "Great — in-depth article"
                          : wordCount(form.content) >= 800
                          ? "Good — solid content"
                          : "Short — add more depth"}
                      </span>
                    </div>
                    <div
                      className="h-1.5 rounded-full overflow-hidden"
                      style={{ background: "rgba(255,255,255,0.06)" }}
                    >
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${Math.min(
                            100,
                            (wordCount(form.content) / 1500) * 100,
                          )}%`,
                          background:
                            wordCount(form.content) >= 1500
                              ? "#10b981"
                              : wordCount(form.content) >= 800
                              ? "#f59e0b"
                              : "#ef4444",
                        }}
                      />
                    </div>
                  </div>
                  <span className="text-xs text-gray-600 flex-shrink-0">
                    {wordCount(form.content)}/1500
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════
            SEO TAB
        ══════════════════════════════════════════════ */}
        {activeTab === "seo" && (
          <div className="space-y-5">
            {/* Score overview */}
            <Card>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                <SeoScoreRing score={score} size={64} />
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 flex-1">
                  {seoChecks.slice(0, 6).map((c) => (
                    <div
                      key={c.key}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg"
                      style={{
                        background: c.ok
                          ? "rgba(16,185,129,0.06)"
                          : "rgba(255,255,255,0.02)",
                        border: `1px solid ${
                          c.ok
                            ? "rgba(16,185,129,0.18)"
                            : "rgba(255,255,255,0.06)"
                        }`,
                      }}
                    >
                      <div
                        className={`w-2 h-2 rounded-full flex-shrink-0 ${
                          c.ok ? "bg-emerald-400" : "bg-white/15"
                        }`}
                      />
                      <span
                        className={`text-[11px] truncate ${
                          c.ok ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {c.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Suggestions */}
            <SEOSuggestions
              checks={seoChecks}
              onTabSwitch={(t) => setActiveTab(t as Tab)}
            />

            {/* SERP Preview */}
            <Card>
              <SectionHeader
                icon={
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle
                      cx="6"
                      cy="6"
                      r="4.5"
                      stroke="#f26522"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M9.5 9.5l3 3"
                      stroke="#f26522"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                }
                title="Google Search Preview"
                subtitle="Approximate how this post appears in search results"
              />
              <div className="rounded-xl overflow-hidden border border-white/10 bg-white">
                <div className="p-4 space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center text-[8px] font-bold text-gray-500">
                      M
                    </div>
                    <div>
                      <p className="text-[11px] text-gray-500 leading-none">
                        Marketrixa
                      </p>
                      <p className="text-[10px] text-gray-400 leading-none">
                        https://marketrixa.com/blogs/{form.slug || "your-slug"}
                      </p>
                    </div>
                  </div>
                  <p className="text-[#1a0dab] text-base font-medium leading-tight cursor-pointer hover:underline">
                    {form.seo.metaTitle ||
                      form.title ||
                      "Page title appears here"}
                  </p>
                  <p className="text-[#545454] text-sm leading-snug line-clamp-2">
                    {form.seo.metaDescription ||
                      form.excerpt ||
                      "Page description appears here. Make it 120–160 characters for best results."}
                  </p>
                </div>
              </div>
            </Card>

            {/* Meta fields */}
            <Card>
              <SectionHeader
                icon={
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 3h10M2 6h8M2 9h6"
                      stroke="#f26522"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                }
                title="Meta Tags"
                subtitle="Directly control what search engines read about this page"
              />
              <div className="space-y-5">
                <div className="space-y-2">
                  <MetaBar
                    label="Meta Title"
                    value={form.seo.metaTitle}
                    min={30}
                    max={60}
                    warn
                  />
                  <input
                    value={form.seo.metaTitle}
                    onChange={(e) => updateSeo("metaTitle", e.target.value)}
                    placeholder="e.g. How AI is Transforming B2B Marketing in 2025 | Marketrixa"
                    className="inp"
                  />
                </div>
                <div className="space-y-2">
                  <MetaBar
                    label="Meta Description"
                    value={form.seo.metaDescription}
                    min={120}
                    max={160}
                    warn
                  />
                  <textarea
                    value={form.seo.metaDescription}
                    onChange={(e) =>
                      updateSeo("metaDescription", e.target.value)
                    }
                    placeholder="Concise description that entices users to click in search results…"
                    rows={3}
                    className="inp resize-none"
                  />
                </div>
                <div>
                  <label className="lbl">Focus Keywords</label>
                  <input
                    value={form.seo.metaKeywords}
                    onChange={(e) => updateSeo("metaKeywords", e.target.value)}
                    placeholder="AI marketing, B2B lead generation, marketing automation, CRM integration"
                    className="inp"
                  />
                  <p className="text-[11px] text-gray-700 mt-1.5">
                    Comma-separated · 5–10 keywords · include your primary
                    keyword in title &amp; first paragraph
                  </p>
                </div>
                <div>
                  <label className="lbl">Canonical URL</label>
                  <input
                    value={form.seo.canonicalUrl}
                    onChange={(e) => updateSeo("canonicalUrl", e.target.value)}
                    placeholder="https://marketrixa.com/blogs/your-slug"
                    className="inp font-mono text-xs"
                  />
                </div>
              </div>
            </Card>

            {/* Open Graph */}
            <Card>
              <SectionHeader
                icon={
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <rect
                      x="1"
                      y="3"
                      width="12"
                      height="8"
                      rx="1.5"
                      stroke="#f26522"
                      strokeWidth="1.2"
                    />
                    <path d="M1 6h12" stroke="#f26522" strokeWidth="1" />
                  </svg>
                }
                title="Open Graph / Social Sharing"
                subtitle="Controls appearance when shared on LinkedIn, Twitter and Facebook"
              />
              <div className="space-y-5">
                {/* OG card preview */}
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <div
                    className="h-28 relative overflow-hidden flex items-center justify-center"
                    style={{ background: "rgba(255,255,255,0.04)" }}
                  >
                    {form.seo.ogImage || form.coverImage ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={form.seo.ogImage || form.coverImage}
                        alt="og"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-gray-700 text-sm">
                        OG Image Preview
                      </span>
                    )}
                  </div>
                  <div className="p-3 bg-[#f0f2f5] space-y-0.5">
                    <p className="text-[10px] text-[#65676b] uppercase tracking-wider">
                      MARKETRIXA.COM
                    </p>
                    <p className="text-[#050505] text-sm font-semibold leading-tight line-clamp-1">
                      {form.seo.ogTitle || form.title || "Article title"}
                    </p>
                    <p className="text-[#65676b] text-xs line-clamp-2">
                      {form.seo.ogDescription ||
                        form.excerpt ||
                        "Article description"}
                    </p>
                  </div>
                </div>

                <div>
                  <label className="lbl">OG Title</label>
                  <input
                    value={form.seo.ogTitle}
                    onChange={(e) => updateSeo("ogTitle", e.target.value)}
                    placeholder="Social share title (defaults to blog title)"
                    className="inp"
                  />
                </div>
                <div className="space-y-2">
                  <MetaBar
                    label="OG Description"
                    value={form.seo.ogDescription}
                    min={60}
                    max={200}
                  />
                  <textarea
                    value={form.seo.ogDescription}
                    onChange={(e) => updateSeo("ogDescription", e.target.value)}
                    placeholder="Social share description…"
                    rows={2}
                    className="inp resize-none"
                  />
                </div>
                <div>
                  <label className="lbl">OG Image</label>
                  <div className="flex gap-2 flex-wrap">
                    <input
                      value={form.seo.ogImage}
                      onChange={(e) => updateSeo("ogImage", e.target.value)}
                      placeholder="https://… or upload below"
                      className="inp flex-1 font-mono text-xs min-w-0"
                    />
                    <button
                      type="button"
                      onClick={() => ogImageRef.current?.click()}
                      className="px-3 py-2.5 rounded-xl border text-sm text-gray-400 hover:text-white hover:border-white/20 transition-all whitespace-nowrap cursor-pointer"
                      style={{ borderColor: "rgba(255,255,255,0.1)" }}
                    >
                      {uploading === "og" ? (
                        <span className="w-4 h-4 border-2 border-[#f26522] border-t-transparent rounded-full animate-spin inline-block" />
                      ) : (
                        "Upload"
                      )}
                    </button>
                    {form.coverImage && !form.seo.ogImage && (
                      <button
                        type="button"
                        onClick={() => updateSeo("ogImage", form.coverImage)}
                        className="px-3 py-2.5 rounded-xl border text-xs text-gray-400 hover:text-[#f26522] transition-all whitespace-nowrap cursor-pointer"
                        style={{ borderColor: "rgba(255,255,255,0.1)" }}
                      >
                        Use cover
                      </button>
                    )}
                  </div>
                  <input
                    ref={ogImageRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const f = e.target.files?.[0];
                      if (f) uploadImage(f, "og");
                    }}
                  />
                </div>
              </div>
            </Card>

            {/* Structured Data */}
            <Card>
              <div className="flex items-start justify-between mb-4">
                <SectionHeader
                  icon={
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M4 2L2 7l2 5M10 2l2 5-2 5M6 1l2 12"
                        stroke="#f26522"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  }
                  title="Structured Data (JSON-LD)"
                  subtitle="Schema.org markup for rich search results — BlogPosting + FAQ"
                />
                <button
                  type="button"
                  onClick={generateStructuredData}
                  className="flex-shrink-0 px-3 py-2 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all"
                  style={{
                    background: "rgba(242,101,34,0.1)",
                    color: "rgba(242,101,34,0.85)",
                    border: "1px solid rgba(242,101,34,0.2)",
                  }}
                >
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <path
                      d="M5.5 1v4.5H10M1.5 5.5a4 4 0 108-1"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Auto-generate
                </button>
              </div>
              <textarea
                value={form.seo.structuredData || ""}
                onChange={(e) => updateSeo("structuredData", e.target.value)}
                placeholder={
                  '{\n  "@context": "https://schema.org",\n  "@type": "BlogPosting"\n}'
                }
                rows={12}
                className="inp font-mono text-xs resize-none leading-relaxed"
              />
            </Card>
          </div>
        )}

        {/* ══════════════════════════════════════════════
            FAQ TAB
        ══════════════════════════════════════════════ */}
        {activeTab === "faq" && (
          <div className="space-y-5">
            {/* Info */}
            <div
              className="rounded-xl px-4 py-3.5 flex items-start gap-3"
              style={{
                background: "rgba(242,101,34,0.05)",
                border: "1px solid rgba(242,101,34,0.15)",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="text-[#f26522] mt-0.5 flex-shrink-0"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="7"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <path
                  d="M8 5v3.5M8 10.5v.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
              <div>
                <p className="text-sm text-gray-200 font-medium">
                  FAQ rich snippets boost click-through rates by up to 20%
                </p>
                <p className="text-xs text-gray-600 mt-0.5">
                  Add Q&As here — they're automatically included in your JSON-LD
                  structured data and shown as an accordion on the blog page.
                </p>
              </div>
            </div>

            {/* Group details */}
            <Card>
              <SectionHeader
                icon={
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle
                      cx="7"
                      cy="7"
                      r="6"
                      stroke="#f26522"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M7 4.5c-1.2 0-2 .8-2 2 0 .9.5 1.6 1.5 2V10"
                      stroke="#f26522"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                    <circle cx="7" cy="11.5" r="0.5" fill="#f26522" />
                  </svg>
                }
                title="FAQ Group Details"
              />
              <div className="space-y-4">
                <div>
                  <label className="lbl">Group Title</label>
                  <input
                    value={faq.title}
                    onChange={(e) =>
                      setFaq((p) => ({ ...p, title: e.target.value }))
                    }
                    placeholder={`${
                      form.title || "Article"
                    } — Frequently Asked Questions`}
                    className="inp"
                  />
                </div>
                <div>
                  <label className="lbl">
                    Group Description{" "}
                    <span className="text-gray-700">(optional)</span>
                  </label>
                  <input
                    value={faq.description}
                    onChange={(e) =>
                      setFaq((p) => ({ ...p, description: e.target.value }))
                    }
                    placeholder="Short context about this FAQ section…"
                    className="inp"
                  />
                </div>
              </div>
            </Card>

            {/* Items */}
            <Card>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <h3 className="text-sm font-semibold text-gray-200">
                    Questions &amp; Answers
                  </h3>
                  <span
                    className="text-[11px] font-bold px-2 py-0.5 rounded-full"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      color: "#6b7280",
                    }}
                  >
                    {faq.items.length}
                  </span>
                  {validFAQCount > 0 && (
                    <span
                      className="text-[11px] font-bold px-2 py-0.5 rounded-full"
                      style={{
                        background: "rgba(16,185,129,0.1)",
                        color: "#34d399",
                        border: "1px solid rgba(16,185,129,0.2)",
                      }}
                    >
                      {validFAQCount} valid
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  onClick={addFAQItem}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer"
                  style={{
                    background: "rgba(242,101,34,0.1)",
                    color: "rgba(242,101,34,0.9)",
                    border: "1px solid rgba(242,101,34,0.2)",
                  }}
                >
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <path
                      d="M5.5 1v9M1 5.5h9"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                  Add Question
                </button>
              </div>

              {faq.items.length === 0 ? (
                <div
                  className="rounded-xl flex flex-col items-center justify-center py-14 text-center"
                  style={{ border: "2px dashed rgba(255,255,255,0.07)" }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                    style={{
                      background: "rgba(242,101,34,0.08)",
                      border: "1px solid rgba(242,101,34,0.15)",
                    }}
                  >
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      className="text-[#f26522]"
                    >
                      <circle
                        cx="13"
                        cy="13"
                        r="11"
                        stroke="currentColor"
                        strokeWidth="1.4"
                      />
                      <path
                        d="M10 10.5c0-1.7 1.3-3 3-3s3 1.3 3 3c0 1.4-1 2.6-2.5 2.9V15"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      />
                      <circle cx="13" cy="17.5" r="0.8" fill="currentColor" />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-sm font-semibold">
                    No questions yet
                  </p>
                  <p className="text-gray-700 text-xs mt-1 max-w-xs">
                    Add common questions readers ask about this topic. FAQ rich
                    snippets appear directly in Google results.
                  </p>
                  <button
                    type="button"
                    onClick={addFAQItem}
                    className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer"
                    style={{
                      background: "rgba(242,101,34,0.12)",
                      color: "rgba(242,101,34,0.9)",
                      border: "1px solid rgba(242,101,34,0.22)",
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M6 1v10M1 6h10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    Add First Question
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {faq.items.map((item, i) => (
                    <FAQItem
                      key={item.id}
                      item={item}
                      index={i}
                      onUpdate={updateFAQItem}
                      onDelete={deleteFAQItem}
                      onMoveUp={(idx) => moveFAQItem(idx, "up")}
                      onMoveDown={(idx) => moveFAQItem(idx, "down")}
                      isFirst={i === 0}
                      isLast={i === faq.items.length - 1}
                    />
                  ))}
                  <button
                    type="button"
                    onClick={addFAQItem}
                    className="w-full py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
                    style={{
                      border: "2px dashed rgba(255,255,255,0.08)",
                      color: "#6b7280",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M7 1v12M1 7h12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    Add Another Question
                  </button>
                </div>
              )}
            </Card>

            {validFAQCount > 0 && (
              <div
                className="rounded-xl px-4 py-3.5 flex items-center justify-between gap-4"
                style={{
                  background: "rgba(16,185,129,0.06)",
                  border: "1px solid rgba(16,185,129,0.18)",
                }}
              >
                <div className="flex items-center gap-2.5">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle
                      cx="8"
                      cy="8"
                      r="7"
                      stroke="#10b981"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M5 8l2 2 4-4"
                      stroke="#10b981"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-emerald-400 text-sm">
                    {validFAQCount} valid Q&amp;As will be saved
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    generateStructuredData();
                    setActiveTab("seo");
                  }}
                  className="text-xs font-semibold flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors whitespace-nowrap cursor-pointer"
                >
                  Generate schema →
                </button>
              </div>
            )}
          </div>
        )}

        {/* ══════════════════════════════════════════════
            SETTINGS TAB
        ══════════════════════════════════════════════ */}
        {activeTab === "settings" && (
          <div className="space-y-5">
            <Card>
              <SectionHeader
                icon={
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle
                      cx="7"
                      cy="4"
                      r="2.5"
                      stroke="#f26522"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M1 13c0-3.3 2.7-6 6-6s6 2.7 6 6"
                      stroke="#f26522"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                }
                title="Author &amp; Classification"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="lbl">Author Name</label>
                  <input
                    value={form.author}
                    onChange={(e) => update("author", e.target.value)}
                    className="inp"
                  />
                </div>
                <div>
                  <label className="lbl">Industry / Category</label>
                  <select
                    value={form.industry}
                    onChange={(e) => update("industry", e.target.value)}
                    className="inp cursor-pointer appearance-none"
                  >
                    {INDUSTRIES.map((i) => (
                      <option key={i} value={i} style={{ background: "#111" }}>
                        {i}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </Card>

            <Card>
              <SectionHeader
                icon={
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M1 7h12M7 1v12"
                      stroke="#f26522"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                }
                title="Publication Status"
              />
              <div className="grid grid-cols-3 gap-3">
                {(["draft", "published", "archived"] as BlogStatus[]).map(
                  (s) => {
                    const active = form.status === s;
                    const colors: {
                      [k: string]: {
                        bg: string;
                        border: string;
                        text: string;
                        icon: string;
                      };
                    } = {
                      draft: {
                        bg: "rgba(245,158,11,0.1)",
                        border: "rgba(245,158,11,0.25)",
                        text: "#fbbf24",
                        icon: "✎",
                      },
                      published: {
                        bg: "rgba(16,185,129,0.1)",
                        border: "rgba(16,185,129,0.25)",
                        text: "#34d399",
                        icon: "✓",
                      },
                      archived: {
                        bg: "rgba(255,255,255,0.06)",
                        border: "rgba(255,255,255,0.15)",
                        text: "#9ca3af",
                        icon: "⊘",
                      },
                    };
                    const c = colors[s];
                    return (
                      <button
                        key={s}
                        type="button"
                        onClick={() => update("status", s)}
                        className="py-3 rounded-xl text-sm font-semibold border capitalize flex flex-col items-center gap-1.5 transition-all cursor-pointer"
                        style={
                          active
                            ? {
                                background: c.bg,
                                borderColor: c.border,
                                color: c.text,
                              }
                            : {
                                borderColor: "rgba(255,255,255,0.07)",
                                color: "#4b5563",
                              }
                        }
                      >
                        <span className="text-base">{c.icon}</span>
                        {s}
                      </button>
                    );
                  },
                )}
              </div>
            </Card>

            <Card>
              <SectionHeader
                icon={
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 3h2m0 0V1m0 2v2m0-2h8M6 7h6M6 11h4"
                      stroke="#f26522"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    />
                  </svg>
                }
                title="Tags"
                subtitle="Press Enter or comma to add · Used for filtering and related posts"
              />
              <TagInput
                tags={form.tags}
                onChange={(tags) => update("tags", tags)}
              />
            </Card>

            <Card>
              <SectionHeader
                icon={
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle
                      cx="7"
                      cy="7"
                      r="5.5"
                      stroke="#f26522"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M7 4v3.5l2 1.5"
                      stroke="#f26522"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                }
                title="Read Time"
                subtitle="Auto-calculated from word count · Override if needed"
              />
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setReadTime(Math.max(1, readTime - 1))}
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.09)",
                    }}
                  >
                    −
                  </button>
                  <input
                    type="number"
                    min={1}
                    max={60}
                    value={readTime}
                    onChange={(e) => setReadTime(Number(e.target.value))}
                    className="w-16 text-center inp text-sm font-bold"
                  />
                  <button
                    type="button"
                    onClick={() => setReadTime(Math.min(60, readTime + 1))}
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.09)",
                    }}
                  >
                    +
                  </button>
                  <span className="text-sm text-gray-600">min read</span>
                </div>
                <button
                  type="button"
                  onClick={() => setReadTime(calcReadTime(form.content))}
                  className="text-xs flex items-center gap-1 transition-colors cursor-pointer"
                  style={{ color: "rgba(242,101,34,0.65)" }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M8.5 1.5A4.5 4.5 0 115 9.5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M8.5 4.5V1.5H5.5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Auto: {calcReadTime(form.content)} min
                </button>
              </div>
            </Card>
          </div>
        )}

        {/* ── Bottom sticky save bar ── */}
        <div className="sticky bottom-4 z-30">
          <div
            className="rounded-2xl px-5 py-3.5 flex items-center justify-between gap-4"
            style={{
              background: "rgba(8,10,18,0.92)",
              border: "1px solid rgba(255,255,255,0.09)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
            }}
          >
            <div className="flex items-center gap-4 min-w-0">
              <SeoScoreRing score={score} size={44} />
              <div className="hidden sm:flex flex-col">
                <span className="text-xs text-gray-600">
                  {seoChecks.filter((c) => c.ok).length}/{seoChecks.length}{" "}
                  checks passing
                </span>
                {lastSaved && (
                  <span className="text-[11px] text-emerald-600 flex items-center gap-1">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                      <path
                        d="M1.5 4.5l2 2L7.5 2"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Saved{" "}
                    {lastSaved.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                type="button"
                onClick={() => handleSubmit("draft")}
                disabled={saving}
                className="px-4 py-2.5 rounded-xl text-sm font-medium border text-gray-400 hover:text-white transition-all disabled:opacity-40 cursor-pointer"
                style={{ borderColor: "rgba(255,255,255,0.1)" }}
              >
                Save Draft
              </button>
              <button
                type="button"
                onClick={() => handleSubmit()}
                disabled={saving}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all disabled:opacity-50 flex items-center gap-2 cursor-pointer"
                style={{
                  background: "var(--brand-orange)",
                  boxShadow: "0 4px 16px rgba(242,101,34,0.3)",
                }}
              >
                {saving && (
                  <span className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin cursor-pointer" />
                )}
                {saving
                  ? "Saving…"
                  : mode === "new"
                  ? "Create Post"
                  : "Update Post"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .lbl {
          display: block;
          font-size: 0.7rem;
          font-weight: 700;
          color: #6b7280;
          margin-bottom: 0.4rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .inp {
          width: 100%;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 0.75rem;
          padding: 0.625rem 1rem;
          color: white;
          font-size: 0.875rem;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
        }
        .inp::placeholder {
          color: #4b5563;
        }
        .inp:focus {
          border-color: rgba(242, 101, 34, 0.5);
          background: rgba(255, 255, 255, 0.06);
        }
        select.inp option {
          background: #111827;
          color: white;
        }
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* ─── Force editor toolbar icons to work ─────────────────── */
        .ql-toolbar .ql-stroke {
          stroke: #9ca3af !important;
        }
        .ql-toolbar .ql-fill {
          fill: #9ca3af !important;
        }
        .ql-toolbar .ql-picker-label {
          color: #9ca3af !important;
        }
        .ql-toolbar button:hover .ql-stroke,
        .ql-toolbar button.ql-active .ql-stroke {
          stroke: #f26522 !important;
        }
        .ql-toolbar button:hover .ql-fill,
        .ql-toolbar button.ql-active .ql-fill {
          fill: #f26522 !important;
        }
        .ql-toolbar button:hover .ql-picker-label,
        .ql-toolbar button.ql-active .ql-picker-label {
          color: #f26522 !important;
        }

        /* Bullet / list fix — ensure list items render correctly */
        .ql-editor ul {
          list-style-type: disc !important;
          padding-left: 1.5em !important;
        }
        .ql-editor ol {
          list-style-type: decimal !important;
          padding-left: 1.5em !important;
        }
        .ql-editor ul > li {
          list-style-type: disc !important;
        }
        .ql-editor ol > li {
          list-style-type: decimal !important;
        }
        .ql-editor li::before {
          display: none !important;
        }
        .ql-editor li.ql-indent-1 {
          padding-left: 3em !important;
        }
        .ql-editor li.ql-indent-2 {
          padding-left: 4.5em !important;
        }

        /* Toolbar background */
        .ql-toolbar {
          background: rgba(255, 255, 255, 0.03) !important;
          border: 1px solid rgba(255, 255, 255, 0.09) !important;
          border-radius: 0.75rem 0.75rem 0 0 !important;
          padding: 8px !important;
        }
        .ql-container {
          border: 1px solid rgba(255, 255, 255, 0.09) !important;
          border-top: none !important;
          border-radius: 0 0 0.75rem 0.75rem !important;
          background: rgba(255, 255, 255, 0.025) !important;
          min-height: 380px;
        }
        .ql-editor {
          color: rgba(255, 255, 255, 0.82) !important;
          font-size: 0.9375rem !important;
          line-height: 1.8 !important;
          padding: 1.25rem 1.5rem !important;
          min-height: 360px;
        }
        .ql-editor h1 {
          color: white !important;
          font-size: 1.875rem !important;
          font-weight: 800 !important;
          margin: 1.5em 0 0.6em !important;
        }
        .ql-editor h2 {
          color: white !important;
          font-size: 1.45rem !important;
          font-weight: 700 !important;
          margin: 1.4em 0 0.5em !important;
          border-left: 3px solid #f26522;
          padding-left: 0.75rem !important;
        }
        .ql-editor h3 {
          color: rgba(242, 101, 34, 0.9) !important;
          font-size: 1.15rem !important;
          font-weight: 600 !important;
          margin: 1.2em 0 0.4em !important;
        }
        .ql-editor p {
          margin-bottom: 1em !important;
        }
        .ql-editor strong {
          color: white !important;
          font-weight: 700 !important;
        }
        .ql-editor a {
          color: #f26522 !important;
        }
        .ql-editor blockquote {
          border-left: 3px solid #f26522 !important;
          padding: 0.75rem 1rem !important;
          background: rgba(242, 101, 34, 0.05) !important;
          border-radius: 0 0.5rem 0.5rem 0 !important;
          color: rgba(255, 255, 255, 0.75) !important;
          margin: 1.2em 0 !important;
        }
        .ql-editor pre.ql-syntax {
          background: rgba(0, 0, 0, 0.4) !important;
          border: 1px solid rgba(255, 255, 255, 0.08) !important;
          border-radius: 0.75rem !important;
          color: rgba(255, 255, 255, 0.82) !important;
          padding: 1rem 1.25rem !important;
          font-family: "Fira Code", monospace !important;
        }
        .ql-picker-options {
          background: #1a1a2e !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          border-radius: 0.5rem !important;
        }
        .ql-picker-item {
          color: #9ca3af !important;
        }
        .ql-picker-item:hover {
          color: #f26522 !important;
          background: rgba(242, 101, 34, 0.08) !important;
        }
        .ql-editor.ql-blank::before {
          color: #4b5563 !important;
          font-style: normal !important;
        }
      `}</style>
    </div>
  );
}
