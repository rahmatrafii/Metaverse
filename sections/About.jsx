"use client";
import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "./../styles";
import { fadeIn, slideIn, staggerContainer } from "../utils/motion";

const About = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} ${styles.flexCenter} mx-auto flex-col`}
      >
        <TypingText title="| About Metaversus" textStyles="text-center" />
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white "
        >
          <span className="font-extrabold text-white">Metaverse </span> Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          dolorum placeat quod vitae eaque sed dicta corporis fugit nemo
          <span className="font-extrabold text-white"> Metaverse </span>, veniam
          molestias laborum, ullam eos temporibus consequatur repellat fugiat at
          accusamus
          <span className="font-extrabold text-white"> Metaverse </span>
          autem nihil. Ex, est sapiente eos ipsa quae pariatur, necessitatibus,
          eum corrupti suscipit sint eligendi!
          <span className="font-extrabold text-white"> Metaverse </span>, sit
          temporibus. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Perspiciatis, consequatur.
        </motion.p>

        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[18px] object-contain mt-7 cursor-pointer"
        />
      </motion.div>
    </section>
  );
};

export default About;
