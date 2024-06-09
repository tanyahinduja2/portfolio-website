import React from "react";

const styles = {
    heroDiv: "w-full h-[23rem] z-1000 px-[15%] flex gap-[1rem] flex-col",
    hiLine: "text-[--text] text-2xl font-mono text-shadow-3xl",
    nameLine: "text-[#E1AFD1] text-5xl font-mono outline-2 b",
    cvButton: "w-[12rem] h-[4rem] text-[#E1AFD1] font-mono text-xl border-2 border-[#E1AFD1] rounded-lg ml-[0.3rem] transform hover:shadow-custom hover:-translate-x-0 hover:-translate-y-0 transition-shadow duration-500 ease-in-out focus:outline-none py-3 px-5 leading-none", 
    introLine: "text-[--text] text-2xl font-mono text-shadow-3xl mb-[2rem]",
}

const Hero = () => {
  return (
      <div className={styles.heroDiv}>
        <h1 className={styles.hiLine}>Hi, my name is</h1>
        <h1 className={styles.nameLine}>Tanya Hinduja.</h1>
        <h1 className={styles.nameLine}>I craft solutions for the web.</h1>
        <h1 className={styles.introLine}>I am a final year Computer Engineering student looking to gain practical experience in a corporate environment.</h1>
        <button className={styles.cvButton}>Download CV</button>
      </div>
  );
};

export default Hero;
