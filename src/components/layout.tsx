import React from 'react';
import { Footer } from './footer';
import { Navbar } from './navbar';

export const Layout = ({children} : {children: React.ReactNode}) => {
    return (
        <>
        <div className='min-h-screen flex flex-col'>
            {/* <Navbar /> */}
            <main className='flex-1'> {children}
            </main>
            {/* <Footer /> */}
        </div>
        </>
    )
}