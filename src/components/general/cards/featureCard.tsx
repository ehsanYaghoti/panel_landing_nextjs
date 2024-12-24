import Image from "next/image";

interface Props {
    card : {
        image : string;
        title : string;
        statement : string;
    }
}

const FeatureCard = ({card} : Props ) => {

    return (
       <div className="flex flex-col items-center gap-5 w-64 px-3 py-6 cursor-pointer rounded-lg hover:shadow-xl hover:bg-white hover:border hover:border-slate-100" >
            <Image src={card.image} alt={card.title} width={100} height={100} className="w-auto h-auto" />
            <h4 className=" text-2xl font-[700] text-slate-800 " >{card.title}</h4>
            <p className=" text-sm font-[500] text-slate-500  text-center  " >{card.statement}</p>
       </div>
    )

}

export default FeatureCard;