import React from 'react'
import styles from '../../../../styles/LearnMore.module.scss';
import Footer from '../../../../components/footer';
import Router from 'next/router';
import ArrowButtons from '../../../../components/ArrowButtons';
import Sidebar from '../../../../components/sidebar';

export default function index() {
    return (
        <div>
            <Sidebar
                navItems={[
                    {
                        title: 'BACK TO PATIENTS',
                        link: '/learn-more',
                    },
                    {
                        title: 'MEET KARIN',
                        link: '/learn-more/patients/Karin',
                    },
                    {
                        title: 'MEDICAL INFO',
                        link: '/learn-more/patients/Karin/Medical-Info',
                    },
                    {
                        title: 'SUBGROUP PRIOR MI',
                        link: '/learn-more/patients/Karin/VazkepaReduced',
                    },
                ]}
            />

            <div className={`${styles.content} content`} >
                <h1>

                    MEET <span className='blue'>Karin*</span>


                </h1>

                <div style={{ position: 'relative', top: '-0vh' }} className={`${styles.gap1Content} ${styles.gap1ContentMOD}`}>


                    <div className={`${styles.profiles} ${styles.singleCard}`}>
                        <div>
                            {/* <img style={{ position: 'relative', top: '-5vh', left: '2.2vw', width: '23vw' }} src='/images/learn-more/Karin/Karin.png' alt='' /> */}
                            <img style={{ position: 'relative', top: '-5vh', left: '1.7vw', width: '21vw', }} src='/images/learn-more/Karin/Karin.png' alt='' />

                        </div>
                        <div>


                            <span style={{ position: 'relative', top: '-7vh', paddingTop: '80px', fontSize: '2rem', minWidth: 520 }}>
                                Karin is 67 years old and recently retired, who lives at home with her 5-year-old dachshund, Charlie.
                                {/*                             </span><span style={{ paddingTop: '0px', fontWeight: 'inherit' }}>
                                He enjoys growing fruit and vegetables in his allotment, going on long hikes and spending time with his three grandchildren. At weekends he plays the ukulele in a band.
                                <br /><br />Since having a MI six months ago, he worries about the risk of another, and the possibility of missing out on a future with those he loves.
                             */}
                            </span>
                        </div>

                    </div>

                    <p style={{ position: 'fixed', left: 850, bottom: 100, fontWeight: 300 }}>*Hypothetical patient</p>

                </div>

                <Footer imgSrc='reference-2.0.png' />
            </div>

            <ArrowButtons right urlRight={'/learn-more/patients/Karin/Medical-Info'} />

        </div>
    )
}
