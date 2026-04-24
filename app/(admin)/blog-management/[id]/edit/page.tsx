// app/(admin)/blog-management/[id]/edit/page.tsx
import BlogForm from "@/app/component/admin/blog/Blogform";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditBlogPage({ params }: PageProps) {
  const { id } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/blogs/${id}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) notFound();

  const { blog, faqGroup } = await res.json();

  return (
    <BlogForm
      mode="edit"
      initialData={blog}
      initialFAQGroup={faqGroup ?? null}
    />
  );
}
