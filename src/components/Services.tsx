import { Service } from "../interfaces/Service";
import { ServiceCard } from "../components";
import { BrushIcon, ShieldIcon, SparklesIcon } from "./icons";

const services: Service[] = [
  {
    icon: <SparklesIcon />,
    title: "Limpieza Dental",
    description: "Eliminación de placa y sarro para una sonrisa saludable.",
  },
  {
    icon: <BrushIcon />,
    title: "Blanqueamiento",
    description: "Tratamiento para aclarar el tono de tus dientes.",
  },
  {
    icon: <ShieldIcon />,
    title: "Prevención",
    description: "Consejos y cuidados para mantener una buena salud bucal.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="container flex flex-col mx-auto mb-28">
      <h2 className="font-bold text-4xl text-center mb-8">Servicios</h2>
      <div className="flex items-center justify-center gap-8 flex-wrap">
        <ServiceCard services={services} />
      </div>
    </section>
  );
};
