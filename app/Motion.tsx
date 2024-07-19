import { motion } from "framer-motion";
import foto1 from "/public/vans-pessoa.jpg"
import Image from "next/image";
export function Motion(){
    return(
        <div>
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:3}}
        >
        <Image src={foto1} alt="foto1"width={550} height={550} className=""/>
        </motion.div>
        </div>

    )
}