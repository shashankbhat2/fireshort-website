import React from 'react'
import { Link } from './link'

type Props = {
    price: number;
    isMonthly: boolean;
    popular: boolean;
    variant: string;
    features: string[];  
}

const PricingCard = ({price, variant, features, popular, isMonthly}: Props) => {
    return (
        <div
            className={`relative flex lg:min-w-[350px] flex-col overflow-hidden cursor-pointer justify-center items-start gap-5 shadow-sm border p-8 rounded-md ${popular ? "animated-gradient border-fireshort_primary border-2" : "border"} text-slate-500 bg-white md:hover-translate`}
        >
            <div className="flex flex-col font-bold gap-4">
                {
                    popular && (
                        <div className="text-sm border-fireshort_primary border rounded-md   bg-red-100 text-fireshort_primary p-2">
                            Best Option
                        </div>
                    )
                }
                <h1 className="text-4xl text-black">
                    ${price}/{isMonthly ? "m" : "life time"}
                </h1>
                <p className="text-md text-muted-foreground font-medium">{variant}</p>
            </div>
            <div className="flex flex-col gap-2 p-2">
                {features.map((feature, i) => <p key={i} className="text-lg font-medium">{feature}</p>)}
            </div>
            <Link
                href="https://app.fireshort.in/pricing"
                className=" w-full bg-fireshort_primary uppercase tracking-wider text-white font-bold py-2 px-4 rounded-md hover:bg-primary-dark"
            >Get Plan
            </Link>
        </div>
    )
}

export default PricingCard