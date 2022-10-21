import React from "react";
import "./text.css"

function Roadmap() {
    return (
        <>
            <div
                style={{
                    paddingTop: "4%",
                    paddingLeft: "5%",
                    paddingRight: "5%",
                    paddingBottom: "3%",
                }}>
                <div className="title">
                    ROADMAP
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