import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    // const { pathname } = request.nextUrl;
    // if (pathname === '/profile') {
    //     return NextResponse.redirect(new URL('/', request.url))
    // }
    // NextResponse.rewrite(request.nextUrl).cookies.delete('XXXXX').set('jafar', 'mamad');
    // return NextResponse.next();
    let token = request.cookies.get('token')?.value;
    // console.log('token in middleware--->>', token);
    const headers = new Headers(request.headers);
    headers.set('token', token || 'Not Found token');

    const response = NextResponse.next({
        request: {
            headers
        }
    });
    // response.cookies.delete('XXXXX');
    // if (request.nextUrl.pathname === '/profile') {
    //     response.cookies.set({
    //         name: 'jafar',
    //         value: 'mamad',
    //         path: '/profile',
    //         httpOnly: true,
    //         secure: true,
    //     });
    // }
    return response;
}