import { ContactForm } from "./ContactForm";

export const Contact = () => {
  return (
    <section id="contact" className="mb-28">
      <div className="flex flex-row container mx-auto">
        <div className="hidden md:flex text-white items-center justify-center w-1/2 bg-[#359EFF] rounded-s-lg">
          <div className="flex flex-col w-96">
            <h3 className="font-bold text-3xl text-center pb-6">
              Necesitas asistencia?
            </h3>
            <p className="text-xl text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              doloribus similique nesciunt voluptatum itaque dolores.
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};
