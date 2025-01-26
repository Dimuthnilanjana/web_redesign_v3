'use client'
import Image from "next/image";
import { testimonilasData } from "@/utils/fackData/testimonilasData"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import { Autoplay, Navigation } from "swiper/modules";
import SlideUp from "@/utils/animations/slideUp";

const Testimonials = () => {
    return (
        <section className="testimonials-area">
            <div className="container">
                <div className="row">
                    <SlideUp className="col-lg-12">
                        <Swiper
                            navigation={{
                                nextEl: ".testimonial-next",
                                prevEl: ".testimonial-prev"
                            }}
                            loop
                            autoplay={{
                                delay:1500,
                            }}
                            speed={1000}
                            breakpoints={{
                                768:{
                                    slidesPerView:2
                                }
                            }}
                            spaceBetween={30}
                            modules={[Navigation, Autoplay]}
                        >
                            {
                                testimonilasData.map(({ id, img, name, position, review }) => {
                                    return (
                                        <SwiperSlide key={id}>
                                            <div className="testimonials-wrap">
                                                <div className="testimonial-item">
                                                    <div className="text">{review}</div>
                                                    <div className="author">
                                                        <Image width={60} height={60} src={img} alt="Author" />
                                                    </div>
                                                    <div className="testi-des">
                                                        <h5>{name}</h5>
                                                        <span>{position}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                        <div className="slider-arrows wow fadeInUp delay-0-6s text-center pt-40">
                            <button className="testimonial-prev testimonial-arrow"><i className="ri-arrow-left-s-line" /></button>
                            <button className="testimonial-next testimonial-arrow"><i className="ri-arrow-right-s-line" /></button>
                        </div>
                    </SlideUp>
                </div>
            </div>
        </section>

    )
}

export default Testimonials