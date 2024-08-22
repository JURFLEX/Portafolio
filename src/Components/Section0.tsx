import Ava from "../assets/AvatarAndIcons.svg";
import { SparklesCore } from "../Components/ui/sparkles";
import { Section3 } from "./Section3";

export function Section0() {
  return (
    <>
      <div className="h-screen relative w-full bg-black flex  gap-4 items-center justify-center overflow-hidden rounded-md ">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={10}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <div className="flex max-sm:flex-col gap-4 justify-center items-center">

        <img src={Ava} className="w-1/3" />
        <div>
          <h1 className="md:text-5xl text-3xl lg:text-7xl font-bold text-center bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 relative z-20">
          Juan Fernando <br />
          Rodriguez Caicedo
          <p className="text-sm md:text-lg text-center text-gray-300 mt-4 ">
          Frontend Developer / UX Designer
        </p>
        </h1>
        <div>
          <Section3 />
        </div></div>
        </div>
        
        
        
      
      </div>
    </>
  );
}
