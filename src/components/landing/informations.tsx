import BasicSelect from "../general/select";
import BasicTooltip from "../general/tooltip";
import ColorSlider from "../general/slider";

const Informaitons = () => {

    const selectData_1 = [
        {
            value : '1',
            label : '1'
        },
        {
            value : '2',
            label : '2'
        },
        {
            value : '3',
            label : '3'
        },
        {
            value : '4',
            label : '4'
        },
        {
            value : '5',
            label : '5'
        },
    ] 

    const selectData_2 = [
        {
            value : '6',
            label : '6'
        },
        {
            value : '7',
            label : '7'
        },
        {
            value : '8',
            label : '8'
        },
        {
            value : '9',
            label : '9'
        },
        {
            value : '10',
            label : '10'
        },
    ] 
    
    return (
        <div  id="practicing" className="flex flex-col gap-20 items-center my-24 w-full py-32 bg-slate-50" >
            <div className="flex flex-col items-center gap-6" >
                <h3 className=" text-3xl font-[700] text-slate-800  text-center " >Lorem ipsum dolor sit amet, consectetuer</h3>
                <p className=" text-slate-500 text-base font-[500] text-center whitespace-break-spaces " >
                    Incorporating Cilo into your film's operations can be a transformative step towards maximizing
                    revenue. By seamlessly integrating Cilo's powerful tools and features.
                </p>
            </div>
            <div className="flex flex-col xl:flex-row items-start  gap-32 w-full h-fit xl:h-[500px] px-1 md:px-6 xl:px-24 " >
                <div className="flex flex-col items-center gap-6 w-full xl:w-1/2 h-full  p-8" >
                    <div className="flex items-center gap-6" >
                        <div className="flex flex-col items-start gap-4" >
                            <div className="flex items-center gap-2" >
                                <label className="font-[700] text-base text-slate-700" >Billiable Staff</label>
                                <BasicTooltip title="Billiable Staff" />
                            </div>
                            <BasicSelect data={selectData_1}  />
                        </div>
                        <div className="flex flex-col items-start gap-4" >
                            <div className="flex items-center gap-2" >
                                <label className="font-[700] text-base text-slate-700" >Billiable Staff</label>
                                <BasicTooltip title="Billiable Staff" />
                            </div>
                            <BasicSelect data={selectData_2}  />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 w-full " >
                        <div className="flex flex-col gap-3" >
                            <div className="flex items-center gap-2" >
                                <label className="font-[700] text-base text-slate-700" >Hours spent on billable tasks</label>
                                <BasicTooltip title="Billiable Staff" />
                            </div>
                            <ColorSlider defaultValue={80} label="Hours" labelFormat="Hours" />
                        </div>
                        <div className="flex flex-col gap-3" >
                            <div className="flex items-center gap-2" >
                                <label className="font-[700] text-base text-slate-700" >Hourly Rate</label>
                                <BasicTooltip title="Billiable Staff" />
                            </div>
                            <ColorSlider defaultValue={10} label="$" labelFormat="$" />
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-3 w-full" >
                        <div className="flex items-center gap-2" >
                            <label className="font-[700] text-base text-slate-700" >Legal Plan</label>
                            <BasicTooltip title="Legal plan" />
                        </div>
                        <div className="flex items-center gap-4  justify-between w-full flex-wrap" >
                            <button className="border px-3 py-2 bg-transparent text-slate-400 border-slate-400 font-[600] rounded-md hover:text-opacity-60 focus:bg-violet-600 focus:text-white "  >EasyStart</button>
                            <button className="border px-3 py-2 bg-transparent text-slate-400 border-slate-400 font-[600] rounded-md hover:text-opacity-60 focus:bg-violet-600 focus:text-white " >Essentials</button>
                            <button className="border px-3 py-2 bg-transparent text-slate-400 border-slate-400 font-[600] rounded-md hover:text-opacity-60 focus:bg-violet-600 focus:text-white " >Essentials</button>
                            <button className="border px-3 py-2 bg-transparent text-slate-400 border-slate-400 font-[600] rounded-md hover:text-opacity-60 focus:bg-violet-600 focus:text-white " >complete</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-6 bg-white shadow-md rounded-lg px-3 md:px-6 py-5 w-full h-fit xl:w-1/2 xl:h-full" >
                    <div className="flex flex-col items-center gap-3" >
                        <h4 className="font-[700] text-lg text-slate-800 text-center" >Projected Monthly Revenue Upsurge</h4>
                        <span className="text-violet-600 text-2xl font-[800]" >$124,365</span>
                    </div>
                    <div  className="flex flex-col items-center w-full gap-4" >
                        <div className="flex items-center justify-between w-full px-3 py-4 border border-slate-200 rounded-lg " >
                            <div className="flex items-start md:items-center md:gap-2" >
                                <label className="font-[700] text-base text-slate-700" >Monthly admin hour saved</label>
                                <BasicTooltip title="Legal plan" />
                            </div>
                            <span className=" text-violet-600 font-[700] md:text-lg ml-4 md:ml-0 whitespace-nowrap" >70 Hours</span>
                        </div>
                        <div className="flex items-center justify-between w-full px-3 py-4 border border-slate-200 rounded-lg " >
                            <div className="flex items-center md:gap-2" >
                                <label className="font-[700] text-base text-slate-700" >Monthly cost of legel</label>
                                <BasicTooltip title="Legal plan" />
                            </div>
                            <span className=" text-violet-600 font-[700] text-lg ml-10 md:ml-0" >$550</span>
                        </div>
                        <div className="flex items-center justify-between w-full px-3 py-4 border border-slate-200 rounded-lg " >
                            <div className="flex items-center md:gap-2" >
                                <label className="font-[700] text-base text-slate-700" >Monthly cost of payments</label>
                                <BasicTooltip title="Legal plan" />
                            </div>
                            <span className=" text-violet-600 font-[700] text-lg ml-10 md:ml-0" >$300</span>
                        </div>
                        <div className="flex items-center justify-between w-full px-3 py-4 border border-slate-200 rounded-lg " >
                            <div className="flex items-center md:gap-2" >
                                <label className="font-[700] text-base text-slate-700 " >Return on investment</label>
                                <BasicTooltip title="Legal plan" />
                            </div>
                            <span className=" text-violet-600 font-[700] text-lg ml-14 md:ml-0" >20x</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Informaitons;