import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <Card className="max-w-md w-full text-center shadow-lg">
        <CardContent className="py-10 space-y-6">
          <h1 className="text-6xl font-bold">404</h1>

          <h2 className="text-xl font-semibold">Page not found</h2>

          <p className="text-sm text-muted-foreground">
            Sorry, we couldn’t find the page you’re looking for.
          </p>

          <div className="flex justify-center gap-3">
            <Button asChild>
              <Link href="/">Go Home</Link>
            </Button>

            <Button variant="outline" asChild>
              <Link href="/blog">Browse Blogs</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
