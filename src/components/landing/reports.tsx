import Image from "next/image";
import FeatureCard from "../general/cards/featureCard";

const Reports = () => {
    
    return (
        <div id="products" className="flex flex-col gap-20 items-center my-24 w-full md:w-[90%]" >
            <div className="flex flex-col items-center gap-6 w-full" >
                <h3 className=" text-3xl font-[700] text-slate-800 text-center w-full  " >Lorem ipsum dolor sit</h3>
                <p className="w-[90%] md:w-[55%] text-slate-500 text-base font-[500] text-center " >
                    Embark on a journy of pure delight as you savor the exprience across every package we offer.Our
                    delivers range of plans is meticulously crafted to cater to your unique preferences and desires.
                </p>
            </div>
            <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between gap-4 md:gap-16 " >
                
                <div  className="
                    w-[45%]
                    xl:w-1/2
                    flex flex-col items-center gap-10
                    bg-[url('/PNG/Vector329@2x.png')]
                    bg-contain
                    bg-center
                    bg-no-repeat

                    md:bg-origin-border                    
                " >
                    <div className="flex items-center justify-between translate-y-32 md:translate-y-6 -translate-x-20 " >
                        <Image className="object-contain w-auto h-auto" src={'/PNG/Group 73553@2x.png'} alt="trust" width={170} height={170}  />
                        <div className="flex flex-col items-start gap-5" >
                            <h4 className="text-base whitespace-nowrap md:text-2xl font-[700]" >Trust Our secure</h4>
                            <p className="hidden md:flex text-slate-500 font-[500] " >
                                our commitment to exellence has been recognized
                                through numerous accolades, solidifying our position
                                as an award-winning entity in our field.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center flex-row-reverse translate-y-3 translate-x-20  "  >
                        <Image className=" object-fit  w-auto h-auto" src={'/PNG/Group73552@2x.png'} alt="trust" width={170} height={170}  />
                        <div className="flex flex-col items-start gap-5 text-right" >
                            <h4 className="text-base md:text-2xl whitespace-nowrap font-[700] text-right" >Award-winning</h4>
                            <p className="text-slate-500 hidden md:flex font-[500] text-left  " >
                                Experience the freedom of a seamless and worry-
                                free data transition with our complimentary service.
                                we understand the significance of your data. 
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center -translate-y-28 md:-translate-y-6 -translate-x-16 " >
                        <Image className=" object-contain  w-auto h-auto " src={'/PNG/Group73554@2x.png'} alt="trust" width={170} height={170}  />
                        <div className="flex flex-col items-start gap-3" >
                            <h4 className="text-base md:text-2xl whitespace-nowrap font-[700]" >Free data Transition</h4>
                            <p className="text-slate-500 hidden md:flex font-[500] " >
                                Trust is our secure solutions lies at the core of our
                                commitment to your digital well-being. We prioritize
                                the robustness of our systems.dd
                            </p>
                        </div>
                    </div>
                    
                </div>

                <div className="
                    flex
                    bg-transparent
                    z-50
                    w-[300px]
                    h-[250px]
                    md:w-[700px]
                    md:h-[700px]
                    bg-[url('/PNG/Group73443@2x.png'),_url('/PNG/Group73429@2x.png'),_url('/PNG/Ellipse350@2x.png'),_url('/PNG/Ornament31@2x.png')] 
                    bg-[size:150px_140px,300px_250px,200px_200px,_100px_200px] 
                    md:bg-[size:320px_320px,600px_550px,525px_525px,_200px_300px] 
                    bg-[position:100%_bottom,left_10px,right_10px,_95%_top] 
                    md:bg-[position:right_bottom,left_100px,right_50px,_95%_top] 
                    bg-no-repeat
                    bg-origin-content
                "></div>
            </div>
        </div>
    )
}


export default Reports;