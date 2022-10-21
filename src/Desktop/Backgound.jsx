import React from "react";
import About from './About';
import Loadmap from './Roadmap';

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
                src="./img/bg/desktop-bg.png" alt="background"
            />
            <About />
            <Loadmap />
        </>
    );
}

export default Background;