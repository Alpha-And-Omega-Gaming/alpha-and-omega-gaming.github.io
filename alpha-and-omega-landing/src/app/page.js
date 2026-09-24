"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";

import starfield from "../../public/starfield.png";
import logo from "../../public/logo.png";

export default function Home() {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [driftOffset, setDriftOffset] = useState(0);

  useEffect(() => {
    let frameId = null;

    const animate = (time) => {
      setScrollOffset(window.scrollY * 0.18);
      setDriftOffset(((time * 0.015) % 320) - 160);
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <main className="">
      <div className="fixed inset-0">
        <div className="fixed inset-0 overflow-hidden">
          <div
            className="absolute inset-[-10%] opacity-80"
            style={{
              backgroundImage: `url(${starfield.src})`,
              backgroundRepeat: "repeat",
              backgroundSize: "320px 320px",
              transform: `translate(${driftOffset}px, ${scrollOffset}px) scale(1.08)`,
              willChange: "transform",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={logo}
              alt="AOG logo"
              className="h-[90vh] w-auto object-contain opacity-70"
              priority
            />
          </div>
          <div className="darken-pulse absolute inset-0 bg-radial from-[#000000aa] to-black" />
        </div>
        <h2 className="absolute bottom-10 w-full text-center text-white text-4xl opacity-80">
          Passionate developers building exceptional experiences.
        </h2>
      </div>
      <Navbar />
      <div className="relative w-screen h-screen" />
      <div className="relative w-screen min-h-screen bg-[linear-gradient(to_bottom,transparent_0%,#000_8rem)] flex flex-col items-center">
        <div className="flex flex-col w-[60%] mt-80">
          <h1 className="text-4xl text-white mb-4">About Us</h1>
          <p className="text-xl text-gray-300">
            We are a team of developers building professional apps and games.
            Our team consists of four skilled developers with diverse expertise:
          </p>
          <ul className="list-disc text-xl text-gray-300 ml-10 mt-5">
            <li>Devin Arena</li>
            <li>Tyree Galtney</li>
            <li>John Manahan</li>
            <li>Dustin Rios</li>
          </ul>
          <p className="text-xl text-gray-300 mt-5 mb-5">
            Together, we strive to deliver high-quality software solutions that exceed expectations. You can view some of our work below.
          </p>
          <a href="/apps" className="group mt-3 flex w-fit min-w-64 items-center justify-between gap-10 border border-white/50 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-1 hover:border-red-500 hover:bg-red-500 hover:text-black hover:shadow-[0_12px_30px_rgba(249,115,22,0.2)]">
            View Our Apps
            <span aria-hidden="true" className="text-lg transition-transform duration-300 group-hover:translate-x-1">-&gt;</span>
          </a>
          <a href="/games" className="group mt-3 flex w-fit min-w-64 items-center justify-between gap-10 border border-white/50 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-1 hover:border-orange-500 hover:bg-orange-500 hover:text-black hover:shadow-[0_12px_30px_rgba(249,115,22,0.2)]">
            View Our Games
            <span aria-hidden="true" className="text-lg transition-transform duration-300 group-hover:translate-x-1">-&gt;</span>
          </a>
        </div>
      </div>
    </main>
  );
}
