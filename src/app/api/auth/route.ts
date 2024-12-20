import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
// import cookie from 'cookie';


export async function GET(request : NextRequest) {

    // const token = request.cookies.get('panel_token');
    const storeCookies = await cookies()
    const cookieStore = await cookies()
    const hasCookie = cookieStore.has('panel_token')

    console.log('has' , hasCookie)



    const token = storeCookies.get('panel_token')

    const alltokens = storeCookies.getAll()
    
    console.log('all of them' , storeCookies.getAll())
    console.log('alles of them' , alltokens)


    console.log('is token there babe? ' , token)
    
    return new Response(JSON.stringify({message : 'token cookie from request :' , token : token || undefined , success : true}) , {
        status : 200,
        headers : {
            // 'getSetCookie'
        }
        
    })


}

export async function POST(
    req : NextRequest ,
    res : NextResponse
){

    const data = await req.json()

    console.log('body' , data)

    const storeCookies = await cookies()


    storeCookies.set('panel_token' , `${data?.token}` ,  {
        maxAge : 3600 * 24 * 14,
        httpOnly : true,
        sameSite : 'lax',
        // domain : 'http://localhost:3000',
        path : '/'
    })


    
    // console.log('right now all' , storeCookies.getAll())
    console.log('right now panel_token' , storeCookies.get('panel_token'))

    

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

// headers : {
//     'Set-Cookie' : `${storeCookies.set('panel_token' , '' , {
//         httpOnly : true,
//         maxAge : 0,
//         sameSite : 'lax',
//         path : '/',
//         domain : 'localhost'
//     })}`,

// }