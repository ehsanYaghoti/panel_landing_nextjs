import { ErrorMessage, Field, FieldProps, Form, FormikProps } from "formik";
import InputField from "../input";
import { ArticleFormProps, ArticleFormValues } from "@/types/article";
import CustomEditor from "../../general/custome-editor";
import React, { useState } from 'react';
import InputFieldRadio from "../inputRadio";
import { ArticleModel } from "@/types/models";

interface Props extends FormikProps<ArticleFormValues> {
    editMode : boolean ;
    article : ArticleModel; 
}

const InnerArticleFormEdit = (props : Props ) => {

    return (
        <Form className="space-y-6" >

            <div className="flex flex-col items-start" >
                <label htmlFor='description' className={`block text-xl font-[600] text-gray-700`}>
                    language
                </label>
                <div className="flex items-center gap-6" >
                    <InputFieldRadio name="language" value="en" label="en" type="radio" />
                    <InputFieldRadio name="language" value="fa" label="fa" type="radio" />
                </div>
            </div>
            <InputField name="title" label="title of article" />

            <InputField name="summary" label="Summary of article" />

            <>
                <label htmlFor='description' className={`block text-xl font-[600] text-gray-700`}>
                    description
                </label>
                <Field name='description' id='description' className="w-full"
                    render={({ field, form }: FieldProps<number | string>) => {
                        return (
                            <CustomEditor form={form} initialData={props?.article?.description} />
                        )
                    }}
                />
                <ErrorMessage name='description'  className={`text-red-500 text-sm`} component='div' />
            </>

            <div>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Edit Article
                </button>
            </div>

        </Form>
    )
}

export default InnerArticleFormEdit;