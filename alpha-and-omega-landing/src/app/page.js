import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import ProfileCard from "@/components/profile-card";
import Image from "next/image";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <Navbar />

      <div className="relative h-screen w-screen" />

      <div className="relative flex min-h-screen w-screen flex-col items-center bg-[linear-gradient(to_bottom,transparent_0%,#000_8rem)] pb-40">
        <div className="mt-80 flex w-[60%] flex-col">
          <h1 className="mb-4 text-4xl text-white">About Us</h1>
          <p className="text-xl text-gray-300">
            We are a team of developers building professional apps and games.
            Our team consists of four skilled developers with diverse expertise:
          </p>
          <ul className="ml-10 mt-5 text-xl text-gray-300">
            <ProfileCard name="Devin Arena" bio="Devin is a software engineer who specializes in backend development and AI tooling. He gained professional experience with the development of REST APIs while working for payment processing companies." />
            <ProfileCard name="Tyree Galtney" bio="Bio coming soon..." />
            <ProfileCard name="John Manahan" bio="Bio coming soon..." />
            <ProfileCard name="Dustin Rios" bio="Bio coming soon..." />
          </ul>
          <p className="mb-5 mt-5 text-xl text-gray-300">
            Together, we strive to deliver high-quality software solutions that
            exceed expectations. You can view some of our work below.
          </p>
          <a href="/apps" className="group mt-3 flex w-fit min-w-64 items-center justify-between gap-10 border border-white/50 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-200 hover:text-black hover:shadow-[0_12px_30px_rgba(125,200,255,0.2)]">
            View Our Apps
            <span aria-hidden="true" className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              -&gt;
            </span>
          </a>
          <a href="/games" className="group mt-3 flex w-fit min-w-64 items-center justify-between gap-10 border border-white/50 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500 hover:text-black hover:shadow-[0_12px_30px_rgba(50,150,255,0.2)]">
            View Our Games
            <span aria-hidden="true" className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              -&gt;
            </span>
          </a>
        </div>
      </div>
    </main>
  );
}
