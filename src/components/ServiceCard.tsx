import { ServiceCardProps } from "../interfaces";

export const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <>
      <div
        key={title}
        className="flex flex-col items-center rounded-md bg-white py-8 px-4 mx-2 max-w-96 h-52 shadow-lg dark:shadow-md dark:shadow-slate-200"
      >
        <div className="flex justify-center items-start min-h-12 w-full">
          {icon}
        </div>

        <h3 className="mb-4 text-lg font-semibold text-center">{title}</h3>

        <div className="h-[cal(h-[208px] - h-[80px])]">
          <p className="text-center">{description} </p>
        </div>
      </div>
    </>
  );
};
