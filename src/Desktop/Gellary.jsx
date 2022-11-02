import React from "react";
import "./text.css";
import AnimationText from "./Animation.jsx";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Gellary.css";
import {
    Swiper,
    SwiperSlide,
    SlideData
} from "swiper/react";
import { Keyboard, } from "swiper";
import { motion, } from "framer-motion";

const imgUrl = process.env.PUBLIC_URL;

function Gallery() {
    return (
        <>
            <div
                style={{
                    paddingTop: "4%",
                    paddingLeft: "4%",
                    paddingRight: "5%",
                    paddingBottom: "6%",
                }}>
                <div className="title" style={{ marginBottom: "5%" }}>
                    <AnimationText text="GALLREY" />
                </div>
                {/* <img src={galleryItems.imageUrl} alt="" /> */}
                <Swiper
                    className="swiper"
                    slidesPerView={2}
                    // spaceBetween={30}
                    speed={800}
                    slideToClickedSlide={true}
                    centeredSlides={true}
                    keyboard={{
                        enabled: true,
                    }}
                    autoplay={false}
                    modules={[Keyboard,]}
                    style={{
                        left: "0%",
                        width: "100%",
                        position: "absolute",
                        overflow: "hidden",
                    }}>
                    <SwiperSlide>
                        <img src={imgUrl + "/img/gellary/galleryimg1.png"} alt="galleryimg1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imgUrl + "/img/gellary/galleryimg2.png"} alt="galleryimg2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imgUrl + "/img/gellary/galleryimg3.png"} alt="galleryimg3" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imgUrl + "/img/gellary/galleryimg4.png"} alt="galleryimg4" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={imgUrl + "/img/gellary/galleryimg5.png"} alt="galleryimg5" />
                    </SwiperSlide>
                    {/*<SwiperSlide className="frame">
                        <img src={imgUrl + "/img/gellary/galleryimg6.png"} alt="galleryimg6" />
                    </SwiperSlide>
                    <SwiperSlide className="frame">
                        <img src={imgUrl + "/img/gellary/galleryimg7.png"} alt="galleryimg7" />
                    </SwiperSlide>
                    <SwiperSlide className="frame">
                        <img src={imgUrl + "/img/gellary/galleryimg8.png"} alt="galleryimg8" />
                    </SwiperSlide>
                    <SwiperSlide className="frame">
                        <img src={imgUrl + "/img/gellary/galleryimg9.png"} alt="galleryimg9" />
                    </SwiperSlide>
                    <SwiperSlide className="frame">
                        <img src={imgUrl + "/img/gellary/galleryimg10.png"} alt="galleryimg10" />
                    </SwiperSlide>
                    <SwiperSlide className="frame">
                        <img src={imgUrl + "/img/gellary/galleryimg11.png"} alt="galleryimg11" />
                    </SwiperSlide> */}
                </Swiper>
            </div>
        </>
    );
}

const galleryItems = [
    {
        imageUrl: imgUrl + "/img/gallery/galleryimg1.png",
        description: [
            "Dream",
            "2010",
            "Mixed Media on Plywood",
            "88 x 65 cm"],
        ratio: 88 / 65,
    },
    {
        imageUrl: "/gallery/galleryimg2.png",
        description: [
            "Portrait G",
            "2022",
            "Mixed Media on Canvasd",
            "116.8 × 91 cm",
        ],
        ratio: 116.8 / 91,
    },
    {
        imageUrl: "./img/gallery/galleryimg3.png",
        description: [
            "Work",
            "2018", "Oil on Canvas",
            "101.5 x 76 cm"
        ],
        ratio: 101.5 / 76,
    },
    {
        imageUrl: "./img/gallery/galleryimg4.png",
        description: [
            "Berlin", "2012",
            "Acrylic, Pen on Canvas",
            "178 x 139 cm"
        ],
        ratio: 178 / 139,
    },
    {
        imageUrl: "./img/gallery/galleryimg5.png",
        description: [
            "Grapeseed",
            "2019",
            "Mixed Media on Canvas",
            "53.0 x 45.5 cm",
        ],
        ratio: 53 / 45.5,
    },
    {
        imageUrl: "./img/gallery/galleryimg6.png",
        description: [
            "Untitled",
            "2021",
            "Oil on Canvas",
            "73 x 61 cm"
        ],
        ratio: 73 / 61,
    },
    {
        imageUrl: "./img/gallery/galleryimg7.png",
        description: [
            "Red flower 2",
            "2013",
            "Acrylic, Pen on Canvas",
            "50 x 39 cm",
        ],
        ratio: 50 / 40,
    },
    {
        imageUrl: "./img/gallery/galleryimg8.png",
        description: [
            "Portrait L",
            "2020",
            "Mixed Media on Canvas",
            "72.7 x 60.6 cm",
        ],
        ratio: 72.7 / 60.6,
    },
    {
        imageUrl: "./img/gallery/galleryimg9.png",
        description: [
            "Untitled",
            "Oil on Canvas",
            "91 x 72.8 cm"
        ],
        ratio: 91 / 72.8,
    },
    {
        imageUrl: "./img/gallery/galleryimg10.png",
        description: [
            "Untitled",
            "2021",
            "Oil on Canvas",
            "117 x 91 cm"
        ],
        ratio: 117 / 92,
    },
    {
        imageUrl: "./img/gallery/galleryimg11.png",
        description: [
            "Untitled",
            "2021",
            "Oil on Canvas",
            "73 × 61 cm"
        ],
        ratio: 73 / 61,
    },
];

export default Gallery;