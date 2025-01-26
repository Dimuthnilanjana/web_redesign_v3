import SlideUp from "@/utils/animations/slideUp"
import { ReactNode } from "react"

interface PropsType {
    children: ReactNode,
    className?: string
}

const Name = ({ children, className }: PropsType) => {
    return (
        <h3 className={className}><i className="ri-arrow-right-up-line" />{children}</h3>
    )
}

const Title = ({ children, className }: PropsType) => {
    return (
        <h2 className={className}>{children}</h2>
    )
}

const Description = ({ children, className }: PropsType) => {
    return (
        <p className={className}>{children}</p>
    )
}

const SectionTitle = ({ children, className }: PropsType) => {
    return (
        <SlideUp delay={2} className={`section-title text-center ${className}`}>
            {children}
        </SlideUp>
    )
}

SectionTitle.Name = Name
SectionTitle.Title = Title
SectionTitle.Description = Description
export default SectionTitle
