import BlogForm from "@/app/component/admin/blog/Blogform";

export const metadata = { title: "New Blog Post | Marketrixa Admin" };

export default function NewBlogPage() {
  return <BlogForm mode="new" />;
}
