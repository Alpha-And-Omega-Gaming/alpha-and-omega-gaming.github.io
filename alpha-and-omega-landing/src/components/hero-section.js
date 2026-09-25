import Image from "next/image";
import logo from "../../public/logo.png";
import StarfieldBackground from "@/components/starfield-background";

export default function HeroSection() {
    return (
        <div className="fixed inset-0">
            <StarfieldBackground />

            <div className="absolute inset-0 flex items-center justify-center">
                <Image
                    src={logo}
                    alt="AOG logo"
                    className="h-[90vh] w-auto object-contain opacity-70"
                    priority
                />
            </div>

            <div className="absolute bottom-5 w-full flex justify-center items-center">
                <h2 className="typewriter text-5xl text-white text-center">
                    Scroll down to learn about us &#8631;
                </h2>
            </div>
        </div>
    );
}
