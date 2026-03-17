import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { userService } from "@/services/user.service";
import Footer from "@/components/layout/Footer";
import { blogService } from "@/services/blog.service";

export default async function HomePage() {
  // const { data } = await userService.getSession();
  // console.log(data);

  return (
    <main className="bg-background text-foreground">
      {/* HERO */}
      <section className="container mx-auto py-24 px-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          Discover Stories, Ideas & Inspiration
        </h1>

        <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
          Insights on technology, design, startups and modern development. Learn
          from experienced creators and engineers.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg">Start Reading</Button>
          <Button size="lg" variant="outline">
            Explore Topics
          </Button>
        </div>
      </section>

      {/* FEATURED ARTICLES */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold mb-10">Featured Articles</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="hover:shadow-lg transition">
              <CardHeader>
                <Badge className="w-fit mb-2">Technology</Badge>
                <CardTitle>The Future of AI in Web Development</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                Discover how AI is transforming developer productivity and
                enabling new types of web applications.
              </CardContent>

              <div className="p-4 pt-0">
                <Button variant="link" className="px-0">
                  Read More →
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* TRENDING POSTS */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold mb-8">Trending This Week</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <Card key={item}>
              <CardHeader>
                <CardTitle>
                  Why Developers Are Switching to Modern Fullstack Frameworks
                </CardTitle>
              </CardHeader>

              <CardContent className="flex justify-between items-center text-sm text-muted-foreground">
                <span>8 min read</span>
                <Badge variant="secondary">Trending</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold mb-8">Browse Categories</h2>

        <div className="flex flex-wrap gap-4">
          {[
            "Web Development",
            "JavaScript",
            "AI",
            "Design",
            "Startups",
            "Productivity",
            "Career",
            "DevOps",
          ].map((cat) => (
            <Badge
              key={cat}
              variant="secondary"
              className="text-sm px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition"
            >
              {cat}
            </Badge>
          ))}
        </div>
      </section>

      {/* LATEST POSTS */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold mb-10">Latest Posts</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card key={item} className="hover:shadow-md transition">
              <CardHeader>
                <CardTitle>Modern React Patterns You Should Know</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                Learn scalable patterns used in large React applications.
              </CardContent>

              <div className="p-4 pt-0">
                <Button variant="link" className="px-0">
                  Read Article →
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* FEATURED AUTHORS */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Featured Authors
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {["Alex", "Sarah", "Daniel"].map((name) => (
            <Card key={name} className="text-center">
              <CardHeader className="flex items-center flex-col">
                <Avatar className="h-16 w-16 mb-4">
                  <AvatarFallback>{name[0]}</AvatarFallback>
                </Avatar>

                <CardTitle>{name}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-sm">
                Writes about web development, architecture and modern JavaScript
                ecosystems.
              </CardContent>

              <div className="pb-6">
                <Button variant="outline">View Articles</Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* READING GUIDES */}
      <section className="container mx-auto py-16 px-6">
        <div className="bg-muted rounded-xl p-10">
          <h2 className="text-3xl font-semibold mb-4">
            Curated Reading Guides
          </h2>

          <p className="text-muted-foreground mb-6">
            Deep dive into curated article collections on specific topics.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Button variant="secondary">React Mastery</Button>
            <Button variant="secondary">Startup Playbook</Button>
            <Button variant="secondary">AI & ML Basics</Button>
            <Button variant="secondary">UI/UX Design</Button>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="container mx-auto py-16 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">
            Subscribe to our Newsletter
          </h2>

          <p className="mt-4 text-muted-foreground">
            Weekly curated articles, tutorials and tech insights.
          </p>

          <div className="flex gap-3 mt-6">
            <Input placeholder="Enter your email" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>

      {/* COMMUNITY CTA */}
      <section className="container mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold">Join Our Developer Community</h2>

        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Connect with developers, share knowledge and grow together.
        </p>

        <Button className="mt-6" size="lg">
          Join the Community
        </Button>
      </section>
    </main>
  );
}
