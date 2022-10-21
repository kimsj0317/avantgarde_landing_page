import React from "react";
import "./text.css"

function Team() {
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
                    TEAM
                </div>
                <div>
                    <img
                        style={{
                            width: "29%",
                        }}
                        src="./img/teamprofile/team-01.png" alt="team-01"
                    />
                </div>
            </div>
        </>
    );
}

export default Team;