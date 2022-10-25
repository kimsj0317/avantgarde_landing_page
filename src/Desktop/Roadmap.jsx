import React from "react";
import "./text.css";
import AnimaitonText from "./Animation.jsx";

function Roadmap() {
    return (
        <>
            <div
                style={{
                    paddingTop: "4%",
                    paddingLeft: "4%",
                    paddingRight: "5%",
                    paddingBottom: "6%",
                }}>
                <div className="title">
                    <AnimaitonText text="ROADMAP" />
                </div>
                <img
                    style={{
                        width: "30%",
                        marginTop: "3%",
                    }}
                    src="./img/roadmap/roadmap_1_pc.jpg" alt="roadmap_1"
                />
            </div>
        </>
    );
}

export default Roadmap;