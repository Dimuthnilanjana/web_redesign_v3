import Image from "next/image"
import SlideUp from "@/utils/animations/slideUp"

const About = () => {
    return (
        <section className="funder-says-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SlideUp className="founder-say-part text-center">
                            <h3>Designpro took my billion-dollar baby idea, slapped their design magic on it, and boom
                                –<span>branding so good it makes my other ventures look like lemonade stands.</span>Twist
                                isn't just a design agency; they're your ticket to the big leagues.</h3>
                            <div className="founder-name-part">
                                <Image width={80} height={80} src="/images/about/founder.png" alt="founder" title="founder" />
                                <h2>Dimuth Nilanjana</h2>
                                <p>UI/UX Engineer</p>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About