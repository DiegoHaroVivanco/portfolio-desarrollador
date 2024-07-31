"use client"
import { transitionVariantsPage } from "@/utils/motion-transitions";
import { AnimatePresence, easeInOut, motion } from "framer-motion";

const TransitionPage = () =>{
    return (
        <AnimatePresence mode="wait">
            <div>
                <motion.div
                    className="fixed top-0 bottom-0 right-full w-screen z-30 bg-[#0a0322c5]"
                    variants={transitionVariantsPage}
                    initial="initial"
                    animate="animate"
                    exit = "exit"
                    transition={{delay: .2, duration: .6, ease: "easeInOut"}}

                >

                </motion.div>
            </div>

        </AnimatePresence>
    )
}


export default TransitionPage;