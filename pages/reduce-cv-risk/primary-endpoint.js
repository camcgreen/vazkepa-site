import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Gap.module.css';
import Footer from '../../components/footer';
import Sidebar from '../../components/sidebar';

export default function PrimaryEndpoint() {
    const [showPopup, setShowPopup] = useState(false);
    const [popupIndex, setPopupIndex] = useState(0);
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
                ]}
            />
            <div className='content'>
                <h1>
                    VAZKEPA{' '}
                    <span className='blue'>
                        SIGNIFICANTLY REDUCED THE RISK OF MAJOR CV EVENTS
                    </span>{' '}
                    IN HIGH AND VERY HIGH CV RISK PATIENTS<sup>1,2</sup>
                </h1>
                {/* <h2>
                    The risk of the primary composite endpoint was significantly
                    reduced by 4.8% ARR, corresponding to a NNT of 21 over a
                    median of 4.9 years<sup>1,2</sup>
                </h2> */}
                <img
                    src='/images/primary-endpoint-1.png'
                    alt=''
                    className={styles.primaryEndpoint1}
                />
                <img
                    className='prev'
                    src='/images/prev.svg'
                    alt=''
                    onClick={() => router.push('/reduce-cv-risk/')}
                />
                <img
                    className='next'
                    src='/images/next.svg'
                    alt=''
                    onClick={() =>
                        router.push(
                            '/reduce-cv-risk/primary-secondary-endpoints'
                        )
                    }
                />
                <div className={styles.primaryEndpointButtons}>
                    <img
                        src='/images/primary-endpoint-2.png'
                        alt=''
                        onClick={() => router.push('/reduce-cv-risk/safety')}
                    />
                    <img
                        src='/images/primary-endpoint-3.png'
                        alt=''
                        onClick={() => router.push('/learn-more')}
                    />
                </div>
                <Footer
                    imgSrc='reference-4.1.png'
                    popupImgSrc={['/images/study-design-popup-1.png']}
                    showPopup={showPopup}
                    setShowPopup={setShowPopup}
                    popupIndex={popupIndex}
                />
            </div>
        </>
    );
}
