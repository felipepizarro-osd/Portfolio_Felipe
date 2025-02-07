import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Timeline from "./components/timeline";
import Jobtimeline from "./components/jobstimeline" ;
import Projects from "./components/projects";
import Contact from "./components/contact";
export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
        <Hero />
        <Projects />
        <Timeline />
        <Jobtimeline />
        <Contact />
      </div>
    </main>
  );
}
