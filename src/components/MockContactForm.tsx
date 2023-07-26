"use client";

import { ContactForm, ContactSchema } from "@/models/Contact";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

const MockContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit: SubmitHandler<ContactForm> = (data) => {
    alert(`
      Dane które wprowadziłeś\n
      -----------------------\n
      Imię i nazwisko: ${data.name}\n
      Numer telefonu: ${data.phone}\n
      Adres email: ${data.email}\n
      Wiadomość: ${data.message ? data.message : "<brak>"}
    `);
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
