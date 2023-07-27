const partner = {
  name: "partner",
  title: "Współpracujący partnerzy",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nazwa partnera",
      type: "string",
    },
    {
      name: "image",
      title: "Logo partnera",
      type: "image",
      options: { hotspot: true },
    },
  ],
};

export default partner;
