type DataType = {
    id: number
    title: string,
    img: string,
    description: string,
    icon: string
}[]

export const workProcessData: DataType = [
    {
        id: 1,
        title: "Subscribe",
        img: "/images/shapes/workprocess-shape1.png",
        icon: "ri-shake-hands-line",
        description: "Select your plan that fits your needs, get access to Trello board within 24 hours, and start listing your requests.",
    },
    {
        id: 2,
        title: "Receive",
        img: "/images/shapes/workprocess-shape2.png",
        icon: "ri-global-fill",
        description: "Nidia Dias is a 3D designer based in the Portugal with an incredible portfolio. From the professional work done with...",
    },
    {
        id: 3,
        title: "Continue",
        img: "/images/shapes/workprocess-shape1.png",
        icon: "ri-stack-line",
        description: "Anta Petrenco shared a beautiful visual identity, branding and packaging design project on their Behance profile...",
    },
]