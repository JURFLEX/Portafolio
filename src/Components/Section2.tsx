import { TracingBeam } from "../Components/ui/tracing-beam";
import img1 from "../assets/portal2.png";
import img2 from "../assets/esolar2.png";
import { AnimatedCard } from "./ui/AnimatedCard";
export function Section2() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-14 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <p className="text-3xl font-extrabold mb-4">{item.title}</p>
            <p className="text-xl font-bold mb-4">{item.rol}</p>
            <p className="text-ls mb-4">{item.time}</p>

            <div className=" text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <div className="flex max-sm:flex-col justify-center px-4">
                  <AnimatedCard
                    title={item.titleCard}
                    description={item.descriptionCard}
                    image={item.image}
                    link={item.href1}
                  />
                  <AnimatedCard
                    title={item.titleCard2}
                    description={item.descriptionCard2}
                    image={item.image2}
                    link={item.href2}
                  />
                </div>
              )}
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>

              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Emcali Telecomunicaciones - Empresas Municipales de Cali",
    rol: "Desarrollador web",
    time: "Jul 2022 — Presente",
    description: (
      <>
        <p>
          Desarrollador frontend, Empresas Municipales de Cali E.I.C.E ESP-
          EMCALI. Desarrollé un proyecto de e-commerce que permitió a los
          ciudadanos de Cali, Jamundí, Yumbo, Puerto Tejada y Palmira adquirir
          los servicios del portafolio TIC de Emcali (internet, televisión,
          contenido, servicios de nube, servicios de voz, entre otros).
          Implementé módulos innovadores como la firma electrónica de contratos
          de servicios, campañas comerciales y el cambio de contraseña del
          Wi-Fi, todo a través del portal web portalservicios.emcali.net.co.{" "}<br/>
          <br className="mt-2" />
          <p className='text-lg font-bold'>Logros: </p> Como resultado de esta implementación, el 70% de las ventas de
          la compañía ahora se realizan a través de este medio, reduciendo los
          tiempos de instalación en un 100%.
        </p>
      </>
    ),

    badge:
      "Reactjs, Javascript, CSS, Bootstrap, Tailwind Css, Figma, Docker, Django).",

    image: img1,
    titleCard: "Portalservicios(e-commerce)",
    href1: "https://portalservicios.emcali.net.co/",
    descriptionCard:
      "Portal de servicios y ventas de servicios de fibra optica, voz y television",

    image2: img2,
    titleCard2: "Esolar",
    href2: "https://esolar2.emcali.net.co/",
    descriptionCard2:
      "Plataforma de monitoreo y gestión de soluciones solares fotovoltaicas, implementada para la gerencia de energía para el proyecto con el ministerio de minas y energía, junto con la empresa fenoge.",
  },

  {
    title:
      "Montajes y Montacargas MAFRE S.A.S, Soporte y administración de sistemas de TI",
    rol: "Soporte y manteniento de sistemas web",
    time: "Dic 2019 — Dic 2021",
    description: (
      <>
        <p>
          Soporte y administración de sistemas de TI, Montajes y Montacargas
          MAFRE S.A.S Brindé soporte y mantenimiento a las plataformas de
          gestión y operación de la maquinaria industrial y repuestos de la
          compañía. Mi labor incluyó la administración eficiente de sistemas
          críticos y la resolución de problemas técnicos para asegurar el
          funcionamiento ininterrumpido de las operaciones.{" "} <br/>
          <br className="mt-2" />
          <p className='text-lg font-bold'>Logros: </p>
          Logré reducir los tiempos de inactividad del sistema en un 30% y
          
          aumentar la eficiencia operativa en un 25% mediante la implementación
          de mejores prácticas y la optimización de procesos.
        </p>
      </>
    ),
    badge: "Reactjs, AngularJs, Javascript, CSS, Bootstrap).",
  },
];
