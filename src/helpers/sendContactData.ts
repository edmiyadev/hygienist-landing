const API_URL = "http://localhost:3002/send-email";

export const sendContactData = async (form: {name: string, phone: string, email: string, message: string}) => {
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
