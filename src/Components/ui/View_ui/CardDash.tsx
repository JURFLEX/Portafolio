import React from 'react';
import { motion } from "framer-motion";
interface IPROPS {
    name: string;
    href: string;
    anima: string;

}
export const CardDash: React.FC<IPROPS> = ({ name, href, anima }) => {
    return (
        // rounded-tl-[100px]
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="m-2  backdrop-blur-sm bg-white/60   max-w-[8rem] rounded  shadow-lg   h-[6rem] w-15" >
            <a className="inline-block backdrop-blur-sm bg-white/60  px-2  text-sm font-semibold hover:bg-gray-200 w-full h-full" href={href}>
                <div className="">
                    <div className="">
                        <div className="">
                            <p className="text-gray-600  text-lg text-center   mt-2  ">
                                {name}
                            </p>
                        </div>
                        <div className="text-gray-700  text-xs w-full flex justify-center items-center ">
                            <img src={anima} className="mt-2 w-12" />

                        </div>
                    </div>

                </div>
            </a>
        </motion.div>

    );
};


