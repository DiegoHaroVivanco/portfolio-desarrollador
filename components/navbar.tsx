"use client"
import { itemsNavbar } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MotionTransition from "./transition-component";


const Navbar = () =>{
    const router = usePathname(); // para saber en que ruta estamos actualmente.

    return (

        <MotionTransition position = 'right'className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10">
            <nav>
                <div className="flex items-center justify-center grap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm">
                
                {/* itero sobre el array de obj de itemsNavbar y voy pidiendo el link y icon*/}
                {itemsNavbar.map((item) => 
                    <div key={item.id}

                    // sombrea el icono según la ruta en donde esté
                    className= {`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary 
                        ${router === item.link && 'bg-secondary'}` } > 

                        <Link href={item.link}>{item.icon}</Link>
                    </div>
                )}
                </div>
            </nav>
        
        </MotionTransition>


    )


}

export default Navbar;