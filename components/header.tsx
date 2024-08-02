import Link from "next/link";
import MotionTransition from "./transition-component";
import { socialNetworks } from "@/data";

const Header = () =>{

    return(
        <MotionTransition position="bottom" className="absolute z-40 inline-block  w-full top-5 md:top-10" >
            <header>
                <div className="container justify-between  max-w-6xl mx-auto md:flex">
                    <Link href="/" >
                        {/* para que sea responsive el text-center */}
                        <h1 className="my-3 text-4xl font-bold text-center md:text-left"> 
                            Diego
                            <span className="ml-2 text-secondary">
                                Haro
                            </span>
                        
                        </h1>
                    
                    </Link>
                    <div className="flex items-center justify-center gap-7">
                        {socialNetworks.map(({logo, src, title,id}) =>(
                            <Link key={id}
                                href={src}
                                target="_blank"
                                className=" social-link transition-all duration-300 hover:text-secondary"
                            >
                                <span className="flex items-center justify-center">
                                    {logo}
                                </span>
                                {title}
                            </Link>
                        ))}
                    </div>

                </div>
            </header>

        </MotionTransition>
        
    );
}

export default Header;