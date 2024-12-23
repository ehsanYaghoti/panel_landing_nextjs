import { withFormik } from "formik";
import * as yup from 'yup';
import { LoginFormProps, LoginFormValues } from "@/types/auth";
import InnerLoginForm from "@/components/forms/auth/innerLoginForm";
import { UserModel } from "@/types/models";
import { toast } from "react-toastify";
import { comparePassword, getUser, isUserAlreadyExist } from "@/helpers/user";
import { storeLoginToken } from "@/helpers/auth";

const phoneRegExp = /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/
const strongPassRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/


const loginFormValidationSchema = yup.object().shape({
    email: yup.string().required().email(),
    phone_number : yup.string().required().matches(phoneRegExp , 'the phone number field is not valid format'),
    password: yup.string().required().min(8).matches(strongPassRegExp , 'the password should be contain at least one uppercase and lower case and number and symbol')
})

const LoginForm = withFormik<LoginFormProps, LoginFormValues>({
    mapPropsToValues: props => ({
        email: '',
        phone_number : "",
        password: '',
    }),
    validationSchema: loginFormValidationSchema,
    handleSubmit: async (values , { props , setFieldError   }) => {
        try {
            
            const { router , storeUser } = props

            const user = await getUser(values)
            const isPasswordValidate = await comparePassword(values , user)


            if(! user){
                toast.error('this email is NOT registered before')
                setFieldError('email' , 'this email is not exist')
                return 
            }

            if(! isPasswordValidate){
                toast.error('this password is wrong')
                setFieldError('email' , 'some info is wrong')
                setFieldError('password' , 'some info is wrong')
                return 
            }


            const res = await storeLoginToken(user?.token)

            if(res?.success){
                
                console.log('cookie has been set')

                localStorage.setItem('userId' , user?.id)
                localStorage.setItem('user' , JSON.stringify(user))


                storeUser(user)


                toast.success('login was successfull now you can access panel')
                
                router.push('/')                    
            }
            
        } catch (error) {
            console.log(error)
        }
    }
})(InnerLoginForm)

export default LoginForm;