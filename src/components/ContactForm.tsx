import { sendContactData } from "../helpers/sendContactData";
import { useForm } from "../hooks/useForm";

export const ContactForm = () => {
  const { formState, onInputChange, resetForm } = useForm({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const { name, phone, email, message } = formState;

  const onSubmitForm = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    sendContactData(formState)
      .then(() => {
        console.log("se envio correctamente");
      })
      .catch(() => {
        console.log("error al enviar");
      });

    resetForm();
  };

  return (
    <div className="w-full bg-white py-4 shadow-lg md:w-1/2 md:rounded-e-lg dark:shadow-md">
      <h2 className="font-bold text-4xl text-center mb-8 dark:text-black">
        Contacto
      </h2>
      <form className="flex flex-col gap-y-4 mx-auto w-full lg:w-[500px] px-4">
        <input
          type="text"
          name="name"
          id="name"
          className="w-full bg-gray-100 text-md py-2 px-3"
          placeholder="Nombre*"
          required
          onChange={onInputChange}
          value={name}
        />

        <input
          type="tel"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          name="phone"
          id="phone"
          className="w-full bg-gray-100 text-md py-2 px-3"
          placeholder="Telefono"
          required
          onChange={onInputChange}
          value={phone}
        />

        <input
          type="email"
          name="email"
          id="email"
          className="w-full bg-gray-100 text-md py-2 px-3"
          placeholder="Correo electronico"
          onChange={onInputChange}
          value={email}
        />

        <textarea
          id="message"
          name="message"
          className="w-full bg-gray-100 text-md py-2 px-3"
          placeholder="Mensaje ..."
          rows={4}
          onChange={onInputChange}
          value={message}
        ></textarea>

        <div className="flex justify-center">
          <button
            type="submit"
            onClick={onSubmitForm}
            className="text-white bg-[#359EFF] hover:bg-[#3c8edc] font-medium rounded-lg text-md lg:text-lg px-5 py-2.5 text-center w-48"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
