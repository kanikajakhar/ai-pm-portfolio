import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Philosophy from "./components/Philosophy";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Yale from "./components/Yale";
import Writing from "./components/Writing";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Yale />
        <Writing />
        <Contact />
      </main>
      <footer className="py-8 px-6 bg-black text-center">
        <p className="text-xs text-white/20 italic mb-1">
          My code lives on the moon.
        </p>
        <p className="text-xs text-white/15">
          &copy; {new Date().getFullYear()} Kanika Jakhar
        </p>
      </footer>
    </>
  );
}
