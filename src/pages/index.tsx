import Image from "next/image";

import HeroArea from "../components/Hero";
import About from "../components/About";
import YourData from "../components/YouData";
import Servcies from "../components/Services";
import AboutAi from "../components/AboutAi";
import News from "../components/News";
import Partners from "../components/Partners";
import LatestNewsDemo from "@/components/LatestNewsDemo";

function Home() {
  return (
    <>
      <HeroArea />
      <Partners />
      <About />
      <YourData />
      <Servcies />
      <AboutAi />
      <LatestNewsDemo />
      {/* <News /> */}
    </>
  );
}
export default Home;
