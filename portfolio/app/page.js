import Image from 'next/image'
import Navbar from '../components/Navbar';
import Starfield from "../components/Starfield";
import Hero from "../components/Hero";
import About from "../components/About";
import Education from '@/components/Education';

export default function Home() {
  return (
    <>
      <Starfield />
      <div id="home">
        <Navbar />
      </div>
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="education">
        <Education />
      </div>
    </>
  )
}
