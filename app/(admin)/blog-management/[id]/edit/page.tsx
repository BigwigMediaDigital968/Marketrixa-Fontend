// import BlogForm from "@/app/component/admin/blog/Blogform";
// import { notFound } from "next/navigation";

// interface PageProps {
//   params: Promise<{ id: string }>;
// }

// export default async function EditBlogPage({ params }: PageProps) {
//   const { id } = await params;

//   let blog = null;
//   let faqGroup = null;

//   try {
//     const res = await fetch(`/api/blogs/${id}`, {
//       cache: "no-store",
//     });

//     if (!res.ok) notFound();

//     const data = await res.json();
//     blog = data.blog;
//     faqGroup = data.faqGroup ?? null;
//   } catch {
//     notFound();
//   }

//   if (!blog) notFound();

//   return <BlogForm mode="edit" initialData={blog} initialFAQGroup={faqGroup} />;
// }

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
    const baseUrl =
      process.env.NEXT_PUBLIC_APP_URL || process.env.NEXT_PUBLIC_SITE_URL;

    const res = await fetch(`${baseUrl}/api/blogs/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      notFound();
    }

    const data = await res.json();

    blog = data.blog;
    faqGroup = data.faqGroup ?? null;
  } catch (error) {
    console.error(error);
    notFound();
  }

  if (!blog) {
    notFound();
  }

  return <BlogForm mode="edit" initialData={blog} initialFAQGroup={faqGroup} />;
}
