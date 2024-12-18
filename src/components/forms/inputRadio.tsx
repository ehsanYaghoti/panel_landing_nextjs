import { FormInputProps } from "@/types/auth";
import { ErrorMessage, Field } from "formik";
import { FC } from "react";




const InputFieldRadio : FC<FormInputProps> = ({ name , value  , label = name, inputclassName , errorClassName , labelClassName , validShow = true}) => {



    return (
        <div>
            <div className="flex items-center gap-2" >
                <label htmlFor={name} className={`text-sm/6 font-medium text-gray-900 ${labelClassName ?? ''}`}>
                    {label}
                </label>
                <div className="mt-2">
                    <Field id={name} name={name} type='radio' value={value}  className={` outline-none  ${inputclassName ?? 'placeholder:*:'}`}  />
                </div>
            </div>
            {validShow ? <ErrorMessage name={name}  className={`text-red-500 text-sm ${errorClassName ?? ''}`} component='div' /> : '' }
        </div>
    )
}


export default InputFieldRadio;