import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk"; // Required for viewing the studio
import article from "@/sanity/schemas/article-schema"; // Schema for the article

const config = defineConfig({
  projectId: "ul3481p8",
  dataset: "production",
  title: "A website for testing Sanity",
  apiVersion: "2023-07-24",
  // The URL for the admin panel
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: [article] },
});

export default config;
