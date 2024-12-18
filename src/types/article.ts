import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ArticleModel } from "./models";

export interface ArticleFormValues {
    title: string;
    language : string;
    summary: string;
    description: string;    
    article ?: ArticleModel
}

export interface ArticleFormProps {
    router : AppRouterInstance
    editMode ?: boolean;
}

export interface ArticleFormEditProps {
    router : AppRouterInstance;
    article : ArticleModel;
    id : string;
    editMode : boolean;
}