import { IconBrandWhatsapp } from "@tabler/icons-react";
import Black from "../assets/logoblack.svg";
import { FloatingDock } from "./ui/floating-dock";
import { Github, Linkedin } from "lucide-react";

export function Section3() {
  const links = [
    {
      title: "Aceternity UI",
      icon: (
        <img
          src={Black}
          className="w-10 h-6 text-black"
          width={20}
          height={20}
          alt="Aceternity Logo"
        />
      ),
      href: "#",
    },
    // {
    //   title: "Changelog",
    //   icon: (
    //     <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "#",
    // },

    {
      title: "Linkedin",
      icon: (
        <Linkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/juanfernandorodriguezfrontend/",
    },
    {
      title: "GitHub",
      icon: (
        <Github className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/JuanRodriguezdev2",
    },
    {
      title: "Whatsapp",
      icon: (
        <IconBrandWhatsapp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://wa.me/573116339001?text=Hola%2C%20me%20gusta%20tu%20perfil.",
    },
  ];

  return (
    <>
      <div className="h-20 md:h-48 relative w-full  flex  gap-4 items-center justify-center overflow-hidden rounded-md mt-6 ">
        <FloatingDock
          items={links}
        />
      </div>
    </>
  );
}
