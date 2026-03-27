import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { env } from "@/env";
import { cookies } from "next/headers";
import { toast } from "sonner";

export default function CreateBlogPage() {
  const API_URL = env.API_URL;
  const createBlog = async (formData: FormData) => {
    "use server";

    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const tags = formData.get("tags") as string;

    const blogData = {
      title,
      content,
      tags: tags
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item !== ""),
    };

    const cookieStor = await cookies();
    const res = await fetch(`${API_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookieStor.toString(),
      },
      body: JSON.stringify(blogData),
    });

    console.log(res);
    // toast.success("Post Created");
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="">Create Blog </CardTitle>
        <CardDescription>You can write your blog here</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="blog-form" action={createBlog}>
          <FieldGroup>
            {/* Title */}
            <Field>
              <FieldLabel>Title</FieldLabel>
              <Input type="text" name="title" />
            </Field>

            {/* Content */}
            <Field>
              <FieldLabel htmlFor="content">Content</FieldLabel>
              <Textarea
                id="content"
                name="content"
                placeholder="Write your blog"
                required
              />
            </Field>

            {/* tags */}
            <Field>
              <FieldLabel htmlFor="tags">Tags</FieldLabel>
              <Input
                id="tags"
                type="text"
                name="tags"
                placeholder="nextjs, web"
                required
              />
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Button form="blog-form" type="submit" className="w-full">
          Create Blog
        </Button>
      </CardFooter>
    </Card>
  );
}
