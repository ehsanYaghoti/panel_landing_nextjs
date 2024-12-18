import FeatureCard from "../general/cards/featureCard";

const Features = () => {

    const featuresCardsData = [
        {
            image : '/PNG/Group73549@2x.png',
            title : 'Cilo Grow',
            statement : 'Cilo Grow stands as a powerful ally for businesses seekin to elevate their operations.'
        },
        {
            image : '/PNG/Group73548@2x.png',
            title : 'Personal injury',
            statement : 'Personal injury cases arise when an individual suffers harm, either physically or emotionally.'
        },
        {
            image : '/PNG/Group73550@2x.png',
            title : 'HIPAA Protection',
            statement : 'Committed to maintaining compliance with the Health Insurance Portabilty.'
        },
        {
            image : '/PNG/Group73551@2x.png',
            title : 'Efficient Document',
            statement : 'Cilo Grow stands as a powerful ally for businesses to elevate their operations.'
        },
    ]

    return (
        <div id="practicingtypes" className="flex flex-col gap-20 items-center my-24 w-full" >
            <div className="flex flex-col items-center gap-6 px-2 w-full" >
                <h3 className=" text-xl md:text-3xl font-[700] text-slate-800 text-center w-full  " >Lorem ipsum dolor sit amet consectetur adipisicing</h3>
                <p className="flex flex-col items-center text-slate-500 text-base font-[500] w-[90%] text-center" >
                    Elevate your overall experience by choosing to boost your plan with our exclusive extras.
                    We believe in providing our users with more than just a standard pcakage.
                </p>
            </div>
            <div className="flex flex-col flex-wrap md:flex-row items-center justify-center gap-6">
                {
                    featuresCardsData.map((feature , index) => {
                        return <FeatureCard key={index} card={feature} />
                    })
                }
            </div>
        </div>
    )
}


export default Features;