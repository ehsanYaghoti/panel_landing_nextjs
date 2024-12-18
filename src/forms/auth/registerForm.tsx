import { withFormik } from "formik";
import * as yup from 'yup';
import { RegisterFormProps, RegisterFormValues } from "@/types/auth";
import InnerRegisterForm from "@/components/forms/auth/innerRegisterForm";
import { isUserAlreadyExist } from "@/helpers/user";
import { toast } from "react-toastify";
// import callApi from "@/helpers/callApi";

const phoneRegExp = /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/
const strongPassRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

const registerFormValidationSchema = yup.object().shape({
    username: yup.string().required().min(4),
    email: yup.string().required().email(),
    phone_number : yup.string().required().matches(phoneRegExp , 'the phone number field is not valid format'),
    password: yup.string().required().min(8).matches(strongPassRegExp , 'the password should be contain at least one uppercase and lower case and number and symbol')
})

const RegisterForm = withFormik<RegisterFormProps, RegisterFormValues>({
    mapPropsToValues: props => ({
        username: '',
        phone_number : '',
        email: '',
        password: '',
    }),
    validationSchema: registerFormValidationSchema,
    handleSubmit: async (values , {props , setFieldError}) => {
        try {
            
            const {router} = props

            const isUserExist = await isUserAlreadyExist(values)

            console.log('is user' , isUserExist)

            if(isUserExist){
                toast.error('this email is registered before')
                setFieldError('email' , 'this email already exist')
                return 
            }




            const formData = {
                email : values.email,
                phone_number : values.phone_number,
                password : values.password,
                token : Date.now(),
                admin : values.email === 'ehsan.yaghoti@yahoo.com' ? true : false,
                username : values.email.replace(/@.+/ , '')
            }

            const res = await fetch('https://6759b1ae099e3090dbe29875.mockapi.io/api/users' , {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(formData)
            })

            console.log(res)


            if(res.ok){
                toast.success('register was successfull now login in login page')

                router.push('/auth/login')
            }

        
        } catch (error) {
            console.log(error)
        }


    }
})(InnerRegisterForm)

export default RegisterForm;