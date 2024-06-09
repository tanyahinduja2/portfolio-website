import React from "react";

const styles = {
    aboutDiv: "w-full h-[32rem] z-1000 px-[10%] mt-[1rem] mb-[4rem] pt-[8rem] flex gap-[1rem] flex-col",
    hiLine: "text-[--text] text-4xl font-mono text-shadow-3xl",
    titleDiv: "flex flex-col gap-[1rem]",
    horizontalRule: "w-[15rem] border-b border-[#E1AFD1]",
    contentDiv: "flex flex-row gap-[2rem]",
    aboutMeText: "text-[--text] font-mono text-xl pt-[2rem]",
    aboutMeSvg: "w-[80rem] h-auto",
    purpleText: "text-[#E1AFD1]",
}

const About = () => {
    return (
        <div className={styles.aboutDiv}>
            <div className={styles.titleDiv}>
                <h1 className={styles.hiLine}><span className={styles.purpleText}>1. </span>About Me</h1>
                <hr className={styles.horizontalRule}></hr>
            </div>
            <div className={styles.contentDiv}>
                <div className={styles.aboutMeText}>
                    <p>
                    The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor <span className={styles.purpleText}>incididunt</span> ut labore et dolore magna aliqua. <br></br><br></br>Ut enim ad minim veniam, quis nostrud <span className={styles.purpleText}>exercitation</span> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
                <div>
                    <img src="/assets/about-me-2.svg" className={styles.aboutMeSvg} alt="About Me SVG"></img>
                </div>
            </div>
        </div>
    )
}

export default About;