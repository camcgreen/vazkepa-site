import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Gap.module.css';
import Footer from '../../components/footer';
import Sidebar from '../../components/sidebar';

export default function PrimarySecondaryEndpoints() {
    const [showPopup, setShowPopup] = useState(false);
    const [popupIndex, setPopupIndex] = useState(0);
    const [orangeSrc, setOrangeSrc] = useState(
        '/images/primary-secondary-1a.png'
    );
    const [blueSrc, setBlueSrc] = useState('/images/primary-secondary-2a.png');
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
                    <span className='blue'>VAZKEPA SIGNIFICANTLY REDUCED</span>{' '}
                    THE RISK OF MAJOR CV EVENTS IN HIGH AND VERY HIGH CV RISK
                    PATIENTS<sup>1,2</sup>
                </h1>
                {/* <h2>
                    The risk of the primary composite endpoint was significantly
                    reduced by 4.8% ARR<sup>1,2</sup>
                </h2> */}
                <div
                    className={styles.primarySecondaryGrid}
                    id='primarySecondaryGrid'
                >
                    <p style={{ fontWeight: 700 }}>
                        Primary Endpoint 5-point MACE<sup>*</sup>
                    </p>
                    <p style={{ fontWeight: 700 }}>
                        Key Secondary Endpoint 3-point MACE<sup>†</sup>
                    </p>
                    <img
                        src={orangeSrc}
                        alt=''
                        id='primarySecondaryOrange'
                        className='fade'
                        onClick={() => {
                            if (
                                orangeSrc !== '/images/primary-secondary-1b.png'
                            ) {
                                const orange = document.getElementById(
                                    'primarySecondaryOrange'
                                );
                                orange.style.opacity = 0;
                                setTimeout(() => {
                                    setOrangeSrc(
                                        '/images/primary-secondary-1b.png'
                                    );
                                    orange.style.opacity = 1;
                                }, 200);
                            }
                        }}
                    />
                    <img
                        src={blueSrc}
                        alt=''
                        id='primarySecondaryBlue'
                        className='fade'
                        onClick={() => {
                            if (
                                blueSrc !== '/images/primary-secondary-2b.png'
                            ) {
                                const blue = document.getElementById(
                                    'primarySecondaryBlue'
                                );
                                const grid = document.getElementById(
                                    'primarySecondaryGrid'
                                );
                                blue.style.opacity = 0;
                                setTimeout(() => {
                                    setBlueSrc(
                                        '/images/primary-secondary-2b.png'
                                    );
                                    blue.style.alignSelf = 'end';
                                    blue.style.opacity = 1;
                                }, 200);
                            }
                        }}
                    />
                    <p>
                        Adapted from Bhatt et al. N Engl J Med, 2019.
                        <sup style={{ fontSize: '.5rem' }}>1</sup>
                    </p>
                </div>
                <img
                    className='prev'
                    src='/images/prev.svg'
                    alt=''
                    onClick={() =>
                        router.push('/reduce-cv-risk/primary-endpoint')
                    }
                />
                <img
                    className='next'
                    src='/images/next.svg'
                    alt=''
                    onClick={() =>
                        router.push('/reduce-cv-risk/secondary-endpoints')
                    }
                />
                <img
                    src='/images/primary-endpoint-3.png'
                    alt=''
                    onClick={() => router.push('/learn-more')}
                    className={styles.primarySecondaryEndpointButton}
                />
                <img
                    src='/images/primary-secondary-3.png'
                    alt=''
                    className={styles.primarySecondaryFootnote}
                />
                <Footer
                    imgSrc='reference-4.2.png'
                    popupImgSrc={['/images/study-design-popup-1.png']}
                    showPopup={showPopup}
                    setShowPopup={setShowPopup}
                    popupIndex={popupIndex}
                />
            </div>
        </>
    );
}
