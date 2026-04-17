import { notFound } from "next/navigation";
import { getBlogById } from "@/lib/blog-store";
import BlogForm from "@/app/component/admin/blog/Blogform";

export const metadata = { title: "Edit Blog Post | Marketrixa Admin" };

export default function EditBlogPage({ params }: { params: { id: string } }) {
  const blog = getBlogById(params.id);
  if (!blog) notFound();
  return <BlogForm mode="edit" initialData={blog} />;
}
