import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Gap.module.css';
import Footer from '../../components/footer';
import Sidebar from '../../components/sidebar';

export default function secondaryEndpoints() {
    const [showPopup, setShowPopup] = useState(false);
    const [popupIndex, setPopupIndex] = useState(0);
    const [orangeSrc, setOrangeSrc] = useState(
        '/images/secondary-endpoints-2a.png'
    );
    const [blue1Src, setBlue1Src] = useState(
        '/images/secondary-endpoints-3a.png'
    );
    const [blue2Src, setBlue2Src] = useState(
        '/images/secondary-endpoints-4a.png'
    );
    useEffect(() => {
        // on mount
    }, []);
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
                    <span className='blue'>VAZKEPA </span> CONSISTENTLY REDUCED
                    THE RISK OF OTHER SECONDARY ENDPOINTS, INCLUDING A 20% RRR
                    IN CV DEATH<sup>*1,2</sup>
                </h1>
                {/* <h2>
                    In the prespecified endpoints, the rates of ischemic events
                    were significantly lower in the VAZKEPA group than in the
                    placebo group, including the rate of CV death (4.3% vs.
                    5.2%; HR, 0.80; 95% CI, 0.66–0.98; p=0.03)<sup>1,2 </sup>
                </h2> */}
                <img
                    className={styles.secondaryHeader}
                    src='/images/secondary-endpoints-1.png'
                    alt=''
                />
                <div className={styles.secondaryButtons}>
                    <img
                        src={orangeSrc}
                        alt=''
                        id='secondaryOrange'
                        className='fade'
                        onClick={() => {
                            if (
                                orangeSrc !==
                                '/images/secondary-endpoints-2b.png'
                            ) {
                                const orange =
                                    document.getElementById('secondaryOrange');
                                orange.style.opacity = 0;
                                setTimeout(() => {
                                    setOrangeSrc(
                                        '/images/secondary-endpoints-2b.png'
                                    );
                                    orange.style.opacity = 1;
                                }, 200);
                            }
                        }}
                    />
                    <img
                        src={blue1Src}
                        alt=''
                        id='secondaryBlue1'
                        className='fade'
                        onClick={() => {
                            if (
                                blue1Src !==
                                '/images/secondary-endpoints-3b.png'
                            ) {
                                const blue1 =
                                    document.getElementById('secondaryBlue1');
                                blue1.style.opacity = 0;
                                setTimeout(() => {
                                    setBlue1Src(
                                        '/images/secondary-endpoints-3b.png'
                                    );
                                    blue1.style.opacity = 1;
                                }, 200);
                            }
                        }}
                    />
                    <img
                        src={blue2Src}
                        alt=''
                        id='secondaryBlue2'
                        className='fade'
                        onClick={() => {
                            if (
                                blue2Src !==
                                '/images/secondary-endpoints-4b.png'
                            ) {
                                const blue2 =
                                    document.getElementById('secondaryBlue2');
                                blue2.style.opacity = 0;
                                setTimeout(() => {
                                    setBlue2Src(
                                        '/images/secondary-endpoints-4b.png'
                                    );
                                    blue2.style.opacity = 1;
                                }, 200);
                            }
                        }}
                    />
                </div>
                <img
                    className='prev'
                    src='/images/prev.svg'
                    alt=''
                    onClick={() =>
                        router.push(
                            '/reduce-cv-risk/primary-secondary-endpoints'
                        )
                    }
                />
                <img
                    className='next'
                    src='/images/next.svg'
                    alt=''
                    onClick={() => router.push('/reduce-cv-risk/safety')}
                />
                <img
                    src='/images/secondary-endpoints-5.png'
                    alt=''
                    className={styles.secondaryFootnote}
                />
                <Footer
                    imgSrc='reference-4.3.png'
                    popupImgSrc={['/images/study-design-popup-1.png']}
                    showPopup={showPopup}
                    setShowPopup={setShowPopup}
                    popupIndex={popupIndex}
                />
            </div>
        </>
    );
}
