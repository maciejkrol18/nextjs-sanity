import { Partner } from "@/types/partner";
import { createClient, groq } from "next-sanity";

const getAllPartners = async (): Promise<Partner[]> => {
  const client = createClient({
    projectId: "ul3481p8",
    dataset: "production",
    apiVersion: "2023-07-24",
  });

  return client.fetch(
    groq`*[_type == "partner"]{
      name,
      "image": image.asset->url,
    }`,
  );
};

export default getAllPartners;
