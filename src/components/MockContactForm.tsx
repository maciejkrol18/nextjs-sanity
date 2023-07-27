"use client";

import { ContactForm, ContactSchema } from "@/models/Contact";
import { zodResolver } from "@hookform/resolvers/zod";
import { createClient } from "next-sanity";
import { SubmitHandler, useForm } from "react-hook-form";

const MockContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(ContactSchema),
  });

  const client = createClient({
    projectId: "ul3481p8",
    dataset: "production",
    apiVersion: "2023-07-24",
    token: process.env.NEXT_PUBLIC_CONTACT_FORM_API_KEY,
  });

  const onSubmit: SubmitHandler<ContactForm> = async (data) => {
    try {
      await client.create({
        _type: "contact",
        name: data.name,
        phone: data.phone,
        email: data.email,
        message: data.message,
      });
      reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name" className="form-label">
        Imię i nazwisko<sup className="text-red-500">*</sup>
        <input type="text" id="name" className="form-input" {...register("name")} />
      </label>

      <label htmlFor="phone" className="form-label">
        Numer telefonu<sup className="text-red-500">*</sup>
        <p className="form-error-msg">{errors.phone?.message}</p>
        <input type="text" id="phone" className="form-input" {...register("phone")} />
      </label>

      <label htmlFor="email" className="form-label">
        Adres email<sup className="text-red-500">*</sup>
        <p className="form-error-msg">{errors.email?.message}</p>
        <input type="text" id="email" className="form-input" {...register("email")} />
      </label>

      <label htmlFor="message" className="form-label">
        Wiadomość (opcjonalne)
        <textarea id="message" className="form-input" {...register("message")} />
      </label>

      <button
        type="submit"
        className="bg-blue-900 drop-shadow-md w-full rounded-md text-white py-2 px-4"
      >
        Wyślij
      </button>
    </form>
  );
};

export default MockContactForm;
