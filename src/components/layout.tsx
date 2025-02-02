import React from 'react';

export const Layout = ({children} : {children: React.ReactNode}) => {
    return (
        <>
        <div className='flex flex-col'>
            <main className=''> {children}
            </main>
        </div>
        </>
    )
}