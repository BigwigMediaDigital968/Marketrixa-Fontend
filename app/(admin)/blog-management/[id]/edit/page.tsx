import BlogForm from "@/app/component/admin/blog/Blogform";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditBlogPage({ params }: PageProps) {
  const { id } = await params;

  let blog = null;
  let faqGroup = null;

  try {
    const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) notFound();

    const data = await res.json();
    blog = data.blog;
    faqGroup = data.faqGroup ?? null;
  } catch {
    notFound();
  }

  if (!blog) notFound();

  return <BlogForm mode="edit" initialData={blog} initialFAQGroup={faqGroup} />;
}
