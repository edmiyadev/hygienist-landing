import { Service } from "../interfaces/Service";

export const ServiceCard = ({ services }: { services: Service[] }) => {
  return (
    <>
      {services.map((service) => {
        return (
          <div
            key={service.title}
            className="flex flex-col items-center rounded-md bg-white py-8 px-4 mx-2 max-w-96 h-52 shadow-lg dark:shadow-md dark:shadow-slate-200"
          >
            <div className="flex justify-center items-start min-h-12 w-full">{service.icon}</div>

            <h3 className="mb-4 text-lg font-semibold text-center">{service.title}</h3>

            <div className="h-[cal(h-[208px] - h-[80px])]">
              <p className="text-center">{service.description} </p>
            </div>
          </div>
        );
      })}
    </>
  );
};
