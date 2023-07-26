const article = {
  name: "article",
  title: "Artykuły",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Tytuł",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug (kliknij 'Generate')",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "image",
      title: "Obrazek",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Opis obrazka",
          type: "string",
        },
      ],
    },
    {
      name: "content",
      title: "Treść",
      type: "array",
      // Sanity's way of doing 'rich text' (markdown in the studio)
      of: [{ type: "block" }],
    },
  ],
};

export default article;
