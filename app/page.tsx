import Hero from "./(components)/hero/Hero";
import Portfolio from "./(components)/portfolio/Portfolio";
import AboutMe from "./(components)/about-me/About";

export default function Home() {
  return (
    <div className="">
      <main>
        <Hero />
        <Portfolio />
        <AboutMe />
      </main>
    </div>
  );
}
