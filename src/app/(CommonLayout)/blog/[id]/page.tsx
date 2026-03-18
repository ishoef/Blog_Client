import { blogService } from "@/services/blog.service";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import ReactMarkdown from "react-markdown";
import { BlogPost } from "@/types";

export async function generateStaticParams() {
  const { data } = await blogService.getBlogPosts();
    return data.map((blog: BlogPost) => ({ id: blog.id }))
        // .splice(0, 2);
}

export default async function BlogDetails({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const { data: blog } = await blogService.getBlogById(id);

  if (!blog) return notFound();

  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      {/* Thumbnail */}
      {blog.thumbnail && (
        <div className="relative w-full h-100 mb-10 rounded-2xl overflow-hidden shadow">
          <img
            src={blog.thumbnail}
            alt={blog.title}
            // fill
            className="object-cover"
            // priority
          />
        </div>
      )}

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
        {blog.title}
      </h1>

      {/* Meta */}
      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
        <span>👤 {blog.authorId}</span>
        <span>•</span>
        <span>👁 {blog.views} views</span>
        <span>•</span>
        <span>💬 {blog._count?.comments || 0}</span>
        <span>•</span>
        <span>📅 {new Date(blog.createdAt).toLocaleDateString()}</span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {blog.tags.map((tag: string) => (
          <Badge key={tag} variant="secondary">
            #{tag}
          </Badge>
        ))}
      </div>

      <Separator className="mb-8" />

      {/* Content */}
      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <ReactMarkdown>{blog.content}</ReactMarkdown>
      </article>
    </div>
  );
}
