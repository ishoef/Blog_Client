"use client";

import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type BlogErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function BlogError({ error, reset }: BlogErrorProps) {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg">
        <div
          className={cn(
            "rounded-xl border bg-card text-card-foreground shadow-sm",
            "overflow-hidden",
          )}
        >
          {/* Header */}
          <div className="flex flex-col items-center gap-5 border-b bg-muted/40 px-6 py-10 sm:px-10">
            <div className="rounded-full bg-destructive/10 p-4">
              <AlertCircle className="h-10 w-10 text-destructive" />
            </div>

            <div className="space-y-2 text-center">
              <h2 className="text-2xl font-semibold tracking-tight">
                Something went wrong
              </h2>
              <p className="text-muted-foreground">
                We couldn’t load this blog post. Please try again or come back
                later.
              </p>
            </div>
          </div>

          {/* Error details (dev only) */}
          {process.env.NODE_ENV === "development" && error?.message && (
            <div className="border-t bg-muted/30 px-6 py-4 text-xs text-muted-foreground">
              <p className="font-mono break-all leading-relaxed">
                {error.message}
              </p>
              {error.digest && (
                <p className="mt-2 font-mono text-[0.68rem] opacity-70">
                  Digest: {error.digest}
                </p>
              )}
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col gap-3 px-6 py-6 sm:flex-row sm:justify-center sm:px-10">
            <Button
              onClick={() => reset()}
              variant="default"
              size="lg"
              className="min-w-40"
            >
              Try Again
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="min-w-40"
              asChild
            >
              <a href="/">Back to Home</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
