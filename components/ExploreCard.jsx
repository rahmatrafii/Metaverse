"use client";
import { motion } from "framer-motion";
import styles from "./../styles";
import { fadeIn } from "../utils/motion";
const ExploreCard = (props) => {
  const { id, imgUrl, title, active, handleClick, index } = props;
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id ? "lg:flex-[5]  flex-[15] " : "lg:flex-[0.3] flex-[2] "
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer overflow-hidden`}
      onClick={() => handleClick(id)}
    >
      <img
        src={imgUrl}
        alt={title}
        className="absolute w-full h-full object-cover rounded-[20px]"
      />
      {active !== id ? (
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-24 lg:rotate-[-90deg] lg:origin-[0,0]  ">
          {" "}
          {title}{" "}
        </h3>
      ) : (
        <motion.div className="absolute bottom-0 p-4 lg:p-8 justify-start   w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[20px]">
          <div
            className={`${styles.flexCenter} w-[40px] h-[40px] rounded-[24px] glassmorphism mb-[10px] `}
          >
            <img
              src="/headset.svg"
              alt="headset"
              className="w-1/2 h-1/2 object-cover"
            />
          </div>
          <p className="font-normal text-[12px] lg:text-[16px] text-white uppercase ">
            Enter the Metaverse
          </p>
          <h2 className="mt-[24px] font-semibold sm:text-[24px] text-[16px] lg:text-[36px] text-white ">
            {title}
          </h2>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ExploreCard;
