import React from "react";
import "./Navbar.css"

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

                <div className="subtitle">ABOUT</div>
                <div className="subtitle">ROADMAP</div>
                <div className="subtitle">TEAM</div>
                <div className="subtitle">GALLERY</div>
                <div className="subtitle">AG STUDIO</div>

                <img className="logo" src="./img/navbar/opensea.svg" alt="opensea" />
                <img className="logo" src="./img/navbar/instagram.svg" alt="instagram" />
                <img className="logo" src="./img/navbar/twitter.svg" alt="twitter" />
                <img className="logo" src="./img/navbar/discord.svg" alt="discord" />
                <img className="logo" src="./img/navbar/sound_off.gif" alt="sound" />
            </nav>
        </>
    );
}

export default Navbar;