export const Hero = () => {
  return (
    <section id="hero" className="mb-28 mt-10">
      <div
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("/img/background.jpg")',
        }}
        className="flex items-center md:items-end justify-start container h-screen mx-auto bg-no-repeat bg-cover bg-center lg:rounded-xl md:h-[700px]"
      >
        <div className="flex flex-col justify-center items-center mx-auto h-[400px] w-[1300px] px-3 md:items-start">
          <h2 className="text-white text-3xl lg:text-5xl mb-6 font-extrabold text-center">
            Tu Salud Bucal en Buenas Manos
          </h2>
          <p className="text-white text-wrap md:text-start text-center mb-12 lg:text-2xl ">
            Como higienista dental especializado, me enfoco en ofrecer la mejor
            limpieza bucal, asegurando tu salud dental y tu sonrisa radiante.
          </p>
          <div>
            <button className=" bg-[#359EFF] text-white text-xl font-bold py-6 px-3 rounded-lg hover:bg-[#3c8edc]">
              Reserva tu cita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
