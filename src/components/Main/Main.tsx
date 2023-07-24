import Image from "next/image";
import Header from "../Header/Header";
import Button from "../ui/Button";
import Slider from "../Slider/Slider"

// images
import Ilustration from "public/assets/images/illustration-intro.svg";
import Simplifyd from "public/assets/images/bg-simplify-section-mobile.svg";
import Simplifym from "public/assets/images/bg-simplify-section-desktop.svg";
import Simplifyt from "public/assets/images/bg-tablet-pattern.svg";


export default function Main() {
    return (
        <>
            <Header />

            <div className="justify-between flex flex-col-reverse sm:flex-row w-full items-center overflow-x-hidden font-body">
                <div className="justify-center text-center sm:text-left w-full sm:w-1/2 flex flex-col gap-7">
                    <h1 className="text-5xl font-[700] text-dark-blue leading-tight sm:text-7xl">Bring everyone together to build better products.</h1>
                    <p className="w-full sm:w-1/2 text-silver">Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
                    <Button />
                </div>
                <div className="w-full sm:w-1/2 justify-center flex mt-8">
                    <Image 
                    className="absolute top-[-200px] right-[-90px] z-[-1] "
                    src={Simplifyt}
                    width={800}
                    height={4000}
                    alt="Image"
                    />
                    <Image 
                    src={Ilustration}
                    width={600}
                    height={600}
                    alt="Picture of the author"
                    />
                    <Image 
                    className="absolute top-[550px] right-[-200px] z-[-1] sm:hidden"
                    src={Simplifyt}
                    width={400}
                    height={400}
                    alt="Image"
                    />
                </div>
            </div>

            <div className="justify-between flex flex-col sm:flex-row w-full overflow-x-hidden font-body mt-28">
                <div className=" text-center sm:text-left w-full sm:w-1/2 flex flex-col gap-7">
                    <h1 className="text-5xl font-[700] text-dark-blue leading-tight sm:text-5xl w-full ">What’s different about Manage?</h1>
                    <p className="w-full sm:w-1/2 text-silver">Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams. </p>
                </div>
                <div className="w-full sm:w-1/2 flex flex-col gap-4">
                    <div className="flex mt-4 gap-1">
                        <div className="gap-4">
                            <span className="w-40 p-3 text-white rounded-2xl bg-orange hover:shadow-lg">01</span>
                        </div>
                        <div>
                            <p className="text-dark-blue font-[700] mb-4">Track company-wide progress</p>
                            <span className="text-silver">See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</span>
                        </div>
                    </div>
                    <div className="flex mt-4 gap-1">
                        <div className="gap-4">
                            <span className="w-40 p-3 text-white rounded-2xl bg-orange hover:shadow-lg">02</span>
                        </div>
                        <div>
                            <p className="text-dark-blue font-[700] mb-4">Advanced built-in reports</p>
                            <span className="text-silver">Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.</span>
                        </div>
                    </div>
                    <div className="flex mt-4 gap-1">
                        <div className="gap-4">
                            <span className="w-40 p-3 text-white rounded-2xl bg-orange hover:shadow-lg">03</span>
                        </div>
                        <div>
                            <p className="text-dark-blue font-[700] mb-4">Everything you need in one place</p>
                            <span className="text-silver">Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-full sm:h-full sm:w-screen flex flex-col gap-4 mt-28">
                <h1 className="text-5xl font-[700] text-dark-blue leading-tight sm:text-5xl w-full text-center mb-8">What they’ve said</h1>
                <Slider />
                <Button />
            </div>
        </>
    )
}