import { ArticleModel } from "@/types/models";
import { useEffect } from "react"

interface Props {
    article :  ArticleModel,
    index : number
}

const TableRow = ({article , index} : Props ) => {

    useEffect(() => { 
        try {
            
        
            if(document.getElementById(`description-${index}`)){
                let parser = new DOMParser();
                let desctiptionElement : HTMLElement = document.getElementById(`description-${index}`) as HTMLElement
                desctiptionElement.innerHTML = parser.parseFromString(article.description  , 'text/html').body.innerHTML
            }

        } catch (error) {
            console.log(error)    
        }
        
    } , [])


    return(
        <tr key={article?.id} className=" divide-x-2 divide-slate-200 min-h-1 h-[50px] max-h-3 overflow-hidden odd:bg-slate-100 " >
            <td className="p-2  h-full text-center " >{article?.id}</td>
            <td className="p-2  h-full  text-center  " >{article?.title}</td>
            <td className="p-2  h-full  text-center flex items-center justify-center " >
                <img className="h-8 w-8 rounded-full object-cover border border-blue-400  text-center " src={article?.image} alt={article?.title} />
            </td>
            <td className="p-2 h-2 overflow-hidden  text-clip text-center text-wrap "  id={`description-${index}`} >{article?.description}</td>
            <td className="p-2 h-full  text-center " >{article?.author}</td>
            <td className="p-2 h-full  text-center " >{new Date(article?.createdAt).toLocaleDateString()}</td>

        </tr>
    )
}

export default TableRow;