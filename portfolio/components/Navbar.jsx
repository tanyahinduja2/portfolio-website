import React from "react";
import Image from "next/image";

const styles = {
  navContainer: "flex justify-center w-full h-[9rem]",
  navBar:
    "fixed flex flex-row justify-between w-[100%] h-[5rem] bg-[#0F0F0F] items-center border-1 pl-[2rem] pr-[5rem] font-mono z-10 shadow-2xl",
  navTitle: "text-[--white-text] font-bold text-[3.5rem]",
  linkContainer: "flex gap-[4.5rem] text-[--text] text-xl",
  link: "hover:scale-125  hover:text-[#E1AFD1] transition:color duration-100",
};


const Navbar = () => {
  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.navBar}>
          <a href="#home">
            <Image src={"/assets/t-icon.png"} width={100} height={100} alt="T Icon" />
          </a>
          <nav>
            <ul className={styles.linkContainer}>
              <li className={styles.link}>
                <a href="#about">About</a>
              </li>
              <li className={styles.link}>
                <a href="#education">Education</a>
              </li>
              <li className={styles.link}>
                <a href="#skills">Skills</a>
              </li>
              <li className={styles.link}>
                <a href="#projects">Projects</a>
              </li>
              <li className={styles.link}>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
