const contact = {
  name: "contact",
  title: "Lista kontaktów",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Imię i nazwisko",
      type: "string",
    },
    {
      name: "phone",
      title: "Numer telefonu",
      type: "string",
    },
    {
      name: "email",
      title: "Adres email",
      type: "string",
    },
    {
      name: "message",
      title: "Opcjonalna wiadomość",
      type: "string",
    },
  ],
};

export default contact;
