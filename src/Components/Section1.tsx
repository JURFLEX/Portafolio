import { MacbookScroll } from "../Components/ui/macbook-scroll";

export function Section1() {
  return (
    <div
      id="about"
      className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full"
    >
      <MacbookScroll
        title={
          <span>
            <h3 className=" text-4xl ">Frontend Developer </h3>
            <h3 className=" mt-4 text-xl text-gray-600 text-body-4 px-24">
              Desarrollador de Front-end Senior con más de 5 años de experiencia
              en la industria del desarrollo de software. Especializado en el
              desarrollo de aplicaciones web con ReactJS, Angular y Node.js.
              Poseo habilidades avanzadas en JavaScript/Typescript y CSS,
              incluyendo Tailwind CSS. Manejo de bases de datos SQL (MySQL,
              Oracle) y NoSQL (MongoDB, Firebase). Tengo experiencia en la
              implementación y gestión de soluciones en la nube utilizando AWS y
              Azure. Creación de aplicaciones web basadas en arquitectura de
              Micro Frontend. Integración de API usando HttpClient para el
              consumo de servicios REST. Creación de diseños en Figma para la
              implementacion de Aplicaciones Web Responsive. Versionamiento de
              código con git. Metodología de trabajo Scrum.
              <br />
              <br />
              Historial demostrado en la optimización del rendimiento y la
              implementación de mejores prácticas para garantizar la calidad y
              eficiencia del producto final. Apasionado por la resolución óptima
              de problemas y comprometido con la generación de proyectos de alta
              calidad. Excelentes habilidades de trabajo en equipo y
              proactividad.
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

