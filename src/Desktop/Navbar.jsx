import React from "react";
import "./Navbar.css";
import { FlyText, FlyIcon } from "./NavAnimation";

function Navbar() {

    return (
        <>
            <nav
                className="navbar"
                style={{
                    position: "fixed",
                    width: "100%",
                    height: "12%",
                    zIndex: "1",
                }}
            >
                <img
                    style={{
                        position: "relative",
                        width: "18%",
                        verticalAlign: "middle",
                        top: "30%",
                        marginLeft: "4.5%",
                    }}
                    src="./img/navbar/navbar-logo.png"
                    alt="logo"
                />

                <div className="subtitle">
                    <FlyText text={"ABOUT"}
                        onClick={(event) => {
                            event.preventDefault();
                            const element = document.getElementById("about");
                            if (!element) {
                                return;
                            }
                            let currentElement = element;
                            let top = 0;
                            while (currentElement != null) {
                                top += currentElement.offsetTop;
                                currentElement = currentElement.parentElement;
                            }
                            window.scroll({
                                top: top - 100,
                                behavior: "smooth",
                            });
                        }} />
                </div>
                <div className="subtitle">
                    <FlyText text={"ROADMAP"} />
                </div>
                <div className="subtitle">
                    <FlyText text={"TEAM"} />
                </div>
                <div className="subtitle">
                    <FlyText text={"AG STUDIO"} />
                </div>
                <div
                    className="subtitle"
                    onClick={(event) => {
                        event.preventDefault();
                        alert("coming soon");
                    }}>
                    <FlyText text={"ABOUT"} />
                </div>

                {/* <FlyIcon>
                    <img className="logo" src="./img/navbar/opensea.svg" alt="opensea" />
                </FlyIcon>
                <FlyIcon>
                    <img className="logo" src="./img/navbar/instagram.svg" alt="instagram" />
                </FlyIcon>
                <FlyIcon>
                    <img className="logo" src="./img/navbar/twitter.svg" alt="twitter" />
                </FlyIcon>
                <FlyIcon>
                    <img className="logo" src="./img/navbar/discord.svg" alt="discord" />
                </FlyIcon>
                <FlyIcon>
                    <img className="logo" src="./img/navbar/sound_off.gif" alt="sound_off" id="mute_button" />
                </FlyIcon> */}

                <a
                    onClick={(event) => {
                        event.preventDefault();
                        alert("coming soon");
                    }}>
                    <img className="logo" src="./img/navbar/opensea.svg" alt="opensea" />
                </a>
                <a onClick={(event) => {
                    event.preventDefault();
                    alert("coming soon");
                }}>
                    <img className="logo" src="./img/navbar/instagram.svg" alt="instagram" />
                </a>
                <a
                    class="item"
                    href="https://discord.com/invite/tZDtDSPRF8"
                    target="_blank"
                >
                    <img className="logo" src="./img/navbar/twitter.svg" alt="twitter" />
                </a>
                <a
                    class="item"
                    href="https://discord.com/invite/tZDtDSPRF8"
                    target="_blank"
                >
                    <img className="logo" src="./img/navbar/discord.svg" alt="discord" />
                </a>
                <img className="logo" src="./img/navbar/sound_off.gif" alt="sound_off" id="mute_button" />
            </nav>
        </>
    );
}

export default Navbar;