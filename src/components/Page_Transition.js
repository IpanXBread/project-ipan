import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import '../css/styles.css';
import '../css/Transition.css';

export default function Page_Transition() {
    return (
        <>
                <motion.div
                    className="transition-page transition-color1"
                    initial={{ x: "0%", width: "100%" }}
                    animate={{ x: "0%", width: "0%" }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                />
                <motion.div
                    className="transition-page transition-color2"
                    initial={{ x: "100%", width: "100%" }}
                    animate={{ x: "0%", width: "0%" }}
                    transition={{ delay: 0, duration: 1.1, ease: "easeInOut" }}
                />
                <motion.div
                    className="transition-page transition-color3"
                    initial={{ x: "100%", width: "100%" }}
                    animate={{ x: "0%", width: "0%" }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                />
        </>
    );
}