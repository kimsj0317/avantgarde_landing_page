import React from "react";
import "./text.css";
import AnimationText from "./Animation.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Gellary.css"
import { Keyboard, Navigation, Pagination } from "swiper";

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
                <Swiper
                    className="swiper"
                    slidesPerView={1}
                    spaceBetween={30}
                    centeredSlides={true}
                    keyboard={{
                        enabled: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    autoplay={false}
                    modules={[Keyboard, Pagination, Navigation]}
                >
                    <SwiperSlide className="swiper-slide">
                        <div>
                            <img src="./img/gellary/galleryimg1.png" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div>
                            <img src="./img/gellary/galleryimg2.png" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div>
                            <img src="./img/gellary/galleryimg3.png" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div>
                            <img src="./img/gellary/galleryimg4.png" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div>
                            <img src="./img/gellary/galleryimg5.png" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}

export default Gallery;