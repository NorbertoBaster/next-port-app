
import Head from "next/head";
import Image from "next/image";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";



export default function Home() {
  return (
    <div>
      <Head>
        
        <title>Norbert Baster | Front-end Web Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/../public/assets/nb-logo-png-transparent.png" />
      </Head>
      <Navbar />
      <Main />
      <About/>
      <Skills/>
      <Projects/>
    </div>
  );
}