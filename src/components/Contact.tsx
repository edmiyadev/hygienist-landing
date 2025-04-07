import { ContactForm } from "./";

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
              Contáctame para agendar una cita, resolver dudas sobre tratamientos
              o recibir consejos personalizados para el cuidado de tu salud bucal.
              Estoy aquí para ayudarte.
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};
