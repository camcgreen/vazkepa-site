import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Gap.module.css';
import Footer from '../../components/footer';
import Sidebar from '../../components/sidebar';

export default function Contraindications() {
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
                    <span className='blue'>CONTRAINDICATIONS</span>, <br />
                    SPECIAL WARNINGS AND PRECAUTIONS
                </h1>
                <img
                    className={styles.contraindications1}
                    src='/images/contraindications-1.png'
                    alt=''
                />
                <img
                    className={styles.contraindications2}
                    src='/images/contraindications-2.png'
                    alt=''
                />
                <img
                    className={styles.contraindications3}
                    src='/images/contraindications-3.png'
                    alt=''
                />
                <img
                    className='prev'
                    src='/images/prev.svg'
                    alt=''
                    onClick={() => router.push('/reduce-cv-risk/safety')}
                />
                <Footer
                    imgSrc='reference-4.5.png'
                    popupImgSrc={['/images/safety-popup-1.png']}
                    showPopup={showPopup}
                    setShowPopup={setShowPopup}
                    popupIndex={popupIndex}
                />
            </div>
        </>
    );
}
