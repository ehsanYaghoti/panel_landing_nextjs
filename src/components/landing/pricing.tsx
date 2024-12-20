'use client';

import { Switch } from "@headlessui/react";
import { useState } from "react";
import PricingCard from "../general/cards/pricingCard";



const Pricing = () => {

    const [enabled, setEnabled] = useState('monthly')

    const cardsData = {
        monthly :  [
            {
                image : '/PNG/Vector@2x.png',
                price : '25',
                status : 'Easy Start',
                features : ['Manage calendars , documents' , 'Accurately track time and bill'],
                default : false,
                kind : 'mo'
            },
            {
                image : '/PNG/Vector@2x-1.png',
                price : '69',
                status : 'Essential',
                features : ['Collaborate with clients' , 'Complete documents faster' , 'Connect your favorite tools'],
                default : false,
                kind : 'mo'

            },
            {
                image : '/PNG/Vector@2x-2.png',
                price : '129',
                status : 'Complete',
                features : ['Visualize case Progress' , 'Never misplace a document'],
                default : false,
                kind : 'mo'
            },
        ],
        yearly :  [
            {
                image : '/PNG/Vector@2x.png',
                price : '500',
                status : 'Easy Start',
                features : ['Manage calendars , documents' , 'Accurately track time and bill'],
                default : false,
                kind : 'year'
            },
            {
                image : '/PNG/Vector@2x-1.png',
                price : '828',
                status : 'Essential',
                features : ['Collaborate with clients' , 'Complete documents faster' , 'Connect your favorite tools'],
                default : true,
                kind : 'year'
            },
            {
                image : '/PNG/Vector@2x-2.png',
                price : '1,548',
                status : 'Complete',
                features : ['Visualize case Progress' , 'Never misplace a document'],
                default : false,
                kind : 'year'
            },
        ]    
    
    }

    return (
        <div id="pricing" className="flex flex-col items-center  gap-8 w-[90%] mt-10  z-40  " >
            
            <div className="flex items-center gap-1  border border-violet-600 rounded-3xl " >
                <button className={`py-2 px-3 transition-colors duration-500 font-[700] rounded-3xl ${enabled === 'monthly' ? 'bg-violet-600 text-white' : 'bg-white text-violet-600' } `} onClick={e => setEnabled('monthly')} >Monthly</button>
                <button className={`py-2 px-3 transition-colors duration-500 font-[700] rounded-3xl ${enabled === 'yearly' ? 'bg-violet-600 text-white' : 'bg-white text-violet-600' } `}  onClick={e => setEnabled('yearly')} >Yearly</button>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-6 " >
                {
                    enabled === 'monthly' ?
                    cardsData.monthly.map((card , index) => {
                        return <PricingCard key={index} card={card} />
                    })
                    : cardsData.yearly.map((card , index) => {
                        return <PricingCard key={index} card={card} />
                    })
                }
            </div>
            
        </div>
    )
}

export default Pricing;