import { PortableTextBlock } from "sanity";

export type Article = {
  _id: string;
  _createdAt: Date;
  _updatedAt: Date;
  name: string;
  slug: string;
  image: string;
  url: string;
  content: PortableTextBlock[];
};
