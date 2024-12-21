import { getUserByToken } from "@/helpers/user";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request : NextRequest) {

    const storeCookies = await cookies()

    const token = storeCookies.get('panel_token')

    let user = undefined

    if(token){
        user = await getUserByToken(token.value)
    }
    
    return new Response(JSON.stringify({message : 'token cookie from request :' , user : user , token : token || undefined , success : true}) , {
        status : 200,
    })


}