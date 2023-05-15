import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import '../styles/globals.css';
import IdleTimerComponent from '../components/IdleTimer';
import Router from 'next/router';

export default function App({ Component, pageProps }) {
    const router = useRouter();

    // useEffect(() => {
    //     //PRESS M TO BE REDIRECTED TO MAIN PAGE
    //     document.addEventListener('keydown', keyDownTextField, false);

    //     function keyDownTextField(e) {
    //         var keyCode = e.keyCode;
    //         if (keyCode == 77) {
    //             Router.push('/learn-more');
    //         }
    //     }
    // }, []);

    return (
        <>
            <Head>
                <title>BOILERPLATE</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <IdleTimerComponent />
            {/* <img
                src='/images/v.png'
                alt=''
                className='v'
                style={{ display: router.pathname === '/' ? 'none' : 'block' }}
            /> */}
            <img
                src='/images/bg.png'
                alt=''
                className='bg'
                style={{
                    display: router.pathname === '/' ? 'none' : 'block',
                    // transform: 'scale(0.5)',
                }}
            />
            <Component {...pageProps} />
        </>
    );
}
