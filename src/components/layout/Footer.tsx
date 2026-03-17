import { Button } from "../ui/button";
import { Input } from "../ui/input";

import React from "react";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* BRAND */}
          <div>
            <h3 className="text-lg font-semibold">Modern Blog</h3>

            <p className="mt-4 text-sm text-muted-foreground">
              A modern blog sharing knowledge about web development, startups,
              technology and design.
            </p>

            <div className="flex gap-4 mt-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground">
                Twitter
              </a>
              <a href="#" className="hover:text-foreground">
                GitHub
              </a>
              <a href="#" className="hover:text-foreground">
                LinkedIn
              </a>
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="/" className="hover:text-foreground">
                  Home
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-foreground">
                  Blog
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-foreground">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-foreground">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Writing Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>

            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to get the latest articles and resources.
            </p>

            <div className="flex gap-2">
              <Input placeholder="Email address" />
              <Button>Join</Button>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Modern Blog. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground">
              Terms
            </a>
            <a href="#" className="hover:text-foreground">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
