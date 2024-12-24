import Image from "next/image";

interface Props {
    card : {
        image : string;
        price : string;
        status : string;
        features : string[];
        default : boolean,
        kind : string,
    }
}

const PricingCard = ({card} : Props ) => {

    return (
        <div className={`flex flex-col items-center gap-4 px-8 py-6 text-slate-700 border border-slate-100 group  rounded-2xl  bg-white
            hover:drop-shadow-sm hover:scale-105 
            transition-all 
            ${card.default ? 'shadow-[rgb(124,58,237)_0px_-5px_0px_0px,rgba(93,92,92,0.1)_5px_5px_10px,rgba(93,93,93,0.1)_-5px_5px_10px]' : 'shadow-xl ' }
            hover:shadow-[rgb(124,58,237)_0px_-5px_0px_0px,rgba(93,92,92,0.1)_5px_5px_5px,rgba(93,93,93,0.1)_-5px_5px_5px]
        `}>
            <div className="flex flex-col px-6 gap-2 items-center pb-4 border-b-2 border-dashed border-slate-200 " >
                <Image src={card.image} alt="pricing" width={75} height={75} className="mb-6 w-auto h-auto" />
                <p className="flex items-end" >
                    <span className="text-4xl font-[700] " >${card.price}</span> 
                    <span className="text-base text-slate-500" >/{card.kind}</span>
                </p>
                <span className=" text-base font-[600]  " >Get your 14 day free trial</span>
                <span className="text-violet-600 text-xl font-[600] "   >{card.status}</span>
            </div>
            <div className="flex flex-col items-center gap-6    " >
                <ul className="flex flex-col items-start gap-4" >
                    {
                        card.features.map((feature , index) => {
                            return <li key={index} className="flex items-center gap-2" >
                                <i className="text-violet-500 " >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </i>
                                <span className=" text-sm font-[700]" >{feature}</span>
                            </li>
                        })
                    }
                </ul>

                <button className=" px-4 py-1  rounded-3xl border border-violet-600 text-violet-500 bg-white group-hover:bg-violet-600 group-hover:text-white font-[700] group-hover:hover:bg-opacity-90 " >Purchase Now</button>
            </div>
            
        </div>
    )

}

export default PricingCard;