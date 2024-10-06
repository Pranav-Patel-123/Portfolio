import type { NextPage } from "next";
import "slick-carousel/slick/slick.css";
import Head from "next/head";
import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import ScrollBtn from "../components/ScrollBtn";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Pranav Patel</title>
      </Head>

      <div className="font-bodyFont">
        <Banner />
        <AboutMe />
        <Skills />
        <Contact />
      </div>
      <ScrollBtn />
    </div>
  );
};

export default Home;
