import { ServiceCard } from "../components";
import { services } from "../data/data";

export const Services = () => {
  return (
    <section id="services" className="container flex flex-col mx-auto mb-28">
      <h2 className="font-bold text-4xl text-center mb-8 dark:text-white">
        Servicios
      </h2>
      <div className="flex items-center justify-center gap-8 flex-wrap">
        {services.map((service) => {
          return <ServiceCard key={service.title} {...service} />;
        })}
      </div>
    </section>
  );
};
