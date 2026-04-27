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
      <footer className="relative py-12 px-6 border-t border-gray-200/80 dark:border-gray-800/80">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-amber-600 dark:text-amber-400 font-medium">
            <span>&#127769;</span>
            <span>My code lives on the moon</span>
            <span>&#127769;</span>
          </div>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Kanika Jakhar. Built with Next.js &amp; Tailwind CSS.
          </p>
        </div>
      </footer>
    </>
  );
}
