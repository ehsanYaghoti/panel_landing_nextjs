'use client'

import React, { useState } from 'react';
import { CKEditor, useCKEditorCloud } from '@ckeditor/ckeditor5-react';
import type { ClassicEditor, EventInfo } from 'https://cdn.ckeditor.com/typings/ckeditor5.d.ts';
import { FormikProps } from 'formik';

interface Props {
    form: FormikProps<any> ;
    initialData ?: string;
}

const CustomEditor = ({form , initialData} : Props) => {


    const cloud = useCKEditorCloud( {
        version: '44.0.0',
        premium: true
    } );

    if ( cloud.status === 'error' ) {
        return <div>Error!</div>;
    }

    if ( cloud.status === 'loading' ) {
        return <div>Loading...</div>;
    }

    const {
        ClassicEditor,
        Essentials,
        Paragraph,
        Bold,
        Italic,
        Font
    } = cloud.CKEditor;


    return (
        <CKEditor
            editor={ ClassicEditor }
            data={initialData}
            onChange={(evnet : EventInfo , editor : ClassicEditor ) => {
                
                form.setFieldValue('description' , editor.getData())
            }}
            config={ {
                licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3MzUzNDM5OTksImp0aSI6IjNhY2RhOWQ4LTQzMzAtNDQ1Ni1hYTE1LTVjNGI2YWEyMjgyNiIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6ImZmZWY0NTgxIn0.Elh_mFdvt0aelHEOE43DH_n_SICStko0qijTBKKGD8aREbeRJTCIceWqw6C2XWxGLvUwTmuqihzAH78yzcQStA',
                plugins: [ Essentials, Paragraph, Bold, Italic  ],
                toolbar: [ 'undo', 'redo', '|', 'bold', 'italic', '|']
            } }
        />
    );
};

export default CustomEditor;
