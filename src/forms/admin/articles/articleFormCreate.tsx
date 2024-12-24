import { withFormik } from "formik";
import * as yup from 'yup';
import { toast } from "react-toastify";
import { ArticleFormProps, ArticleFormValues } from "@/types/article";
import InnerArticleForm from "@/components/forms/articles/innerArticleFormCreate";

const articleFormValidationSchema = yup.object().shape({
    title: yup.string().required().min(6).max(24),
    language: yup.string().required(),
    summary: yup.string().required().min(32).max(64),
    description : yup.string().required().min(64),
})

const ArticleFormCreate = withFormik<ArticleFormProps, ArticleFormValues>({
    mapPropsToValues: props => ({
        title : '',
        language : 'en',
        summary :'',
        description : ''
    }),
    validationSchema: articleFormValidationSchema,
    handleSubmit: async (values , { props , setFieldError   }) => {
        try {
            
            const { router } = props

            console.log(values)

            const user = JSON.parse(localStorage.getItem('user') as string)

            const formData = {
                title : values.title,
                language : values.language,
                summary : values.summary,
                description : values.description,
                author : user?.username             
            }

            const articlesStorage = localStorage.getItem('articles')

            if(articlesStorage === null){
                return localStorage.setItem('articles' , JSON.stringify([{...formData}] ))
            }

            const articlesList = JSON.parse(articlesStorage)

            articlesList.push({...formData})

            localStorage.setItem('articles' , JSON.stringify(articlesList))

            

            const res = await fetch('https://6759b1ae099e3090dbe29875.mockapi.io/api/articles' , {
                method : "POST",
                headers : {
                    'Content-Type' : "application/json"
                },
                body : JSON.stringify(formData)
            })

            console.log(res)

            if(res.ok){
                toast.success('create article was successfull')
                router.push('/admin/articles')
            }
            
        } catch (error) {
            console.log(error)
        }
    }
})(InnerArticleForm)

export default ArticleFormCreate;