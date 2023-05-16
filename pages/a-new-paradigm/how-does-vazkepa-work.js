import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Gap.module.css';
import Footer from '../../components/footer';
import Sidebar from '../../components/sidebar';

export default function How() {
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
                        title: 'WHAT IS VAZKEPA?',
                        link: '/a-new-paradigm',
                    },
                    {
                        title: 'HOW DOES VAZKEPA WORK?',
                        link: '/a-new-paradigm/how-does-vazkepa-work',
                    },
                    {
                        title: 'GUIDELINES',
                        link: '/a-new-paradigm/guidelines',
                    },
                ]}
            />
            <div className='content'>
                <h1>
                    <span className='blue'>VAZKEPA</span> IS CONSIDERED
                    <br /> TO HAVE A MULTIFACTORIAL MOA
                    <sup>1-3</sup>
                </h1>
                <h2 style={{ textAlign: 'left', marginLeft: 107 }}>
                    {/* VAZKEPA is the first available EPA-only based omega-3 fatty
                    acid approved by EMA
                    <br />
                    for CV risk reduction<sup>2,4</sup> */}
                    VAZKEPA is the only pure EPA-based omega-3 fatty acid
                    approved by EMA for CV risk reduction<sup>2,4</sup>
                </h2>
                <img
                    src='/images/how-does-vazkepa-work-1.png'
                    alt=''
                    className={styles.howDoesVazkepa1}
                />
                <img
                    className='prev'
                    src='/images/prev.svg'
                    alt=''
                    onClick={() => router.push('/a-new-paradigm/')}
                />
                <img
                    className='next'
                    src='/images/next.svg'
                    alt=''
                    onClick={() => router.push('/a-new-paradigm/guidelines')}
                />
                <div className={styles.howButtons}>
                    <img
                        src='/images/how-does-vazkepa-work-3.png'
                        alt=''
                        // className={styles.buttonHow}
                        onClick={() => {
                            setShowPopup(true);
                            setPopupIndex(0);
                        }}
                    />
                    <img
                        src='/images/how-does-vazkepa-work-2.png'
                        alt=''
                        // className={styles.buttonHow}
                        onClick={() => {
                            setShowPopup(true);
                            setPopupIndex(1);
                        }}
                    />
                </div>
                <p className={styles.howNote} style={{ marginLeft: 80 }}>
                    *VAZKEPA (icosapent ethyl) is a new active substance
                    compared to mixtures of omega-3 fatty acids previously
                    authorised in European Union<sup>2</sup>
                </p>
                <Footer
                    imgSrc='reference-3.1.png'
                    popupImgSrc={[
                        '/images/how-does-vazkepa-work-popup-1.png',
                        '/images/how-does-vazkepa-work-popup-2.png',
                    ]}
                    showPopup={showPopup}
                    setShowPopup={setShowPopup}
                    popupIndex={popupIndex}
                />
            </div>
        </>
    );
}
