import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
    const router = useRouter();
    const navItems = [
        {
            title: 'CV RISK MANAGEMENT:\n IS THERE A GAP?',
            link: '/wheres-the-gap',
        },
        // {
        //     title: 'A NEW PARADIGM IN\n CV RISK MANAGEMENT',
        //     link: '/a-new-paradigm',
        // },
        {
            title: 'A NEW PARADIGM IN\n CV RISK REDUCTION',
            link: '/a-new-paradigm',
        },
        {
            title: 'REDUCE CV RISK\n WITH VAZKEPA',
            link: '/reduce-cv-risk',
        },
        {
            title: 'PATIENTS WHO\n CAN BENEFIT',
            link: '/learn-more',
        },
    ];
    useEffect(() => {
        const navLinks = document.querySelectorAll('.navLi');
        navLinks[0].style.left = '375px';
        navLinks[0].style.top = '27.5%';
        navLinks[1].style.left = '410px';
        navLinks[1].style.top = '42.5%';
        navLinks[2].style.left = '415px';
        navLinks[2].style.top = '57.5%';
        navLinks[3].style.left = '390px';
        navLinks[3].style.top = '72.5%';
    }, []);
    return (
        <div className={styles.wrapper}>
            <img src='/images/home-bg.jpg' alt='' className={styles.bg} />
            <img
                src='/images/dashed-ellipse.svg'
                className={styles.dashedEllipse}
                alt=''
            />
            {/* <nav>
                <ul>
                    <li>
                        <Link href='/wheres-the-gap'>WHERE IS THE GAP?</Link>
                    </li>
                    <li>
                        <Link href='/what-is-vazkepa'>WHAT IS VAZKEPA?</Link>
                    </li>
                    <li>
                        <Link href='/reduce-it'>REDUCE-IT</Link>
                    </li>
                    <li>
                        <Link href='/who-could-benefit'>
                            WHO COULD BENEFIT?
                        </Link>
                    </li>
                    <li>
                        <Link href='/learn-more'>
                            LEARN MORE ABOUT
                        </Link>
                    </li>
                </ul>
            </nav> */}
            <nav className={styles.sidebar}>
                <img
                    src='/images/dashed-ellipse.svg'
                    className={styles.dashedEllipse}
                    alt=''
                />
                <ul>
                    {navItems.map((item, i) => (
                        <li
                            className='navLi'
                            onClick={() => router.push(item.link)}
                            // style={{
                            //     transform:
                            //         router.pathname === item.link
                            //             ? 'translateX(0)'
                            //             : 'translateX(0)',
                            // }}
                        >
                            <img
                                src={
                                    router.pathname === item.link
                                        ? '/images/hotspot-filled.svg'
                                        : '/images/hotspot.svg'
                                }
                                alt=''
                            />
                            <a
                                className='navLiLink'
                                style={{
                                    backgroundColor:
                                        router.pathname === item.link
                                            ? 'white'
                                            : 'rgba(0, 0, 0, 0)',
                                    color:
                                        router.pathname === item.link
                                            ? '#009ADE'
                                            : 'white',
                                    padding:
                                        router.pathname === item.link
                                            ? '16px 10px'
                                            : '0',
                                    maxWidth:
                                        i === 0
                                            ? 270
                                            : i === 1
                                            ? 250
                                            : i === 2
                                            ? 240
                                            : 200,
                                }}
                            >
                                {item.title}
                            </a>
                        </li>
                    ))}
                    <Link href='/'>
                        <img
                            src='/images/home.svg'
                            alt=''
                            className={styles.home}
                        />
                    </Link>
                </ul>
            </nav>
        </div>
    );
}
