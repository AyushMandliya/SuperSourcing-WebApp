import React from "react";
import Hero from "../components/Hero";
import Navbar from "./Navbar";
import Card from "../components/Card";
import Problem from "@/components/Problem";
import Invester from "@/components/Invester";
import Marquee from "react-fast-marquee";
import MyCarousel from "@/components/MyCarousel";
import Founder from "@/components/Founders";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Card />
      <Problem />
      <Invester />

      <Marquee>
        <Founder />
      </Marquee>

      <Marquee>
        <MyCarousel />
      </Marquee>
    </>
  );
};

export default Home;
