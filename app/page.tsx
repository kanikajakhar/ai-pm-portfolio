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
      <footer className="py-8 px-6 text-center text-sm text-zinc-400 border-t border-zinc-200 dark:border-zinc-800">
        &copy; {new Date().getFullYear()} Kanika Jakhar. Built with Next.js &amp;
        Tailwind CSS.
      </footer>
    </>
  );
}
