export interface Author {
  name: string;
  image?: string;
  bio?: string;
}

export interface Category {
  title: string;
  description?: string;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  author?: Author;
  mainImage?: string;
  categories?: Category[];
  publishedAt: string;
  excerpt: string;
  body: any;
  readTime?: string;
}
