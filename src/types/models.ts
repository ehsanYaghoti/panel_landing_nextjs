export interface UserModel {
    id : string
    createdAt : string
    username : string
    email : string
    phone_number : string
    token : string
    password : string
    admin : boolean
}


export interface ArticleModel {
    id : number;
    ID ?: string;
    createdAt : string;
    title : string;
    language : string;
    description : string;
    image : string;
    author : string;
    summary : string;
    likeCount : number;
    viewCount : number;
}