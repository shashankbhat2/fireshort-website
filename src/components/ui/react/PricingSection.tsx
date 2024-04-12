import { PRICING_PLANS } from '@/lib/constants'
import PricingCard from './PricingCard'
import { Switch } from "./switch";
import { Fragment, useState } from 'react';

const PricingSection = () => {
    const [isLifetime, setIsLifetime] = useState(false)

    const togglePricingMode = () => {
        setIsLifetime(!isLifetime)
    }


    return (
        <Fragment>
            <div className="flex gap-2 items-center justify-center">
                <Switch onClick={togglePricingMode} checked={isLifetime} />
                <p>Lifetime Deal</p>
            </div>
            {!isLifetime && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
                {PRICING_PLANS.filter((plan) => plan.isMonthly).map((plan, i) => (
                    <PricingCard
                        key={i}
                        variant={plan.variant}
                        isMonthly={plan.isMonthly}
                        popular={plan.popular}
                        features={plan.features}
                        price={plan.price}
                    />
                ))}
            </div>}
            {isLifetime && <div className='flex justify-center items-center'>
                {PRICING_PLANS.filter((plan) => !plan.isMonthly).map((plan, i) => (
                    <PricingCard
                        key={i}
                        variant={plan.variant}
                        isMonthly={plan.isMonthly}
                        popular={plan.popular}
                        features={plan.features}
                        price={plan.price}
                    />
                ))
                }
            </div>}
        </Fragment>
    )
}

export default PricingSection