import { useEffect, useState } from 'react';
import styles from '../../styles/LearnMore.module.scss';
import Footer from '../../components/footer';
import Router from 'next/router';
import Sidebar from '../../components/sidebar';

export default function Home() {
    useEffect(() => {




        // on mount
    }, []);
    return (
        // <div className={styles.wrapper}>
        // <Sidebar />

        <div className={styles.sectionFive}>

            <Sidebar
                navItems={[
                    {
                        title: 'PATIENT CASES',
                        link: '/learn-more',
                    },
                    {
                        title: 'ACS PATIENT CASE',
                        link: '/learn-more/patients/David',
                    },
                    {
                        title: 'MI PATIENT CASE',
                        link: '/learn-more//patients/Karin',
                    },
                    {
                        title: 'PCI PATIENT CASE',
                        link: '/learn-more/patients/John',
                    },
                ]}
            />


            <div className={`${styles.content} content`} >
                <h1>
                    WHICH PATIENT WOULD YOU LIKE<br />
                    TO
                    <span className='blue'> LEARN MORE </span>
                    ABOUT?

                </h1>

                <div className={styles.gap1Content}>


                    <div className={styles.profiles}>
                        <div>
                            <img src='/images/learn-more/David/David.png' alt='' onClick={() => {
                                Router.push('/learn-more/patients/David')
                            }} style={{cursor: 'pointer'}} />
                            <button onClick={() => {
                                Router.push('/learn-more/patients/David')
                            }}>MEET DAVID*</button>
                            <span>an ACS patient</span>
                        </div>
                        <div>
                            <img src='/images/learn-more/Karin/Karin.png' alt='' onClick={() => {
                                Router.push('/learn-more/patients/Karin')
                            }} style={{cursor: 'pointer'}} />
                            <button onClick={() => {
                                Router.push('/learn-more/patients/Karin')
                            }}>MEET KARIN*</button>
                            <span>a recent MI patient</span>
                        </div>
                        <div>
                            <img src='/images/learn-more/John/John.png' alt='' onClick={() => {
                                Router.push('/learn-more/patients/John')
                            }} style={{cursor: 'pointer'}} />
                            <button onClick={() => {
                                Router.push('/learn-more/patients/John')
                            }}>MEET JOHN*</button>
                            <span>a prior PCI patient</span>
                        </div>
                    </div>

                    <p style={{ position: 'fixed', left: 835, bottom: 100 }}>*Hypothetical patients</p>

                </div>

                <Footer imgSrc='reference-5.0.1.png' />
            </div>


        </div>

    );
}
