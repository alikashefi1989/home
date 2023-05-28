import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
    if (req.method === 'POST') {
        try {
            const body = await req.json();
            console.log("BODY in POST ---->>>", body);
            const resOfFetch = await fetch('https://jsonplaceholder.typicode.com/users/1');
            const data = await resOfFetch.json();
            const response = NextResponse.json({ ...data }, { status: 200 });
            response.cookies.set({ name: 'token', value: 'HHHHHHHHH.BBBBBBBBB.SSSSSSSSS', httpOnly: true, maxAge: 60 * 60, path: '/' });
            return response
        } catch (error) {
            console.log("ERROR in POST--->>", error);
            return new Response('server error', { status: 500 });
        }
    } else {
        return new Response('method not allowed', { status: 405 });
    }
};

export async function GET(req: NextRequest) {
    if (req.method === 'GET') {
        try {
            const token = req.headers.get('Auth');
            console.log("TOKEN in GET ---->>>", token);
            const response = NextResponse.json({ msg: 'logged out' }, { status: 200 });
            response.cookies.delete('token');
            return response
        } catch (error) {
            console.log("ERROR in GET--->>", error);
            return new Response('server error', { status: 500 });
        }
    } else {
        return new Response('method not allowed', { status: 405 });
    }
};