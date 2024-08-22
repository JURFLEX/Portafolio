
import { BackgroundGradientAnimation } from "../BackgroundGradientAnimation";
import { CardDash } from "./CardDash";
import Reactimg from "../../../assets/Skills/react.svg";
import jsimg from "../../../assets/Skills/js2.svg";
import tlimg from "../../../assets/Skills/tailwindcss.svg";
import Animg from "../../../assets/Skills/angular2.svg";
import Htimg from "../../../assets/Skills/html2.svg";
import Cssimg from "../../../assets/Skills/css2.svg";
import git from "../../../assets/Skills/git.svg";
import docker from "../../../assets/Skills/docker.svg";
import nodejs from "../../../assets/Skills/node.svg";
export function BackgroundGradientAnimationCP() {

  const Menu = [
    { name: "ReactJS", href: "/Plantasel", anima: Reactimg },
    { name: "Javascrpt", href: "/order", anima: jsimg },
    { name: "Tailwind", href: "/Ot", anima: tlimg },
    { name: "AngularJS", href: "/Usuarios", anima: Animg },
    { name: "Html", href: "/infrastructure", anima: Htimg },
    { name: "CCS", href: "/node", anima: Cssimg },
    { name: "NodeJS", href: "/infrastructure", anima: nodejs },
    { name: "Docker", href: "/node", anima: docker },
    { name: "Git", href: "/node", anima: git },
    // { name: "Creacion de viviendas", href: "/Users", anima: img1, perm: "view_Monitor" },
];

  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        
        <div
          className="grid  grid-cols-3 xl:grid-cols-3 w-full gap-1">
          {/* Mapeo del arreglo de opciones de menú filtrado y renderización de cada opción */}
          {Menu.map(({ name, href, anima }) => (
            <CardDash key={name} name={name} href={href} anima={anima} />
          ))}
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}