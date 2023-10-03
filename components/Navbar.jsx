"use client";

import { motion } from "framer-motion";
import styles from "./../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => {
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-1/2 inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <img
          src="/search.svg"
          alt="search"
          className="w-[24px] h-[24px] object-contain cursor-pointer"
        />
        <h2 className="font-extrabold text-[24px] leading-7 text-white">
          METAVERSUS
        </h2>
        <img
          src="/menu.svg"
          alt="menu"
          className="w-[24px] h-[24px] cursor-pointer"
        />
      </div>
    </motion.div>
  );
};

export default Navbar;
