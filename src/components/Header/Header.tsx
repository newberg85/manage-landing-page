
import Image from "next/image";
import Button from "@/components/ui/Button";
import Slider from "@/components/Slider/Slider"
import Footer from "@/components/Footer/Footer"

// images
import Ilustration from "public/assets/images/illustration-intro.svg";
import Simplifyd from "public/assets/images/bg-simplify-section-mobile.svg";
import Simplifym from "public/assets/images/bg-simplify-section-desktop.svg";
import Simplifyt from "public/assets/images/bg-tablet-pattern.svg";
import NavBar from "../Nav/Nav"
export default function Header() {
    return (
        <header className="relative w-screen">
            <div className="block sm:hidden">
            <Image 
                    className="absolute top-[-200px] right-[-90px] z-[-1] "
                    src={Simplifyt}
                    width={800}
                    height={4000}
                    alt="Image"
                    />
                    <Image 
                    className="absolute top-[550px] right-[-200px] z-[-1] sm:hidden"
                    src={Simplifyt}
                    width={400}
                    height={400}
                    alt="Image"
                    />
            </div>
            <NavBar />
        </header>
    )
}