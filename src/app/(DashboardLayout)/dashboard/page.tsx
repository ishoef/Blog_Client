// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";

// export default function Dashboard() {
//   const stats = [
//     { id: 1, title: "Total Posts", value: 42 },
//     { id: 2, title: "Draft Posts", value: 6 },
//     { id: 3, title: "Total Views", value: "12.4K" },
//     { id: 4, title: "Comments", value: 128 },
//   ];

//   const recentPosts = [
//     {
//       id: 1,
//       title: "Understanding React Hooks",
//       status: "Published",
//       date: "12 Mar 2026",
//     },
//     {
//       id: 2,
//       title: "Next.js SEO Best Practices",
//       status: "Draft",
//       date: "10 Mar 2026",
//     },
//     {
//       id: 3,
//       title: "JavaScript Performance Tips",
//       status: "Published",
//       date: "08 Mar 2026",
//     },
//   ];

//   return (
//     <div className="space-y-8 p-6">
//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-semibold">Dashboard</h1>
//           <p className="text-muted-foreground">
//             Manage your blog posts and analytics
//           </p>
//         </div>

//         <Button>Write Post</Button>
//       </div>

//       {/* Stats */}
//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//         {stats.map((stat) => (
//           <Card key={stat.id}>
//             <CardHeader className="pb-2">
//               <CardTitle className="text-sm text-muted-foreground">
//                 {stat.title}
//               </CardTitle>
//             </CardHeader>

//             <CardContent>
//               <p className="text-3xl font-bold">{stat.value}</p>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       {/* Quick Action */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Create a New Post</CardTitle>
//         </CardHeader>

//         <CardContent className="flex items-center justify-between">
//           <p className="text-muted-foreground">
//             Share your ideas and publish new articles.
//           </p>

//           <Button>Write Post</Button>
//         </CardContent>
//       </Card>

//       {/* Recent Posts */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Recent Posts</CardTitle>
//         </CardHeader>

//         <CardContent>
//           <div className="overflow-x-auto">
//             <table className="w-full text-sm">
//               <thead className="border-b">
//                 <tr className="text-muted-foreground">
//                   <th className="py-3 text-left">Title</th>
//                   <th className="text-left">Status</th>
//                   <th className="text-left">Date</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {recentPosts.map((post) => (
//                   <tr key={post.id} className="border-b">
//                     <td className="py-3 font-medium">{post.title}</td>

//                     <td>
//                       <Badge
//                         variant={
//                           post.status === "Published" ? "default" : "secondary"
//                         }
//                       >
//                         {post.status}
//                       </Badge>
//                     </td>

//                     <td className="text-muted-foreground">{post.date}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

import React from 'react'

export default function Dashboard() {
  return (
    <div>Dashboard</div>
  )
}
