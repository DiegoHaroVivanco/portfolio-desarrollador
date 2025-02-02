"use client"
import Avatar from "@/components/avatar";
import ContainerPage from "@/components/container";
import CounterServices from "@/components/counter-services";
import CoverParticles from "@/components/cover-particles";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

const PageAboutMe = () => {
    console.log("Rendering PageAboutMe");
    return (
        <>
            <TransitionPage/>
            <CoverParticles />
            <ContainerPage>

                <Avatar />
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10"> 
                    Toda mi {''}

                    <span className="font-bold text-secondary">Experiencia profesional</span>
                </h1>

                <CounterServices/>
                <TimeLine/>
            </ContainerPage>
        </>
    )

}


export default PageAboutMe;