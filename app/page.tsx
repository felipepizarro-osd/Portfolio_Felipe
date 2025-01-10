import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Timeline from "./components/timeline";
import Jobtimeline from "./components/jobstimeline" ;
export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
        <Hero />
        <Timeline />
        <Jobtimeline />
      </div>
    </main>
  );
}
