export interface BlogPost {
  id: string;
  title: string;
  content: string;
  thumbnail: string | null;
  isFeatured: boolean;
  status: "PUBLISHED" | "DRAFT" | "ARCHIVED";
  tags: string[];
  views: number;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
  _count: {
    comments: number;
  };
}
