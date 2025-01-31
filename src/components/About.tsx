import { about } from "../data/data";

export const About = () => {
  return (
    <section id="about" className="mb-28">
      <div className="container rounded-lg mx-auto flex flex-col lg:flex-row justify-center items-center py-20 bg-white mb-28">
        <div className="flex w-1/2 justify-center">
          <img
            src={about.image}
            alt={`Foto de ${about.name}`}
            className="rounded-full"
            width={"400px"}
          />
        </div>
        <div className="w-1/2">
          <h2 className="text-4xl font-bold mb-8">Sobre Mi</h2>
          <p className="text-lg">{about.description}</p>
        </div>
      </div>
    </section>
  );
};
