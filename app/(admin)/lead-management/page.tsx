"use client";

import React, { useEffect, useState } from "react";
import {
  Loader2,
  CheckCircle,
  Clock,
  XCircle,
  PhoneCall,
  RefreshCw,
  TrashIcon,
} from "lucide-react";

type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  status: "New" | "Contacted" | "Qualified" | "Closed";
  createdAt: any;
  source: string;
  company?: string;
  businessType?: string;
  budget?: string;
  revenue?: string;
  projectGoal?: string;
  contactMethod?: string;
  message?: string;
};

export default function LeadTable() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [delLoading, setDelLoading] = useState(false);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [statusPopup, setStatusPopup] = useState(false);
  const fetchLeads = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/leads");
      const data = await response.json();
      setLeads(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Failed to fetch leads", error);
      setLeads([]);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (leadId: string, newStatus: string) => {
    setUpdatingId(leadId);
    try {
      const response = await fetch("/api/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: leadId, status: newStatus }),
      });

      if (response.ok) {
        setLeads((prev) =>
          prev.map((l) =>
            l.id === leadId ? { ...l, status: newStatus as any } : l,
          ),
        );
      }
    } catch (error) {
      console.error("Update failed", error);
    } finally {
      setUpdatingId(null);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);
  console.log(leads)

  const deleteLead = async (leadId: string) => {
    try {
      setDelLoading(true);
      const response = await fetch("/api/leads", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: leadId,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to delete lead");
      }
      fetchLeads();
      return data;
    } catch (error) {
      console.error("Delete lead error:", error);
      throw error;
    } finally {
      setDelLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "New":
        return "bg-blue-500/20 text-blue-400 border-blue-500/50";
      case "Contacted":
        return "bg-orange-500/20 text-orange-400 border-orange-500/50";
      case "Qualified":
        return "bg-green-500/20 text-green-400 border-green-500/50";
      case "Closed":
        return "bg-gray-500/20 text-gray-400 border-gray-500/50";
      default:
        return "bg-white/10 text-white";
    }
  };

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center text-white">
        <Loader2 className="mr-2 animate-spin" /> Loading leads...
      </div>
    );
  }

  console.log(leads)

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white text-lg font-bold tracking-tight">
          Leads Overview
        </h2>

        <button
          onClick={fetchLeads}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F26522] text-black text-xs font-bold uppercase tracking-wider hover:bg-white transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          {loading ? "Refreshing..." : "Refresh"}
        </button>
      </div>

      <div className="mt-8 overflow-x-auto rounded-xl border border-white/10 bg-black/40 backdrop-blur-md">
        <table className="w-full text-left text-sm text-gray-300">
          <thead className="bg-white/5 text-xs uppercase text-gray-400">
            <tr>
              <th className="px-6 py-4">Lead Details</th>
              <th className="px-6 py-4">Service</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Source</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {leads.map((lead) => (
              <tr key={lead.id} className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4">
                  <div className="font-medium text-white">{lead.name}</div>
                  <div className="text-xs text-gray-500">{lead.email}</div>
                  <div className="text-xs text-gray-500">{lead.phone}</div>
                </td>
                <td className="px-6 py-4">
                  <span className="rounded bg-white/5 px-2 py-1 text-[11px]">
                    {lead.service || "Not Specified"}
                  </span>
                </td>
                <td className="px-6 py-4 text-xs">
                  {lead.createdAt
                    ? new Date(lead.createdAt).toLocaleDateString()
                    : "N/A"}
                </td>
                <td className="px-6 py-4 text-xs capitalize">{String(lead.source || "Website").split("-").join(" ")}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase ${getStatusColor(lead.status)}`}
                  >
                    {lead.status || "New"}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedLead(lead)}
                      className="rounded-lg border border-white/20 px-3 py-1.5 text-xs font-medium text-white hover:bg-white/10 transition-colors cursor-pointer">
                      View
                    </button>
                    <select
                      disabled={updatingId === lead.id}
                      value={lead.status || "New"}
                      onChange={(e) => updateStatus(lead.id, e.target.value)}
                      className="bg-black border border-white/20 rounded-lg px-2 py-1.5 text-xs outline-none focus:border-[#F26522] cursor-pointer disabled:opacity-50 text-white">
                      <option value="New">New</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Qualified">Qualified</option>
                      <option value="Closed">Closed</option>
                    </select>
                    <button
                      onClick={() => {
                        if (window.confirm("Are you sure you want to delete this lead?")) {
                          deleteLead(lead.id);
                        }
                      }}
                      className="rounded-lg border border-red-500/30 px-2 py-1.5 cursor-pointer text-xs font-medium text-red-500 hover:bg-red-500/10 transition-colors">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {leads.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="px-6 py-20 text-center text-gray-500"
                >
                  <div className="flex flex-col items-center gap-2">
                    <Clock className="opacity-20" size={48} />
                    <p>No business leads have been submitted yet.</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* Lead Detail Drawer */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedLead(null)} />
          <div className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-2xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col">

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 rounded-t-2xl bg-[#0a0a0a] sticky top-0 z-10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#F26522]/15 border border-[#F26522]/30 flex items-center justify-center text-[#F26522] font-bold text-sm flex-shrink-0">
                  {selectedLead.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 className="text-white font-bold text-base tracking-tight leading-none">{selectedLead.name}</h3>
                  <p className="text-gray-500 text-xs mt-0.5">{selectedLead.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <button
                    onClick={() => setStatusPopup((p) => !p)}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase cursor-pointer transition-all hover:brightness-125 ${getStatusColor(selectedLead.status)}`}>
                    {selectedLead.status || "New"}
                    <svg className="w-2.5 h-2.5 opacity-60" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {statusPopup && (
                    <>
                      <div className="fixed inset-0 z-20" onClick={() => setStatusPopup(false)} />
                      <div className="absolute right-0 top-8 z-30 min-w-[140px] rounded-xl border border-white/10 bg-[#111] shadow-2xl overflow-hidden">
                        <p className="text-[9px] uppercase tracking-widest text-gray-600 font-semibold px-3 pt-2.5 pb-1.5">Update Status</p>
                        {["New", "Contacted", "Qualified", "Closed"].map((s) => (
                          <button key={s} type="button"
                            onClick={() => {
                              updateStatus(selectedLead.id, s);
                              setSelectedLead((prev) => prev ? { ...prev, status: s as any } : prev);
                              setStatusPopup(false);
                            }}
                            className={`w-full flex items-center justify-between px-3 py-2 text-xs font-semibold transition-colors hover:bg-white/5 ${selectedLead.status === s ? "text-[#F26522]" : "text-gray-300"}`}>
                            {s}
                            {selectedLead.status === s && (
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
                <button onClick={() => { setSelectedLead(null); setStatusPopup(false); }}
                  className="p-2 cursor-pointer rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-colors">
                  <XCircle size={20} />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="flex-1 px-6 py-5 space-y-5">

              {/* Row 1: Contact + Business side by side */}
              <div className="grid grid-cols-2 gap-4">

                {/* Contact Info */}
                <section>
                  <p className="text-[10px] uppercase tracking-widest text-gray-600 font-semibold mb-2">Contact Info</p>
                  <div className="space-y-1.5">
                    {[
                      { label: "Phone", value: selectedLead.phone },
                      { label: "Contact Via", value: selectedLead.contactMethod },
                      { label: "Source", value: selectedLead.source ? String(selectedLead.source).split("-").join(" ") : undefined },
                      { label: "Submitted", value: selectedLead.createdAt ? new Date(selectedLead.createdAt).toLocaleDateString() : undefined },
                    ].map(({ label, value }) => value ? (
                      <div key={label} className="flex flex-col py-2 px-3 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                        <span className="text-gray-600 text-[10px] uppercase tracking-wider">{label}</span>
                        <span className="text-white text-xs font-medium mt-0.5 capitalize">{value}</span>
                      </div>
                    ) : null)}
                  </div>
                </section>

                {/* Business Info */}
                <section>
                  <p className="text-[10px] uppercase tracking-widest text-gray-600 font-semibold mb-2">Business Info</p>
                  <div className="space-y-1.5">
                    {[
                      { label: "Company", value: selectedLead.company },
                      { label: "Business Type", value: selectedLead.businessType },
                      { label: "Monthly Budget", value: selectedLead.budget },
                      { label: "Monthly Revenue", value: selectedLead.revenue },
                    ].map(({ label, value }) => value ? (
                      <div key={label} className="flex flex-col py-2 px-3 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                        <span className="text-gray-600 text-[10px] uppercase tracking-wider">{label}</span>
                        <span className="text-white text-xs font-medium mt-0.5">{value}</span>
                      </div>
                    ) : null)}
                  </div>
                </section>
              </div>

              {/* Row 2: Services + Goal/Message side by side */}
              <div className="grid grid-cols-2 gap-4">

                {/* Services */}
                {selectedLead.service && (
                  <section>
                    <p className="text-[10px] uppercase tracking-widest text-gray-600 font-semibold mb-2">Services</p>
                    <div className="py-2.5 px-3 rounded-lg bg-white/[0.03] border border-white/[0.05] min-h-[60px]">
                      <div className="flex flex-wrap gap-1.5">
                        {selectedLead.service.split(", ").map((s) => (
                          <span key={s} className="px-2 py-0.5 rounded text-[11px] font-medium"
                            style={{ background: "rgba(242,101,34,0.12)", border: "1px solid rgba(242,101,34,0.3)", color: "#F26522" }}>
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </section>
                )}

                {/* Project Goal */}
                <section>
                  <p className="text-[10px] uppercase tracking-widest text-gray-600 font-semibold mb-2">Project Goal</p>
                  <div className="py-2.5 px-3 rounded-lg bg-white/[0.03] border border-white/[0.05] min-h-[60px] flex items-center">
                    <span className="text-white text-xs font-medium">
                      {selectedLead.projectGoal || <span className="text-gray-600">Not specified</span>}
                    </span>
                  </div>
                </section>
              </div>

              {/* Message — full width */}
              {selectedLead.message && (
                <section>
                  <p className="text-[10px] uppercase tracking-widest text-gray-600 font-semibold mb-2">Message</p>
                  <div className="py-3 px-3 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                    <p className="text-gray-300 text-xs leading-relaxed">{selectedLead.message}</p>
                  </div>
                </section>
              )}
            </div>

            {/* Footer */}
            <div className="bg-[#0a0a0a] border-t border-white/10 px-6 py-4 rounded-b-2xl">
              <div className="flex items-center justify-end gap-3">

                <a href={`tel:${selectedLead.phone}`}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#F26522] text-black text-xs font-bold uppercase tracking-wider hover:bg-white transition-all whitespace-nowrap">
                  <PhoneCall size={13} /> Call
                </a>
                <a href={`mailto:${selectedLead.email}`}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition-all whitespace-nowrap">
                  Mail
                </a>
                <button
                  onClick={() => {
                    if (window.confirm("Delete this lead?")) {
                      deleteLead(selectedLead.id);
                      setSelectedLead(null);
                    }
                  }}
                  className="flex items-center cursor-pointer gap-2 px-4 py-2.5 rounded-lg border border-red-500/30 text-red-500 text-xs font-bold uppercase tracking-wider hover:bg-red-500/10 transition-colors whitespace-nowrap">
                  <TrashIcon size={13} /> Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
