const article = {
  name: "article",
  title: "Articles",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alternative title",
          type: "string",
        },
      ],
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      // Sanity's way of doing 'rich text' (markdown in the studio)
      of: [{ type: "block" }],
    },
  ],
};

export default article;
