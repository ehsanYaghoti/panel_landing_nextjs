'use client';

import Image from "next/image";
import {FacebookOutlined, Instagram, MailOutline, YouTube } from "@mui/icons-material";
import Link from "next/link";

const Footer = () => {
    
    return (
        <div className="flex flex-col w-full mt-8" >
            <div className="w-full h-[150px] py-[20px] px-0 overflow-hidden bg-gradient-to-b from-transparent from-[50%] to-slate-950 to-[50%]  " >
                <div className="h-full rounded-[50%] bg-white my-0 mx-[-50px] " ></div>
            </div>
            <div className="flex  flex-col  gap-20 items-center justify-between w-full pb-4 pt-20 px-6 md:px-10 text-slate-50 border-t border-t-slate-950 bg-slate-950" >
                
                <div className=" flex flex-col lg:flex-row flex-wrap items-center lg:items-start justify-between gap-20 w-full" >
                    <div className="flex flex-col items-start gap-4" >
                        <div className="flex items-center gap-2" >
                            <Image className="object-contain" src={'/PNG/Layer 2@2x.png'} alt="Sodci" width={60} height={60} />
                            <h4 className=" text-white font-[800] text-2xl" >Sodci</h4>
                        </div>
                        <p className=" text-base text-left w-64  md:w-72" >
                            At [Law Firm Name], we understand the
                            intricate balance between legal expertise
                            and operational efficiency.
                        </p>
                        <div className="flex items-start gap-6" >
                            <i className="p-2 border border-slate-100 rounded-md cursor-pointer hover:bg-violet-600 hover:text-white hover:border-transparent  flex items-center justify-center" >
                                <FacebookOutlined  />
                            </i>
                            <i className="p-2 border border-slate-100 rounded-md cursor-pointer hover:bg-violet-600 hover:text-white hover:border-transparent  flex items-center justify-center" >
                                <Instagram />
                            </i>
                            <i className="p-2 border border-slate-100 rounded-md cursor-pointer hover:bg-violet-600 hover:text-white hover:border-transparent  flex items-center justify-center" >
                                <YouTube />
                            </i>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-start gap-36" >
                        <div className=" flex flex-col items-start gap-6 " >
                            <h4 className="text-xl font-[700]" >Products</h4>
                            <div className="flex flex-col items-start gap-3"  >
                                <span className=" text-base font-[400] hover:text-opacity-50 cursor-pointer" >Cilo Complete</span>
                                <span className=" text-base font-[400] hover:text-opacity-50 cursor-pointer" >Cilo Manage</span>
                                <span className=" text-base font-[400] hover:text-opacity-50 cursor-pointer" >Lawyaw</span>
                                <span className=" text-base font-[400] hover:text-opacity-50 cursor-pointer" >Cilo for Clients</span>
                            </div>
                        </div>
                        <div className=" flex flex-col items-start gap-6 " >
                            <h4 className="text-xl font-[700]" >Features</h4>
                            <div className="flex flex-col items-start gap-3"  >
                                <span className=" text-base font-[400] hover:text-opacity-50 cursor-pointer" >Clients Intake</span>
                                <span className=" text-base font-[400] hover:text-opacity-50 cursor-pointer" >Biling & Collections</span>
                                <span className=" text-base font-[400] hover:text-opacity-50 cursor-pointer" >Case Management</span>
                                <span className=" text-base font-[400] hover:text-opacity-50 cursor-pointer" >Task Management</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-6" >
                        <h4 className="font-[700] text-xl" >Accelerate your roadmap with Rightfoot.</h4>
                        <form noValidate onSubmit={e => e.preventDefault()} className="flex flex-col items-start gap-3 py-4 px-3 bg-gray-800  rounded-lg w-full md:w-[400px]" >
                            <label htmlFor="email" className="font-[500] text-xl " >Email</label>
                            <div className=" relative w-full " >
                                <input type="text" className=" w-full outline-none border border-slate-500 rounded-md px-4 pr-6 py-2 bg-transparent "  />
                                <MailOutline className=" absolute right-2 top-2 "  />
                            </div>
                            <div className="flex items-start gap-2 md:gap-6 w-full" >
                                <div className="flex items-start gap-2" >
                                    <input type="checkbox" name="agreement" id="agreement" className=" translate-y-1  w-4 h-4  bg-red-500  text-transparent p-2 rounded-lg text-orange-400" />
                                    <p className="text-left" >
                                        I agree with <Link href={{pathname:'/agreement'}} className=" text-violet-600 " >Terms of use</Link> and <Link href={{pathname:'/privacy'}} className=" text-violet-600 " >Privact Policy</Link> 
                                    </p>                                    
                                </div>
                                <button type="submit" className=" flex items-center gap-2 px-3 py-2 bg-violet-600 hover:bg-opacity-70 rounded-lg "  >
                                    <span className="font-[500] text-base" >Send</span>
                                    <i className=" text-white  z-20 flex w-5 h-5 -rotate-45 -translate-y-1 " >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                        </svg>
                                    </i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <h6 className="text-center" >@ 2008-2023 Themis Solutions Inc. (Cilo) | 300-4611 Canada Way, Burnaby, BC V5G 4X3</h6>
            </div>
        </div>

    )
}


export default Footer;