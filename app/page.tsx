import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Writing from "./components/Writing";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Writing />
        <Contact />
      </main>
      <footer className="py-10 px-6 border-t border-foreground/5">
        <div className="max-w-[980px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-secondary/60">
            &copy; {new Date().getFullYear()} Kanika Jakhar
          </p>
          <p className="text-xs text-secondary/40 italic">
            My code lives on the moon.
          </p>
        </div>
      </footer>
    </>
  );
}
