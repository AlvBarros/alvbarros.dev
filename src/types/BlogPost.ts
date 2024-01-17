type BlogPost = {
  id: string;
  title: string;
  description: string;
  publishDate: Date;
  coverImage: string;
  tags: string[];
  author: string;
  readingTimeMinutes: number;
  postUrl: string;
};

export default BlogPost;
