import { useState } from "react";
import { useForm } from "../hooks";
import { ToastContainer, toast } from "react-toastify";
import { sendContactData } from "../helpers/sendContactData";
import { ContactFormValidations, ContactForm as Contact } from "../interfaces";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

const formValidations: ContactFormValidations = {
  name: [
    (value: string) => value.length >= 3,
    "El nombre debe tener al menos 3 caracteres",
  ],
  phone: [
    (value: string) => value.length === 0 || !isNaN(Number(value)),
    "Introduzca un numero valido",
  ],
  email: [
    (value: string) => value.includes("@"),
    "Introduzca un correo valido",
  ],
  message: [
    (value: string) => value.length > 1,
    "El mensaje debe tener almenos 3 caracteres",
  ],
};

export const ContactForm = () => {
  const { formState, formValidation, isFormValid, onInputChange, resetForm } =
    useForm<Contact>(initialForm, formValidations);

  const [formSubmit, setFormSubmit] = useState(false);

  const { name, phone, email, message } = formState;
  const { nameValid, phoneValid, emailValid, messageValid } = formValidation;

  const notifySuccess = () => toast.success("Informacion enviada correctamente");
  const notifyError = () => toast.error("Error al enviar la informacion");

  const onSubmitForm = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setFormSubmit(true);

    if (isFormValid) {
      sendContactData(formState)
        .then(() => {
          console.log("se envio correctamente");
          notifySuccess();
          resetForm();
          setFormSubmit(false);
        })
        .catch(() => {
          notifyError();
          console.log("error al enviar");
        });
    }
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
          className={`w-full bg-gray-100 text-md py-2 px-3 border-[1px] rounded-sm ${
            formSubmit && nameValid ? "border-red-500" : ""
          }`}
          placeholder="Nombre"
          required
          onChange={onInputChange}
          value={name}
        />
        <p className="text-red-500 mt-[-15px]">{formSubmit && nameValid}</p>

        <input
          type="tel"
          name="phone"
          id="phone"
          className={`w-full bg-gray-100 text-md py-2 px-3 border-[1px] rounded-sm ${
            formSubmit && phoneValid ? "border-red-500" : ""
          }`}
          placeholder="Telefono"
          required
          onChange={onInputChange}
          value={phone}
        />
        <p className="text-red-500 mt-[-15px]">{formSubmit && phoneValid}</p>

        <input
          type="email"
          name="email"
          id="email"
          className={`w-full bg-gray-100 text-md py-2 px-3 border-[1px] rounded-sm ${
            formSubmit && emailValid ? "border-red-500" : ""
          }`}
          placeholder="Correo electronico"
          onChange={onInputChange}
          value={email}
        />
        <p className="text-red-500 mt-[-15px]">{formSubmit && emailValid}</p>

        <textarea
          id="message"
          name="message"
          className={`w-full bg-gray-100 text-md py-2 px-3 border-[1px] rounded-sm ${
            formSubmit && messageValid ? "border-red-500" : ""
          }`}
          placeholder="Mensaje ..."
          rows={4}
          onChange={onInputChange}
          value={message}
        ></textarea>
        <p className="text-red-500 mt-[-15px]">{formSubmit && messageValid}</p>

        <div className="flex justify-center">
          <button
            type="submit"
            onClick={onSubmitForm}
            className="text-white bg-[#359EFF] hover:bg-[#3c8edc] font-medium rounded-lg text-md lg:text-lg px-5 py-2.5 text-center w-48"
          >
            Enviar
          </button>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
};
