'use server';

import { cookies } from "next/headers";


const storeLoginToken =  async (token : string , days : number = 10) => {

    console.log('want to store')
    const res = await fetch('http://localhost:3000/api/auth' , {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({token}),
    })

    const resParsed = await res.json()

    const cookieStore = await cookies()

    cookieStore.set('panel_token' , token , {
        httpOnly : true,
        maxAge : 3600 * 24 * 14,
        // domain : 'http://localhost:3000',
        path : '/'
    })

    return resParsed;


}


const removeLoginToken = async () => {

    const res = await fetch('http://localhost:3000/api/auth' , {
        method : 'DELETE',
        headers : {
            'Content-Type' : 'application/json'
        },
    })

    console.log(await res.json())

}

const getLoginToken = async () => {

    const res = await fetch('http://localhost:3000/api/auth' , {method : 'GET'})

    const data = await res.json()

    const token = data?.token

    const storedCookies = await cookies()
    
    const token2 = storedCookies.get('panel_token')

    console.log('token2' , token2)

    return token2

}


export {storeLoginToken , removeLoginToken , getLoginToken}