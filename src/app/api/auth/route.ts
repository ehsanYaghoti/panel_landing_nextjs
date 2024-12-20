import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request : NextRequest) {

    const storeCookies = await cookies()

    const token = storeCookies.get('panel_token')
    
    return new Response(JSON.stringify({message : 'token cookie from request :' , token : token || undefined , success : true}) , {
        status : 200,
    })


}

export async function POST(
    req : NextRequest ,
    res : NextResponse
){

    const data = await req.json()

    const storeCookies = await cookies()


    storeCookies.set('panel_token' , `${data?.token}` ,  {
        maxAge : 3600 * 24 * 14,
        httpOnly : true,
        sameSite : 'lax',
        // domain : 'http://localhost:3000',
        path : '/'
    })


    return new Response(JSON.stringify({message : "login was successfull" , token : storeCookies.get('panel_token')  , success : true}) , {
        status : 200 ,
        headers: { 'Set-Cookie': `token=${data?.token}` },
        

    })

}

export async function DELETE(req : NextRequest , res : NextResponse){

    const storeCookies = await cookies()

    storeCookies.delete('panel_token')
    
    return new Response(JSON.stringify({message : "logout was successfull" , success : true}) , {
        status : 200 ,
        
    })

}
