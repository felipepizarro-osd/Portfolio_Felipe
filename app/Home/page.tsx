import Hero from "./components/hero";
import Navbar from "./components/navbar";
//use the testimonial component when you have some testimonials to display and permission to display them
//import Testimonials from "./components/testimonials";
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
        <Jobtimeline />
        <Contact />
      </div>
    </main>
  );
}
