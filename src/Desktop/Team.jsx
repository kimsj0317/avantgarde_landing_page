import React from "react";
import "./text.css";
import AnimationText from "./Animation.jsx"

function Team() {
    const secLine = { marginTop: "5%" };

    const imgStyle = {
        position: "absolute",
        top: "2%",
        left: "2%",
        right: "2%",
        bottom: "2%",
        width: "calc(100% - 4%)",
        height: "calc(100% - 4%)",
        textAlign: "center",
        verticalAlign: "middle",
    };

    const frameStyle = {
        position: "relative",
        paddingTop: "108%",
        height: "0",
        width: "98%",
    };

    return (
        <>
            <div
                style={{
                    paddingTop: "5%",
                    paddingLeft: "4%",
                    paddingRight: "3%",
                    paddingBottom: "10%",
                }}>
                <div className="title">
                    <AnimationText text="TEAM" />
                </div>
                <div
                    style={{
                        gap: "2%",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                    }}
                >
                    <div>
                        <div
                            style={frameStyle}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    top: "0",
                                    left: "0",
                                    right: "0",
                                    bottom: "0",
                                    width: "100%",
                                    height: "100%",
                                    backgroundImage: "linear-gradient(45deg, #B045E0, #59E7EC)",
                                }}
                            >
                                <img
                                    style={imgStyle}
                                    src="./img/teamprofile/team-01.png"
                                    alt="team-01" />
                            </div>
                        </div>
                        <div className="nameProfile" style={{}}>
                            Tyler Lim
                        </div>
                        <div className="exampleProfile" style={{}}>
                            Founder / CEO
                        </div>
                        <li className="exampleProfile" style={{ textAlign: "-webkit-match-parent", display: "list-item", }}>
                            APAC Head of BD/CD at Global Stealth Company
                        </li>
                        <li className="exampleProfile" style={{ textAlign: "-webkit-match-parent", display: "list-item", }}>
                            Founder/CEO at Simple Kitchen (Exited ~USD 10M)
                        </li>
                    </div>
                    <div>
                        <div
                            style={frameStyle}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    top: "0",
                                    left: "0",
                                    right: "0",
                                    bottom: "0",
                                    width: "100%",
                                    height: "100%",
                                    backgroundImage: "linear-gradient(45deg, #5BE5EB, #CE8BB4)",
                                }}
                            >
                                <img
                                    style={imgStyle}
                                    src="./img/teamprofile/team-02.png"
                                    alt="team-02" />
                            </div>
                        </div>
                        <div className="nameProfile">
                            Helen Cho
                        </div>
                        <div className="exampleProfile">
                            Founder / CTO
                        </div>
                        <li className="exampleProfile" style={{ textAlign: "-webkit-match-parent", display: "list-item", }}>
                            Software Engineer at Google
                        </li>
                        <li className="exampleProfile" style={{ textAlign: "-webkit-match-parent", display: "list-item", }}>
                            Technology Analyst at Morgan Stanley
                        </li>
                        <li className="exampleProfile" style={{ textAlign: "-webkit-match-parent", display: "list-item", }}>
                            echnology Analyst at Merrill Lynch
                        </li>
                    </div>
                    <div>
                        <div
                            style={frameStyle}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    top: "0",
                                    left: "0",
                                    right: "0",
                                    bottom: "0",
                                    width: "100%",
                                    height: "100%",
                                    backgroundImage: "linear-gradient(45deg, #CE8BB4, #FC4238)",
                                }}
                            >
                                <img
                                    style={imgStyle}
                                    src="./img/teamprofile/team-03.png"
                                    alt="team-03" />
                            </div>
                        </div>
                        <div className="nameProfile">
                            Jung-Woo Ha
                        </div>
                        <div className="exampleProfile">
                            Art Director
                        </div>
                        <li className="exampleProfile" style={{ textAlign: "-webkit-match-parent", display: "list-item", }}>
                            Main actor of 'Along with the Gods' and 'Suriname'
                        </li>
                        <li className="exampleProfile" style={{ textAlign: "-webkit-match-parent", display: "list-item", }}>
                            Actor with a cumulative 115 million+ viewers
                        </li>
                        <li className="exampleProfile" style={{ textAlign: "-webkit-match-parent", display: "list-item", }}>
                            Participated in more than 30 exhibitions in Paris, LA, and Seoul as a painter
                        </li>
                    </div>
                    <div style={secLine}>
                        <div
                            style={frameStyle}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    top: "0",
                                    left: "0",
                                    right: "0",
                                    bottom: "0",
                                    width: "100%",
                                    height: "100%",
                                    backgroundImage: "linear-gradient(45deg, #FD4037, #603FE4)",
                                }}
                            >
                                <img
                                    style={imgStyle}
                                    src="./img/teamprofile/team-04.png"
                                    alt="team-04" />
                            </div>
                        </div>
                        <div className="nameProfile" style={{}}>
                            Andrew Choi
                        </div>
                        <div className="exampleProfile" style={{}}>
                            Advisor
                        </div>
                        <li className="exampleProfile" style={{ textAlign: "-webkit-match-parent", display: "list-item", }}>
                            Founder/CEO at SuperNormal
                        </li>
                    </div>
                    <div style={secLine}>
                        <div
                            style={frameStyle}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    top: "0",
                                    left: "0",
                                    right: "0",
                                    bottom: "0",
                                    width: "100%",
                                    height: "100%",
                                    backgroundImage: "linear-gradient(45deg, #6443E2, #CEA88C)",
                                }}
                            >
                                <img
                                    style={imgStyle}
                                    src="./img/teamprofile/team-05.png"
                                    alt="team-05" />
                            </div>
                        </div>
                        <div className="nameProfile" style={{}}>
                            Thomas
                        </div>
                        <div className="exampleProfile" style={{}}>
                            CSO
                        </div>
                    </div>
                    <div style={secLine}>
                        <div
                            style={frameStyle}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    top: "0",
                                    left: "0",
                                    right: "0",
                                    bottom: "0",
                                    width: "100%",
                                    height: "100%",
                                    backgroundImage: "linear-gradient(45deg, #CDA78D, #AF45DE)",
                                }}
                            >
                                <img
                                    style={imgStyle}
                                    src="./img/teamprofile/team-06.png"
                                    alt="team-06" />
                            </div>
                        </div>
                        <div className="nameProfile" style={{}}>
                            JJ
                        </div>
                        <div className="exampleProfile" style={{}}>
                            Head of Operations
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Team;