import { LoginFormValues, RegisterFormValues } from "@/types/auth";
import { Form, FormikProps } from "formik";
import InputField from "../input";

const InnerLoginForm = (props: FormikProps<LoginFormValues>) => {

    return (
        <Form className="space-y-6" >

            <InputField name="email" label="Email Address" type="email" />

            <InputField name="phone_number" label="Phone Number" type="text" />

            <InputField name="password" label="Password" type="text" />
            <div>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Login
                </button>
            </div>

        </Form>
    )
}

export default InnerLoginForm;