export interface ContactForm {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export interface ContactFormValidations {
  name: [(value: string) => boolean, string];
  phone?: [(value: string) => boolean, string];
  email: [(value: string) => boolean, string];
  message: [(value: string) => boolean, string];
}