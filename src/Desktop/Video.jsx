import React from "react";

function Video() {
    return (
        <>
            <video
                style={{
                    width: "100%",
                    position: "relative",
                    display: "block",
                }}
                autoPlay="true"
                muted="mute"
                src="./video/main-video-desktop.mp4"
                alt="mainVideo"
                loop
            />
        </>
    );
}

export default Video;
