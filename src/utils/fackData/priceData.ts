type DataType = {
    id: number,
    title: string,
    description: string,
    price: number | string,
    features: {
        id: number
        feature: string,
        available: boolean
    }[]
}[]
export const priceData: DataType = [
    {
        id: 1,
        title: "Standard",
        description: "One request at a time. Pause or cancel anytime.",
        price: "3,999",
        features: [
            {
                id: 1,
                feature: "One request at a time",
                available: true
            },
            {
                id: 2,
                feature: "Unlimited brands",
                available: true
            },
            {
                id: 3,
                feature: "1-2 day revisions",
                available: true
            },
            {
                id: 4,
                feature: "Weekly sync calls",
                available: true
            },
            {
                id: 5,
                feature: "Private Slack channel",
                available: true
            },
            {
                id: 6,
                feature: "Perfect for smaller teams & startups",
                available: true
            },
        ]
    },
    {
        id: 2,
        title: "Premium",
        description: "Double the requests. Pause or cancel anytime.",
        price: '5,999',
        features: [
            {
                id: 1,
                feature: "Two request at a time",
                available: true
            },
            {
                id: 2,
                feature: "Unlimited brands",
                available: true
            },
            {
                id: 3,
                feature: "Priority support & delivery",
                available: true
            },
            {
                id: 4,
                feature: "Weekly sync calls",
                available: true
            },
            {
                id: 5,
                feature: "Private Slack channel",
                available: true
            },
            {
                id: 6,
                feature: "Perfect for smaller teams & startups",
                available: true
            },
        ]

    },
]