"use client"
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";


const Introduction = () => {

    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-20 md:grid-cols-2">
                <Image src="/home-4.png" priority width="250" height="250" alt="Profile pic" />
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left 
                        md:text-4xl md:mb-10

                    ">
                        Si puedes imaginarlo,
                        <TypeAnimation
                            sequence={[
                                "puedes programarlo",
                                1400, // tiempo de espera para cambiar a las siguientes palabras
                                "puedes optimizarlo",
                                1400,
                                "puedes implementarlo",
                                1400,
                                "puedes desarrollarlo",
                                1400

                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className=" block font-bold text-secondary"
                        />
                    </h1>
                    <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8">
                        Como estudiante de informática, he estado ampliando mis conocimientos en tecnologías de Front-End y Back-End de manera autodidacta  🧑‍💻
                        Además, tengo un gran interés en compartir mis conocimientos, la docencia y la investigación.
                    </p>
                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <Link href="/projects" className="
                            px-3 py-2 transition-all border-2 cursor-pointer 
                            text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50 ">
                                Ver proyectos
                        </Link>

                        <Link href="/contact" className="
                            px-3 py-2 transition-all border-2 cursor-pointer 
                            text-secondary border-secondary w-fit rounded-xl hover:shadow-xl hover:shadow-secondary ">
                                Contactame
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Introduction;