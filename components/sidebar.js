import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/Sidebar.module.css';

const Sidebar = ({ navItems }) => {
    const router = useRouter();
    useEffect(() => {
        const navLinks = document.querySelectorAll('.navLi');

        if (navItems.length === 3) {
            navLinks[0].style.left = '155px';
            navLinks[0].style.top = '35%';
            navLinks[1].style.left = '180px';
            navLinks[1].style.top = '50%';
            navLinks[2].style.left = '170px';
            navLinks[2].style.top = '65%';
        } else if (navItems.length === 4) {
            navLinks[0].style.left = '130px';
            navLinks[0].style.top = '27.5%';
            navLinks[1].style.left = '170px';
            navLinks[1].style.top = '42.5%';
            navLinks[2].style.left = '180px';
            navLinks[2].style.top = '57.5%';
            navLinks[3].style.left = '150px';
            navLinks[3].style.top = '72.5%';
        } else if (navItems.length === 5) {
            navLinks[0].style.left = '95px';
            navLinks[0].style.top = '20%';
            navLinks[1].style.left = '155px';
            navLinks[1].style.top = '35%';
            navLinks[2].style.left = '180px';
            navLinks[2].style.top = '50%';
            navLinks[3].style.left = '170px';
            navLinks[3].style.top = '65%';
            navLinks[4].style.left = '125px';
            navLinks[4].style.top = '80%';
        }
    }, []);

    const isBackButton = (string) => {
        /*         const parts = string.split('/'); // Split the string by '/'
                const lastPart = parts[parts.length - 1]; // Get the last part of the split string
         */
        return string == 'BACK TO PATIENTS' ? true : false;
    };

    return (
        <>
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
                            {isBackButton(item.title) == true ? (
                                <img
                                    style={{ width: '50px' }}
                                    src={'/images/back.png'}
                                    alt=''
                                />
                            ) : (
                                <img
                                    src={
                                        router.pathname === item.link
                                            ? '/images/hotspot-filled.svg'
                                            : '/images/hotspot.svg'
                                    }
                                    alt=''
                                />
                            )}

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
                                }}
                            >
                                {item.title}
                            </a>
                        </li>
                    ))}
                    <Link href='/'>
                        {/* <Link href='/learn-more/patients/David/Medical-Info'> */}
                        <img
                            src='/images/home.svg'
                            alt=''
                            className={styles.home}
                        />
                    </Link>
                </ul>
            </nav>
        </>
    );
};

export default Sidebar;
