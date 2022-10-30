import React from "react";
import About from './About';
import Gallery from "./Gellary";
import Roadmap from './Roadmap';
import Team from "./Team";

function Background() {
    return (
        <>
            <img
                style={{
                    width: "100%",
                    display: "block",
                    position: "absolute",
                    zIndex: "-1",
                }}
                src="./img/bg/desktop-bg.png" alt="background" />
            <About />
            <Roadmap />
            <Team />
            <Gallery />
        </>
    );
}

export default Background;