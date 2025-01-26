import Image from "next/image"
import { portfolioData } from "@/utils/fackData/portfolioData"

const RecentProjects = () => {
    return (
        <div className="recent-projects-area" id="portfolio">
            <div className="custom-icon">
                <Image width={300} height={165} src="/images/shapes/work-scribble.png" alt="custom" />
            </div>
            <div className="container-fluid">
                <div className="row">
                    {
                        portfolioData.map(({ id, img }) => {
                            return (
                                <div key={id} className="col-md-3 col-sm-6">
                                    <div className="single-header-work-img">
                                        <Image width={436} height={296} src={img} style={{width:"100%", height:"auto"}} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt="img" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default RecentProjects