// import React from "react";

// export default function DashboardOverview() {
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
//     <div className="p-6 space-y-6">
//       {/* Page Header */}
//       <div>
//         <h1 className="text-3xl font-bold text-gray-800">Blog Dashboard</h1>
//         <p className="text-gray-500">
//           Manage your blog posts, drafts, and analytics.
//         </p>
//       </div>

//       {/* Stats */}
//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//         {stats.map((stat) => (
//           <div
//             key={stat.id}
//             className="bg-white shadow rounded-xl p-6 hover:shadow-md transition"
//           >
//             <p className="text-gray-500 text-sm">{stat.title}</p>
//             <h2 className="text-2xl font-bold mt-2">{stat.value}</h2>
//           </div>
//         ))}
//       </div>

//       {/* Quick Action */}
//       <div className="bg-white shadow rounded-xl p-6 flex items-center justify-between">
//         <div>
//           <h2 className="text-xl font-semibold">Create a New Post</h2>
//           <p className="text-gray-500 text-sm">
//             Share your ideas with your readers.
//           </p>
//         </div>

//         <button className="px-5 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
//           Write Post
//         </button>
//       </div>

//       {/* Recent Posts */}
//       <div className="bg-white shadow rounded-xl p-6">
//         <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>

//         <div className="overflow-x-auto">
//           <table className="w-full text-left">
//             <thead>
//               <tr className="border-b text-gray-600">
//                 <th className="py-3">Title</th>
//                 <th>Status</th>
//                 <th>Date</th>
//               </tr>
//             </thead>

//             <tbody>
//               {recentPosts.map((post) => (
//                 <tr key={post.id} className="border-b">
//                   <td className="py-3">{post.title}</td>
//                   <td>
//                     <span
//                       className={`px-3 py-1 text-sm rounded-full ${
//                         post.status === "Published"
//                           ? "bg-green-100 text-green-600"
//                           : "bg-yellow-100 text-yellow-600"
//                       }`}
//                     >
//                       {post.status}
//                     </span>
//                   </td>
//                   <td>{post.date}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react'

export default function DashboardOverview() {
  return (
    <div>DashboardOverview</div>
  )
}
