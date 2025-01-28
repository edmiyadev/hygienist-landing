export const Hero = () => {
  return (
    <section id="hero" className="mb-28 mt-10">
      <div className="container mx-auto bg-[url('/img/background.jpg')] bg-no-repeat bg-cover h-screen md:h-[700px] bg-center">
        <div className="backdrop-blur-md h-screen md:h-[700px] flex justify-center items-center">
          <div className="container px-3 mx-auto justify-center items-center flex flex-col h-[400px]  md:items-start">
            <h2 className="text-3xl md:text-5xl mb-4 font-extrabold text-center">
              Tu Salud Bucal en Buenas Manos
            </h2>
            <p className="lg:text-xl text-wrap text-center mb-12 ">
              Como higienista dental especializado, me enfoco en ofrecer la
              mejor limpieza bucal, asegurando tu salud dental y tu sonrisa
              radiante.
            </p>
            <div>
              <button className="bg-blue-700 text-white text-lg font-bold py-4 px-2 rounded-md hover:bg-blue-800">
                Reserva tu cita ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
