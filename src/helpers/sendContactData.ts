import { ContactInfo } from "../interfaces/ContactInfo";

const API_URL = `${import.meta.env.VITE_API_URL}/send-email`;

export const sendContactData = async (form: ContactInfo) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      Accept: "application/json",
    },
    body: JSON.stringify(form),
  });
  console.log(res);
};
