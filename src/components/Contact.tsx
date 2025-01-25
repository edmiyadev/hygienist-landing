import { ContactForm } from "./ContactForm";

export const Contact = () => {
  return (
    <section id="contact" className="mb-28">
      <h2 className="font-bold text-4xl text-center mb-8 dark:text-white">
        Contacto
      </h2>
      <div className="flex flex-row container mx-auto">
        <img src="./img/contact.webp" alt="" className="hidden lg:flex w-1/2" />
        <ContactForm />
      </div>
    </section>
  );
};
