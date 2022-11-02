import React from "react";

function Video() {
    const imgUrl = process.env.PUBLIC_URL;

    return (
        <>
            <img
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translateX(-50%) translateY(-50%)",
                    width: "100vh",
                    height: "100vh",
                    // height: "266rem",
                    opacity: "0",
                    animation: "fadeIn 0.5s forwards",
                    animationDelay: "0.75s",
                }}
                src={imgUrl + "/img/loading.gif"}
                alt="loading"
            />
            <video
                style={{
                    width: "100%",
                    position: "relative",
                    display: "block",
                }}
                autoPlay={true}
                muted="mute"
                src={imgUrl + "/video/main-video-desktop.mp4"}
                alt="mainVideo"
                loop
            />
        </>
    );
}

export default Video;
