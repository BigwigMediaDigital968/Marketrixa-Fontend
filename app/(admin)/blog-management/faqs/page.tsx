"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FAQGroup, FAQ } from "@/app/types/blog";

function generateId() {
  return `faq_${Date.now()}_${Math.random().toString(36).slice(2)}`;
}

const emptyGroup = (): Omit<FAQGroup, "id" | "createdAt" | "updatedAt"> => ({
  title: "",
  description: "",
  faqs: [],
});

export default function FAQManagementPage() {
  const router = useRouter();
  const [groups, setGroups] = useState<FAQGroup[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingGroup, setEditingGroup] = useState<FAQGroup | null>(null);
  const [form, setForm] = useState(emptyGroup());
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);

  const fetchGroups = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/faqs");
      const data = await res.json();
      setGroups(data.groups || []);
    } catch {
      console.error("Failed to load FAQs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  const openNew = () => {
    setEditingGroup(null);
    setForm(emptyGroup());
    setError("");
  };

  const openEdit = (g: FAQGroup) => {
    setEditingGroup(g);
    setForm({
      title: g.title,
      description: g.description || "",
      faqs: [...g.faqs],
    });
    setError("");
  };

  const addFAQ = () => {
    setForm((p) => ({
      ...p,
      faqs: [
        ...p.faqs,
        {
          id: generateId(),
          question: "",
          answer: "",
          order: p.faqs.length + 1,
        },
      ],
    }));
  };

  const updateFAQ = (id: string, field: keyof FAQ, value: string | number) => {
    setForm((p) => ({
      ...p,
      faqs: p.faqs.map((f) => (f.id === id ? { ...f, [field]: value } : f)),
    }));
  };

  const removeFAQ = (id: string) => {
    setForm((p) => ({ ...p, faqs: p.faqs.filter((f) => f.id !== id) }));
  };

  const moveFAQ = (id: string, dir: "up" | "down") => {
    const faqs = [...form.faqs];
    const idx = faqs.findIndex((f) => f.id === id);
    if (dir === "up" && idx > 0) {
      [faqs[idx - 1], faqs[idx]] = [faqs[idx], faqs[idx - 1]];
    } else if (dir === "down" && idx < faqs.length - 1) {
      [faqs[idx], faqs[idx + 1]] = [faqs[idx + 1], faqs[idx]];
    }
    setForm((p) => ({
      ...p,
      faqs: faqs.map((f, i) => ({ ...f, order: i + 1 })),
    }));
  };

  const handleSave = async () => {
    setError("");
    if (!form.title.trim()) {
      setError("Group title is required");
      return;
    }
    setSaving(true);
    try {
      const url = editingGroup ? `/api/faqs/${editingGroup.id}` : "/api/faqs";
      const method = editingGroup ? "PUT" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      await fetchGroups();
      setEditingGroup(null);
      setForm(emptyGroup());
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Save failed");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Delete FAQ group "${title}"?`)) return;
    await fetch(`/api/faqs/${id}`, { method: "DELETE" });
    setGroups((prev) => prev.filter((g) => g.id !== id));
  };

  const isEditing =
    editingGroup !== null || form.title !== "" || form.faqs.length > 0;

  const inputCls =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#f26522]/60 transition-colors";

  return (
    <div className="min-h-screen p-6 lg:p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.push("/admin/blog-management")}
              className="p-2 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all"
            >
              ←
            </button>
            <div>
              <h1 className="text-3xl font-bold text-white tracking-tight">
                FAQ Manager
              </h1>
              <p className="text-gray-500 mt-0.5 text-sm">
                Manage FAQ groups for your website and blog posts
              </p>
            </div>
          </div>
          <button
            onClick={openNew}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-[#f26522] text-white hover:bg-[#f26522]/80 transition-all shadow-lg shadow-[#f26522]/20"
          >
            + New FAQ Group
          </button>
        </div>

        {/* Editor panel */}
        {isEditing && (
          <div className="glass rounded-2xl p-6 space-y-5 border-[#f26522]/20 border">
            <h2 className="text-lg font-semibold text-white">
              {editingGroup
                ? `Editing: ${editingGroup.title}`
                : "New FAQ Group"}
            </h2>

            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">
                  Group Title *
                </label>
                <input
                  value={form.title}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, title: e.target.value }))
                  }
                  placeholder="e.g. General FAQ, Pricing FAQ, Service FAQ..."
                  className={inputCls}
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">
                  Description
                </label>
                <input
                  value={form.description}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, description: e.target.value }))
                  }
                  placeholder="Brief description of this FAQ group..."
                  className={inputCls}
                />
              </div>
            </div>

            {/* FAQs */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-gray-300">
                  FAQs{" "}
                  <span className="text-gray-600 font-normal">
                    ({form.faqs.length})
                  </span>
                </h3>
                <button
                  onClick={addFAQ}
                  className="px-3 py-1.5 text-xs rounded-lg bg-[#f26522]/10 text-[#f26522] border border-[#f26522]/20 hover:bg-[#f26522]/20 transition-all"
                >
                  + Add Question
                </button>
              </div>

              {form.faqs.length === 0 && (
                <div className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center text-gray-600 text-sm">
                  No FAQs yet — click &quot;Add Question&quot; to get started
                </div>
              )}

              {form.faqs.map((faq, idx) => (
                <div
                  key={faq.id}
                  className="bg-white/[0.03] border border-white/10 rounded-xl p-4 space-y-3"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-600 font-mono w-5">
                      Q{idx + 1}
                    </span>
                    <div className="flex gap-1 ml-auto">
                      <button
                        onClick={() => moveFAQ(faq.id, "up")}
                        disabled={idx === 0}
                        className="p-1 text-gray-500 hover:text-white disabled:opacity-20 transition-colors"
                        title="Move up"
                      >
                        ↑
                      </button>
                      <button
                        onClick={() => moveFAQ(faq.id, "down")}
                        disabled={idx === form.faqs.length - 1}
                        className="p-1 text-gray-500 hover:text-white disabled:opacity-20 transition-colors"
                        title="Move down"
                      >
                        ↓
                      </button>
                      <button
                        onClick={() => removeFAQ(faq.id)}
                        className="p-1 text-red-400/50 hover:text-red-400 transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                  <input
                    value={faq.question}
                    onChange={(e) =>
                      updateFAQ(faq.id, "question", e.target.value)
                    }
                    placeholder="Question..."
                    className={inputCls}
                  />
                  <textarea
                    value={faq.answer}
                    onChange={(e) =>
                      updateFAQ(faq.id, "answer", e.target.value)
                    }
                    placeholder="Answer... (supports basic markdown)"
                    rows={3}
                    className={`${inputCls} resize-none`}
                  />
                </div>
              ))}
            </div>

            {error && <p className="text-red-400 text-sm">{error}</p>}

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => {
                  setEditingGroup(null);
                  setForm(emptyGroup());
                  setError("");
                }}
                className="px-4 py-2.5 rounded-xl text-sm border border-white/10 text-gray-400 hover:text-white transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={saving}
                className="px-6 py-2.5 rounded-xl text-sm font-semibold bg-[#f26522] text-white hover:bg-[#f26522]/80 transition-all shadow-lg shadow-[#f26522]/20 disabled:opacity-50 flex items-center gap-2"
              >
                {saving && (
                  <span className="w-3.5 h-3.5 border-2 border-white/50 border-t-white rounded-full animate-spin" />
                )}
                {editingGroup ? "Update Group" : "Save Group"}
              </button>
            </div>
          </div>
        )}

        {/* Groups list */}
        {loading ? (
          <div className="flex justify-center py-16">
            <div className="w-8 h-8 border-2 border-[#f26522] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : groups.length === 0 && !isEditing ? (
          <div className="glass rounded-2xl p-16 text-center">
            <p className="text-4xl mb-4">❓</p>
            <p className="text-white font-semibold">No FAQ groups yet</p>
            <p className="text-gray-500 text-sm mt-1">
              Create your first FAQ group to add questions
            </p>
            <button
              onClick={openNew}
              className="mt-5 px-6 py-2.5 rounded-xl bg-[#f26522] text-white text-sm font-semibold hover:bg-[#f26522]/80 transition-all inline-block"
            >
              + Create FAQ Group
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {groups.map((group) => (
              <div key={group.id} className="glass rounded-2xl overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4">
                  <button
                    onClick={() =>
                      setExpandedGroup(
                        expandedGroup === group.id ? null : group.id,
                      )
                    }
                    className="flex-1 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-gray-400 transition-transform duration-200 ${
                          expandedGroup === group.id ? "rotate-90" : ""
                        }`}
                      >
                        ▶
                      </span>
                      <div>
                        <p className="text-white font-semibold">
                          {group.title}
                        </p>
                        {group.description && (
                          <p className="text-gray-500 text-xs mt-0.5">
                            {group.description}
                          </p>
                        )}
                      </div>
                      <span className="ml-2 text-xs text-gray-600 bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                        {group.faqs.length} FAQ
                        {group.faqs.length !== 1 ? "s" : ""}
                      </span>
                    </div>
                  </button>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => openEdit(group)}
                      className="px-3 py-1.5 text-xs rounded-lg bg-white/5 text-gray-300 hover:bg-[#f26522]/20 hover:text-[#f26522] border border-white/10 transition-all"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(group.id, group.title)}
                      className="px-3 py-1.5 text-xs rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/20 transition-all"
                    >
                      Delete
                    </button>
                  </div>
                </div>

                {expandedGroup === group.id && group.faqs.length > 0 && (
                  <div className="border-t border-white/10 divide-y divide-white/5">
                    {group.faqs.map((faq) => (
                      <div key={faq.id} className="px-5 py-4 bg-white/[0.01]">
                        <p className="text-white text-sm font-medium">
                          {faq.question || (
                            <em className="text-gray-600">No question</em>
                          )}
                        </p>
                        <p className="text-gray-400 text-sm mt-1.5 leading-relaxed whitespace-pre-wrap">
                          {faq.answer || (
                            <em className="text-gray-600">No answer</em>
                          )}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
