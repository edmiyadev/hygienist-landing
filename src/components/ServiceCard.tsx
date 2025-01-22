import { Service } from "../interfaces/Service";

export const ServiceCard = ({ services }: { services: Service[] }) => {
  return (
    <>
      {services.map((service) => {
        return (
          <div
            key={service.title}
            className="flex flex-col justify-center items-center rounded-md gap-y-4 bg-white py-8 px-4 mx-2 max-w-96 h-52"
          >
            <div className="flex h-20">{service.icon}</div>
            <h3 className="text-lg font-semibold h-1/3">{service.title}</h3>
            <p className="text-center h-1/3">{service.description} </p>
          </div>
        );
      })}
    </>
  );
};
