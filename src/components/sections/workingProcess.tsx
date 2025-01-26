import Image from "next/image"
import SectionTitle from "@/components/ui/sectionTitle"
import SlideUp from "@/utils/animations/slideUp"
import { workProcessData } from "@/utils/fackData/workProcessData"

const WorkingProcess = () => {
    return (
        <section id="how" className="working-process-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <SectionTitle>
                            <SectionTitle.Name>Work Process</SectionTitle.Name>
                            <SectionTitle.Title>We design. You grow</SectionTitle.Title>
                            <SectionTitle.Description>Our process is as simple as possible.</SectionTitle.Description>
                        </SectionTitle>
                    </div>
                </div>
                <div className="row work-process-list">
                    {
                        workProcessData.map(({ description, id, img, title, icon }, index) =>
                            <Card key={id} description={description} id={id} img={img} title={title} icon={icon} index={index} />
                        )
                    }
                </div>
            </div>
        </section>

    )
}

export default WorkingProcess

type PropsType = {
    img: string,
    id: number,
    title: string,
    description: string,
    index: number,
    icon: string
}
const Card = ({ img, id, title, description, index, icon }: PropsType) => {
    return (
        <SlideUp delay={id} className="col-xl-4 col-lg-4">
            <div className="working-process-one__single text-center">
                {
                    index !== 0 &&
                    <div className="working-process-one__shape4">
                        <Image width={215} height={47} src={img} alt="shapes" />
                    </div>
                }

                <div className="icon-box"><i className={icon} />
                    <div className="overlay-list"><span>0{id}</span></div>
                </div>
                <div className="content-box">
                    <div className="title-box">
                        <h3><a href="#">{title}</a></h3>
                    </div>
                    <div className="text-box">
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </SlideUp>
    )
}