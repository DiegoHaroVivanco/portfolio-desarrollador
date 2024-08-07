"use client"
import Image from "next/image"
import MotionTransition from "./transition-component"

const Avatar = () =>{

    return (

        <MotionTransition position="bottom" className="bottom-1 right-2 hidden md:inline-block md:absolute" >
            <Image src="/avatar-1.png" width="250" height="250"
                className="w-full h-auto" alt="avatar"
            />
                        
        </MotionTransition>
    )
}

export default Avatar