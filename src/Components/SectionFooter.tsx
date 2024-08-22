import { Github, Linkedin } from "lucide-react";
import Logo from "../assets/logoblack.svg";
import { IconBrandWhatsapp } from "@tabler/icons-react";

export function SectionFooter() {
  return (
    <div className="relative">
    <footer className=" bg-white pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-CENTER text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            {/* <h4 className="text-3xl font-semibold text-gray-700">Información de Contacto</h4> */}
            <img src={Logo} alt="" />
            <div className="flex mt-6 lg:mb-0 mb-6">
              <a
                href="https://www.linkedin.com/in/juanfernandorodriguezfrontend/"
                className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <Linkedin className="h-full w-2/4 text-neutral-500 dark:text-neutral-300" />
              </a>
              <a
                href="https://github.com/JuanRodriguezdev2"
                className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <Github className="h-full w-2/4 text-neutral-500 dark:text-neutral-300" />
              </a>
              <a
                href="https://wa.me/573116339001?text=Hola%2C%20me%20gusta%20tu%20perfil."
                className="bg-white text-gray-800 shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <IconBrandWhatsapp className="h-full w-2/4 text-neutral-500 dark:text-neutral-300" />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-gray-300 hover:text-gray-600 font-semibold block pb-2 text-sm"
                      href="https://blog.creative-tim.com?ref=njs-profile"
                    >
                      Teléfonos
                    </a>
                    <span className="block uppercase text-gray-300 text-sm font-semibold mb-2">
                      3116339001
                    </span>
                  </li>
                  {/* <li>
                    <a
                      className="text-gray-300 hover:text-gray-600 font-semibold block pb-2 text-sm"
                      href="https://blog.creative-tim.com?ref=njs-profile"
                    >
                      Correo
                    </a>
                    <span className="block uppercase text-gray-300 text-sm font-semibold mb-2">
                    jfrodriguez.arcancode@gmail.com
                    </span>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-500 font-semibold py-1">
              © Desarrollado por Juan Fernando Rodriguez Caicedo{" "}
              <span id="get-current-year">2024</span>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}
