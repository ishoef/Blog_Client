import HistoryTable from "@/components/modules/dashboard/History/HistoryTable";
import PaginationControls from "@/components/ui/pagination-controls";
import { blogService } from "@/services/blog.service";
import React from "react";

export default async function HistoryPage({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  const { page } = await searchParams;
  console.log(page);
  const response = await blogService.getBlogPosts({ page });
  console.log(response);
  const posts = response.data?.data;

  // Pagination 
  const pagination = response.data?.pagination || {
    totalData: 0,
    page: 1,
    limit: 10,
    totalPages: 1,
  };

  console.log(pagination);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Blog Post History</h1>
      <HistoryTable posts={posts} />
      <PaginationControls meta={pagination} />
    </div>
  );
}
