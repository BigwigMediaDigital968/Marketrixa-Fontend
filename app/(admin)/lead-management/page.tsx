"use client";

import React, { useEffect, useState } from "react";
import {
  Loader2,
  CheckCircle,
  Clock,
  XCircle,
  PhoneCall,
  RefreshCw,
} from "lucide-react";

type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  status: "New" | "Contacted" | "Qualified" | "Closed";
  createdAt: any;
};

export default function LeadTable() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

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
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
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
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase ${getStatusColor(lead.status)}`}
                  >
                    {lead.status || "New"}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <select
                    disabled={updatingId === lead.id}
                    value={lead.status || "New"}
                    onChange={(e) => updateStatus(lead.id, e.target.value)}
                    className="bg-black border border-white/20 rounded-lg px-2 py-1 text-xs outline-none focus:border-[#F26522] cursor-pointer disabled:opacity-50"
                  >
                    <option value="New">Mark as New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Qualified">Qualified</option>
                    <option value="Closed">Closed</option>
                  </select>
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
    </>
  );
}
