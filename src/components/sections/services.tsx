import Image from "next/image"
import SectionTitle from "@/components/ui/sectionTitle"
import SlideUp from "@/utils/animations/slideUp"
import { servicesData } from "@/utils/fackData/servicesData"

const Services = () => {
    return (
        <section id="service" className="info-service-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <SectionTitle>
                            <SectionTitle.Name>Services</SectionTitle.Name>
                            <SectionTitle.Title>Apps, websites &amp; branding</SectionTitle.Title>
                            <SectionTitle.Description>Get expert solutions for every design need</SectionTitle.Description>
                        </SectionTitle>
                    </div>
                </div>
                <div className="row">
                    {
                        servicesData.map(({ description, id, img, title }) =>
                            <Card key={id} description={description} id={id} img={img} title={title} />
                        )
                    }

                </div>
            </div>
        </section>

    )
}

export default Services

interface PropsType {
    id: number,
    title: string,
    description: string,
    img: string
}
const Card = ({ id, title, description, img }: PropsType) => {
    return (
        <div className="col-lg-4 col-md-6">
            <SlideUp delay={id} className="info-item">
                <div className="info-content">
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
                <Image width={384} height={384} src={img} style={{width:"100%", height:"auto"}} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt="img" />
            </SlideUp>
        </div>
    )
}