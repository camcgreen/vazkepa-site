import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Gap.module.css';
import Footer from '../../components/footer';
import Sidebar from '../../components/sidebar';

export default function Home() {
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
                        title: (
                            <>
                                CV RISK MANAGEMENT:
                                <br /> IS THERE A GAP?
                            </>
                        ),
                        link: '/wheres-the-gap',
                    },
                    {
                        title: 'DRIVERS OF RESIDUAL CV RISK',
                        link: '/wheres-the-gap/drivers-of-residual-cv-risk',
                    },
                    {
                        title: 'ELEVATED TGS AS A RISK MARKER',
                        link: '/wheres-the-gap/elevated-tgs-as-a-risk-marker',
                    },
                ]}
            />
            <div className='content'>
                <h1>
                    <span className='blue'>AROUND 1 IN 3 PATIENTS</span>{' '}
                    “WELL-MANAGED” WITH STATINS EXPERIENCED A SUBSEQUENT CV
                    EVENT WITHIN 7 YEARS<sup>1</sup>
                </h1>
                <h2>
                    IMPROVE-IT was a double-blind, randomised controlled study
                    in 18,144 patients with ACS<sup>1</sup>
                </h2>
                <div className={styles.row}>
                    <img
                        src='/images/wheres-the-gap-1.png'
                        alt=''
                        className={styles.graph}
                    />
                    <img
                        src='/images/wheres-the-gap-2.png'
                        alt=''
                        className={styles.text}
                    />
                </div>
                <img
                    src='/images/wheres-the-gap-3.png'
                    alt=''
                    className={styles.callout}
                />
                <img
                    className='next'
                    src='/images/next.svg'
                    alt=''
                    onClick={() =>
                        router.push(
                            '/wheres-the-gap/drivers-of-residual-cv-risk'
                        )
                    }
                />
                <img
                    src='/images/wheres-the-gap-4.png'
                    alt=''
                    className={styles.buttonGap}
                    onClick={() => {
                        setShowPopup(true);
                        setPopupIndex(0);
                    }}
                />
                <Footer
                    imgSrc='reference-2.0.png'
                    popupImgSrc={['/images/wheres-the-gap-popup-1.png']}
                    showPopup={showPopup}
                    setShowPopup={setShowPopup}
                    popupIndex={popupIndex}
                />
            </div>
        </>
    );
}
