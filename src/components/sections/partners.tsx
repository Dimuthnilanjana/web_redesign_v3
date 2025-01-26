'use client'
import Marquee from "react-fast-marquee";
import { clientLogoData } from "@/utils/fackData/clientLogoData";

const Partners = () => {
    return (
        <div className="company-design-area partner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Top companies trust us with their design</h2>
                        <div className="company-list">
                            <div className="scroller">
                                <Marquee>
                                    {
                                        clientLogoData.map(({ id, img }) => <img key={id} src={img} alt="company logo" />)
                                    }
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Partners