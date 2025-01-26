'use client'
import Image from "next/image";
import SectionTitle from "@/components/ui/sectionTitle";
import { portfolioData } from "@/utils/fackData/portfolioData"
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Projects = () => {
    return (
        <div className="projects-area" id="project">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <SectionTitle>
                            <SectionTitle.Name>Projects</SectionTitle.Name>
                            <SectionTitle.Title>Featured Projects</SectionTitle.Title>
                            <SectionTitle.Description>Get a glimpse of our work</SectionTitle.Description>
                        </SectionTitle>
                    </div>
                </div>
                <PhotoProvider>
                    <div className="row g-4 portfolio-grid">
                        {
                            portfolioData.map(({ category, id, img, title }) =>
                                <Card key={id} category={category} img={img} title={title} />
                            )
                        }
                    </div>
                </PhotoProvider>
                <div className="row">
                    <div className="hero-btns text-center"><a href="#" className="theme-btn">View all works</a></div>
                </div>
            </div>
        </div>

    )
}

export default Projects

interface PropsType {
    img: string,
    title: string,
    category: string
}
const Card = ({ img, title, category }: PropsType) => {
    return (
        <div className="col-md-6 col-xl-6 portfolio-item category-2">
            <PhotoView src={img}>
                <div className="portfolio-box work-popup">
                    <Image src={img} width={636} height={432} style={{width:"100%", height:"auto"}} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt="img" />
                    <span className="portfolio-category">{category}</span>
                    <div className="portfolio-caption">
                        <h1>{title}</h1>
                    </div>
                </div>
            </PhotoView>
        </div>
    )
}