import React from "react";

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <div className="container mx-auto py-12">BlogDetails for blog with id {id}</div>;
}
