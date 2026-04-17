import { BlogStatus } from "@/app/types/blog";

const config: Record<
  BlogStatus,
  { label: string; color: string; dot: string }
> = {
  published: {
    label: "Published",
    color: "bg-green-500/10 text-green-400 border-green-500/20",
    dot: "bg-green-400",
  },
  draft: {
    label: "Draft",
    color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    dot: "bg-yellow-400",
  },
  archived: {
    label: "Archived",
    color: "bg-gray-500/10 text-gray-400 border-gray-500/20",
    dot: "bg-gray-400",
  },
};

export default function StatusBadge({ status }: { status: BlogStatus }) {
  const { label, color, dot } = config[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${color}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
      {label}
    </span>
  );
}
