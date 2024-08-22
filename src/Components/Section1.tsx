import { MacbookScroll } from "../Components/ui/macbook-scroll";

export function Section1() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
      <MacbookScroll
        title={
          <span>
            <h3 className=" text-4xl ">Software devoloper </h3>
            <h3 className=" mt-4 text-xl text-gray-600 text-body-4 px-24">
              Desarrollador de software con más de 4 años de experiencia en la
              industria del desarrollo de software. Especializado en el
              desarrollo de aplicaciones web con ReactJS, Angular y Node.js.
              Posee habilidades avanzadas en JavaScript y CSS, incluyendo
              Tailwind CSS. Experto en el manejo de bases de datos SQL (MySQL,
              PostgreSQL) y NoSQL (MongoDB, Firebase). Tiene experiencia en la
              implementación y gestión de soluciones en la nube utilizando AWS y
              Azure. Excelentes relaciones interpersonales y habilidad para
              trabajar en equipo/individualmente.{" "}
            </h3>
          </span>
        }
        src={`/linear.webp`}
        showGradient={false}
      />
    </div>
  );
}
// Peerlist logo
