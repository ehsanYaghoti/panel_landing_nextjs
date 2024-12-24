import { FormInputProps } from "@/types/auth";
import { ErrorMessage, Field } from "formik";
import { FC } from "react";




const InputField : FC<FormInputProps> = ({ name , type = 'text' , label = name, inputclassName , errorClassName , labelClassName , validShow = true}) => {



    return (
        <div>
            <label htmlFor={name} className={`block text-xl font-[600] text-gray-700 ${labelClassName ?? ''}`}>
                {label}
            </label>
            <div className="mt-4">
                <Field id={name} name={name} type={type} autoComplete={name}  className={`block w-full rounded-md px-2 outline-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 ${inputclassName ?? 'placeholder:*:'}`}  />
            </div>
            {validShow ? <ErrorMessage name={name}  className={`text-red-500 text-sm ${errorClassName ?? ''}`} component='div' /> : '' }
        </div>
    )
}


export default InputField;