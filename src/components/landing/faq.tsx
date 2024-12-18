import Image from "next/image";
import AccordionUsage from "../general/accordionFaq";

const Faq = () => {

    const faqData = [
        {
            id : 1,
            question : 'What does law firm management consulting entail?',
            answer : `what does law firm managment consulting involves analyzing your practice's operations, identifying areas for improvment, and providing strategic solutions to enhance efficiency.`,
            open : true
        },
        {
            id : 2,
            question : 'Are you familiar with latest legal industry trends?',
            answer : `what does law firm managment consulting involves analyzing your practice's operations, identifying areas for improvment, and providing strategic solutions to enhance efficiency.`,
            open : false
        },
        {
            id : 3,
            question : 'What sets your management from others?',
            answer : `what does law firm managment consulting involves analyzing your practice's operations, identifying areas for improvment, and providing strategic solutions to enhance efficiency.`,
            open : false
        },
        {
            id : 4,
            question : 'How do i get started with your management from others?',
            answer : `what does law firm managment consulting involves analyzing your practice's operations, identifying areas for improvment, and providing strategic solutions to enhance efficiency.`,
            open : false
        },
        {
            id : 5,
            question : `Is my firm's information kept confidental?`,
            answer : `what does law firm managment consulting involves analyzing your practice's operations, identifying areas for improvment, and providing strategic solutions to enhance efficiency.`,
            open : false
        },
        {
            id : 6,
            question : 'Can you provide examples of your success stories?',
            answer : `what does law firm managment consulting involves analyzing your practice's operations, identifying areas for improvment, and providing strategic solutions to enhance efficiency.`,
            open : false
        },
    ]
    
    return (
        <div className="flex flex-col gap-16 items-center my-16 lg:w-[90%]" >
            <div className="flex flex-col items-center gap-6" >
                <h3 className=" text-3xl font-[700] text-slate-800  " >Lorem ipsum</h3>
                <p className=" text-slate-500 text-lg font-[500] text-center whitespace-break-spaces " >
                    our law firm management consulting service offers comprehensive solutions
                    to optimize the operaations and growth.
                </p>
            </div>
            <div className="flex  flex-col items-center lg:flex-row lg:tems-start justify-center px-3  w-full gap-24 " >
                <div  className="
                    flex
                    w-[300px]
                    h-[300px]
                    lg:w-[450px]
                    lg:h-[450px]
                    bg-[url('/PNG/Group73469@2x.png')]
                    bg-[size:300px_300px]
                    lg:bg-[size:450px_450px]
                    bg-top
                    bg-no-repeat
                    bg-origin-border                    
                " ></div>
                <div className='w-full lg:w-1/3 flex flex-col gap-2 ' >
                {
                    faqData.map((item , index) => {
                    return <AccordionUsage key={index} data={item} />
                    })
                }
                </div>
            </div>
        </div>
    )
}


export default Faq;