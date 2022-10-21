import React from "react";
import { motion, useScroll } from "framer-motion";

const { scrollYProgress } = useScroll();

const tagMap = {
    paragraph: "p",
    heading1: "h1",
    heading2: "h2"
};

const textAnimation = (props) => {
    const item = { // 애니메이션 옵션
        hidden: {
            y: "200%",
            color: "#0055FF",
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 } // 퇴장
        },
        visible: {
            y: 0,
            color: "#FF0088",
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 } // 등장
        }
    };

    const splitWords = props.text.split(" ");

    const words = [];

    for (const [, item] of splitWords.entries()) {
        words.push(item.split(""));
    }

    const Tag = tagMap[props.type];
}

export default textAnimation;