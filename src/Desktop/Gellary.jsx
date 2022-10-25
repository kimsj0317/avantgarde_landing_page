import React from "react";
import "./text.css";
import AnimationText from "./Animation.jsx";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Gellary.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, } from "swiper";

function Gallery() {
    // const slideClick = () => {
    //     Swiper.
    // }

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
                    slidesPerView={1.5}
                    spaceBetween={30}
                    centeredSlides={true}
                    keyboard={{
                        enabled: true,
                    }}
                    autoplay={false}
                    modules={[Keyboard,]}
                    style={{
                        // display: "flex",
                        // gap: "10%",
                        overflow: "visible",
                    }}>
                    <SwiperSlide>
                        <img className="imgs" src="./img/gellary/galleryimg1.png" alt="galleryimg1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="imgs" src="./img/gellary/galleryimg2.png" alt="galleryimg2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="imgs" src="./img/gellary/galleryimg3.png" alt="galleryimg3" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="imgs" src="./img/gellary/galleryimg4.png" alt="galleryimg4" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="imgs" src="./img/gellary/galleryimg5.png" alt="galleryimg5" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="imgs" src="./img/gellary/galleryimg6.png" alt="galleryimg1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="imgs" src="./img/gellary/galleryimg7.png" alt="galleryimg2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="imgs" src="./img/gellary/galleryimg8.png" alt="galleryimg3" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="imgs" src="./img/gellary/galleryimg9.png" alt="galleryimg4" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="imgs" src="./img/gellary/galleryimg10.png" alt="galleryimg5" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className="imgs" src="./img/gellary/galleryimg11.png" alt="galleryimg5" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )

    // return (
    //     <>
    //         <div
    //             style={{
    //                 paddingTop: "4%",
    //                 paddingLeft: "4%",
    //                 paddingRight: "5%",
    //                 paddingBottom: "6%",
    //             }}>
    //             <div className="title" style={{ marginBottom: "5%" }}>
    //                 <AnimationText text="GALLREY" />
    //             </div>
    //             <Swiper
    //                 style={{
    //                     display: "flex",
    //                 }}
    //                 className="swiper"
    //                 slidesPerView={1}
    //                 spaceBetween={30}
    //                 centeredSlides={true}
    //                 keyboard={{
    //                     enabled: true,
    //                 }}
    //                 // pagination={{
    //                 //     clickable: true,
    //                 // }}
    //                 autoplay={false}
    //                 modules={[Keyboard, Pagination, Navigation]}
    //             >
    //                 <SwiperSlide className="swiper-slide">
    //                     <img src="./img/gellary/galleryimg1.png" />
    //                 </SwiperSlide>
    //                 <SwiperSlide className="swiper-slide">
    //                     <img src="./img/gellary/galleryimg2.png" />
    //                 </SwiperSlide>
    //                 <SwiperSlide className="swiper-slide">
    //                     <img src="./img/gellary/galleryimg3.png" />
    //                 </SwiperSlide>
    //                 <SwiperSlide className="swiper-slide">
    //                     <img src="./img/gellary/galleryimg4.png" />
    //                 </SwiperSlide>
    //                 <SwiperSlide className="swiper-slide">
    //                     <img src="./img/gellary/galleryimg5.png" />
    //                 </SwiperSlide>
    //             </Swiper>
    //         </div>
    //     </>
    // );
}

export default Gallery;