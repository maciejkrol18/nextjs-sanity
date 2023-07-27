import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk"; // Required for viewing the studio
import article from "@/sanity/schemas/article-schema"; // Schema for the article
import contact from "@/sanity/schemas/contact-schema";
import partner from "@/sanity/schemas/partner-schema";

const config = defineConfig({
  projectId: "ul3481p8",
  dataset: "production",
  title: "Fotowoltaika Śliwson",
  apiVersion: "2023-07-27",
  // The URL for the admin panel
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: [article, contact, partner] },
});

export default config;
