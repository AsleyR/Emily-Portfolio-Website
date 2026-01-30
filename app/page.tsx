import Image from "next/image";
import Hero from "./(components)/hero/Hero";
import DigitalMarketing from "./(components)/portfolio/digital-marketing/DigitalMarketing";
import Portfolio from "./(components)/portfolio/Portfolio";
import AboutMe from "./(components)/about-me/About";
import ContactMe from "./(components)/ContactMe";

export default function Home() {
  return (
    <div className="">
      <main>
        <Hero />
        <div className="bg-[#232323] w-full h-10"></div>
        {/* <div className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#14213D" fillOpacity="1" d="M0,96L120,112C240,128,480,160,720,170.7C960,181,1200,171,1320,165.3L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
        </div> */}
        <Portfolio />
        <div className="bg-[#FCA311] w-full h-20"></div>
        <AboutMe />
        <div className="bg-[#14213D] w-full h-20"></div>
        <div className="bg-[#007ea7] w-full h-20"></div>
      </main>
    </div>
  );
}
