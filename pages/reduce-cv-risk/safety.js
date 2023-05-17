import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Gap.module.css';
import Footer from '../../components/footer';
import Sidebar from '../../components/sidebar';

export default function Safety() {
    const [showPopup, setShowPopup] = useState(false);
    const [popupIndex, setPopupIndex] = useState(0);
    const router = useRouter();
    return (
        <>
            <Sidebar
                navItems={[
                    {
                        title: 'STUDY DESIGN',
                        link: '/reduce-cv-risk',
                    },
                    {
                        title: 'PRIMARY ENDPOINT',
                        link: '/reduce-cv-risk/primary-endpoint',
                    },
                    {
                        title: (
                            <>
                                PRIMARY & KEY
                                <br /> SECONDARY ENDPOINTS
                            </>
                        ),
                        link: '/reduce-cv-risk/primary-secondary-endpoints',
                    },
                    {
                        title: (
                            <>
                                OTHER SECONDARY <br />
                                ENDPOINTS
                            </>
                        ),
                        link: '/reduce-cv-risk/secondary-endpoints',
                    },
                    {
                        title: 'SAFETY',
                        link: '/reduce-cv-risk/safety',
                    },
                    {
                        title: 'CONTRAINDICATIONS',
                        link: '/reduce-cv-risk/contraindications',
                    },
                ]}
            />
            <div className='content'>
                <h1>
                    <span className='blue'>VAZKEPA </span> WAS GENERALLY
                    <br /> WELL TOLERATED OVER 4.9 YEARS<sup>1</sup>
                </h1>
                <h2>
                    In the REDUCE-IT study, the overall rates of adverse
                    reactions, and the rates of serious adverse <br />
                    reactions leading to discontinuation, were comparable
                    between the VAZKEPA and placebo groups
                    <sup>1</sup>
                </h2>
                <img
                    className={styles.safety1}
                    src='/images/safety-1.png'
                    alt=''
                />
                <img
                    className={styles.safety2}
                    src='/images/safety-2.png'
                    style={{ marginTop: 40, marginBottom: 40 }}
                    alt=''
                />
                <img
                    className={styles.safety3}
                    src='/images/safety-3.png'
                    style={{ marginLeft: 80, maxWidth: 750 }}
                    alt=''
                />
                {/* <img
                    src='/images/safety-4.png'
                    alt=''
                    className={styles.safety4}
                    onClick={() => {
                        setShowPopup(true);
                        setPopupIndex(0);
                    }}
                /> */}
                <img
                    className='prev'
                    src='/images/prev.svg'
                    alt=''
                    onClick={() =>
                        router.push('/reduce-cv-risk/secondary-endpoints')
                    }
                />
                <img
                    className='next'
                    src='/images/next.svg'
                    alt=''
                    onClick={() =>
                        router.push('/reduce-cv-risk/contraindications')
                    }
                />
                <Footer
                    imgSrc='reference-4.4.png'
                    popupImgSrc={['/images/safety-popup-1.png']}
                    showPopup={showPopup}
                    setShowPopup={setShowPopup}
                    popupIndex={popupIndex}
                />
            </div>
        </>
    );
}
