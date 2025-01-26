'use client'
import { Link as Linkscroll } from 'react-scroll';
import SlideUp from "@/utils/animations/slideUp"

const Hero = () => {
    return (
        <section id="home" className="main-hero-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <SlideUp className="hero-content position-relative">
                            <h3><i className="ri-refresh-line" />Subscription. Pause or cancel anytime</h3>
                            <h2>Hire Full-Service Design Agency For A Simple Monthly Fee.</h2>
                            <p>Create your products with top-tier designers at an affordable price. One subscription fee
                                covers unlimited design requests.</p>
                            <div className="hero-btns">
                                <Linkscroll smooth={true} to="pricing" className="theme-btn">See Pricing Plans</Linkscroll>
                                <Linkscroll smooth={true} to="book" className="theme-btn differenct-color">Book a free call</Linkscroll>
                            </div>
                            <div className="dot-shape"><img src="/images/shapes/shape1.png" alt="Shape" /></div>
                            <div className="dot-shape2"><img src="/images/shapes/shape2.png" alt="Shape" /></div>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero