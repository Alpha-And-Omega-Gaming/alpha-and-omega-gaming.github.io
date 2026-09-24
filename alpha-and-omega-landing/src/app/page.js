import Image from "next/image";
import blackHole from "../../public/blackhole.png";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="">
      <div className="fixed inset-0">
        <div className="fixed inset-0">
          <Image
            src={blackHole}
            alt="A glowing black hole in deep space"
            fill
            priority
            sizes="100vw"
            className="absolute inset-0"
          />
          <div className="darken-pulse absolute inset-0 bg-radial from-[#000000aa] to-black" />
        </div>
        <div className="flex flex-col size-auto items-start opacity-80 ml-[10%] mt-[5%]">
          <div className="flex flex-row">
            <h1 className="text-9xl text-red-600">Alpha</h1>
            <h1 className="text-9xl text-white">&nbsp;and</h1>
          </div>
          <h1 className="text-9xl text-orange-500 ml-5">Omega</h1>
          <h1 className="text-9xl text-white ml-10">Gaming</h1>
        </div>
        <h2 className="absolute bottom-10 w-full text-center text-white text-5xl">
          Real developers building real value.
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
