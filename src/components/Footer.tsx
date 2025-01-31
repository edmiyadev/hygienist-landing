import { FacebookIcon } from "./icons";
import { InstagramIcon } from "./icons";
import { TwitterIcon } from "./icons";

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black dark:text-white text-black pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <p>Teléfono: (123) 456-7890</p>
            <p>Email: info@draanaperez.com</p>
            <p>Dirección: Calle Principal 123, Ciudad</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Horario</h3>
            <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
            <p>Sábados: 9:00 AM - 2:00 PM</p>
            <p>Domingos: Cerrado</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-200">
                <FacebookIcon />
              </a>
              <a href="#" className="hover:text-blue-200">
                <InstagramIcon />
              </a>
              <a href="#" className="hover:text-blue-200">
                <TwitterIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8 mt-8 text-center bg-white dark:bg-black dark:text-white text-black w-full">
        <p>
          &copy; 2025 Katherine Lora - Higienista Dental. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};
