import React from "react";

export default function BlogLoading() {
  return (
    <div className="max-w-7xl mx-auto py-10 animate-pulse">
      {/* Title */}
      <div className="h-8 w-1/3 bg-gray-300 rounded mb-8"></div>

      {/* Blog Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="border rounded-xl p-4 space-y-4 shadow-sm">
            <div className="h-40 bg-gray-300 rounded-lg"></div>
            <div className="h-5 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            <div className="h-4 bg-gray-300 rounded w-1/3"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
