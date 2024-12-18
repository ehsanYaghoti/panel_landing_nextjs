

const HeroSection = () => {

    return (
        <div className="flex flex-col items-center  gap-8 w-full mt-20 z-40 " >
            <span className="text-violet-600 text-base font-[700]" >Tailored Pricing</span>
            <h2 className=" flex flex-col items-center gap-5 text-center text-3xl  md:text-6xl text-slate-700  font-[700]  whitespace-pre-line " >
                <span>Lorem ipsum dolor sit</span>
                <span>amet, consectetuer</span>
            </h2>
            <p className="flex flex-col gap-2 items-center whitespace-pre-line text-base w-[90%] md:text-lg text-slate-400 text-center  font-[600] " >
                Wether you're a startup,a growing business,or an enterprise,our pricing plans
                are designed to accommodate various requirements.
            </p>
        </div>
    )
}

export default HeroSection;