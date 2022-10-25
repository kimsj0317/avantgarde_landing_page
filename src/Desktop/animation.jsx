import React from "react";
import { motion } from "framer-motion";

const Wrapper = (props) => {
    return (
        <span className="word-wrapper">
            {props.children}
        </span>
    );
};

const container = {
    visible: {
        transition: {
            staggerChildren: 0.025,
        },
    },
};

// const tagMap = {
//     paragraph: "p",
//     heading1: "h1",
//     heading2: "h2"
// };

const textAnimation = (props) => {
    const item = { // 애니메이션 옵션
        hidden: {
            y: "200%",
            transition: { // 퇴장
                ease: [0.455, 0.03, 0.515, 0.955],
                duration: 0.85,
            }
        },
        visible: {
            y: 0,
            transition: { // 등장
                ease: [0.455, 0.03, 0.515, 0.955],
                duration: 0.75,
            }
        }
    };

    const splitWords = props.text.split(" ");

    const words = [];

    for (const [, item] of splitWords.entries()) {
        words.push(item.split(""));
    }

    words.map((word) => {
        return word.push("\u00A0");
    });

    // const Tag = tagMap[props.type];

    return (
        <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
        >
            {words.map((word, index) => {
                return (
                    <Wrapper key={index}>
                        {words[index].flat().map((element, index) => {
                            return (
                                <span
                                    style={{
                                        overflowY: "hidden",
                                        overflowX: "visible",
                                        display: "inline-block",
                                        paddingLeft: "8rem",
                                        paddingRight: "8rem",
                                        marginLeft: "-8rem",
                                        marginRight: "-8rem",
                                    }}
                                    key={index}
                                >
                                    <motion.span
                                        style={{ display: "inline-block" }}
                                        variants={item}
                                    >
                                        {element}
                                    </motion.span>
                                </span>
                            );
                        })}
                    </Wrapper>
                );
            })}
        </motion.span>
    );
}

export default textAnimation;