import { Article } from "@/types/article";
import { createClient, groq } from "next-sanity";

const getArticle = async (slug: string): Promise<Article> => {
  const client = createClient({
    projectId: "ul3481p8",
    dataset: "production",
    apiVersion: "2023-07-24",
  });

  return client.fetch(
    groq`*[_type == "article" && slug.current == $slug][0]{
      _id,
      _createdAt,
      _updatedAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { slug },
  );
};

export default getArticle;
