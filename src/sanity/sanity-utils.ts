import { createClient, groq } from "next-sanity";

const getArticles = async () => {
  const client = createClient({
    projectId: "ul3481p8",
    dataset: "production",
    apiVersion: "2023-07-24",
  });

  return client.fetch(
    groq`*[_type == "article"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
  );
};

export default getArticles;
