import Image from "next/image"
import SlideUp from "@/utils/animations/slideUp"

const Booking = () => {
    return (
        <section id="book" className="call-to-action-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SlideUp className="call-to-action-part text-center">
                            <h2>See if DesignPro is right for you. (It totally is.)</h2>
                            <p>Get a guided tour through DesignPro, and find out how you and your team can change the way
                                you source design, forever.</p>
                            <div className="hero-btns">
                                <a href="#" className="theme-btn">Book a free call</a>
                            </div>
                            <a href="#">
                                <Image width={200} height={54} src="/images/logos/logo.png" alt="Logo" title="Logo" />
                            </a>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Booking