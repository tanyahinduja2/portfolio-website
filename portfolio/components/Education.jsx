import React from 'react';

const styles = {
    educationDiv: "w-full h-[32rem] z-1000 px-[10%] mt-[1rem] pt-[3rem] flex gap-[1rem] flex-col",
    hiLine: "text-[--text] text-4xl font-mono text-shadow-3xl",
    titleDiv: "flex flex-col gap-[1rem]",
    horizontalRule: "w-[16rem] border-b border-[#E1AFD1]",
    contentDiv: "flex flex-row h-[75%]",
    leftDiv: "w-[50%] h-[100%] border-r border-[#E1AFD1] flex flex-col justify-center items-center gap-[4rem]",
    rightDiv: "w-[50%] h-[100%] border-l border-[#E1AFD1] flex flex-col justify-center items-center gap-[4rem]",
    leftContentDiv: "w-[20rem] h-[6rem] border-2 border-[#E1AFD1]",
    purpleText: "text-[#E1AFD1]",
}
 

const Education = () => {
    return(
        <div className={styles.educationDiv}>
            <div className={styles.titleDiv}>
                <h1 className={styles.hiLine}><span className={styles.purpleText}>2. </span>Education</h1>
                <hr className={styles.horizontalRule}></hr>
            </div>
            <div className={styles.contentDiv}>
                <div className={styles.leftDiv}>
                </div>
                <div className={styles.rightDiv}>
                    <div className={styles.leftContentDiv}>
                    </div>
                    <div className={styles.leftContentDiv}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;