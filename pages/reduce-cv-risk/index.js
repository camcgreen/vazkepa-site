import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Gap.module.css';
import Footer from '../../components/footer';
import Sidebar from '../../components/sidebar';

export default function Study() {
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
                    {
                        title: 'CONTRAINDICATIONS',
                        link: '/reduce-cv-risk/contraindications',
                    },
                ]}
            />
            <div className='content'>
                <h1>
                    <span className='blue'>VAZKEPA’S CV BENEFITS</span> WERE
                    STUDIED IN REDUCE-IT IN <br />
                    HIGH AND VERY HIGH RISK PATIENTS WITH ELEVATED TGs <br />
                    ≥1.7 MMOL/L (≥150 MG/DL)<sup>1,2</sup>
                </h1>
                <h2>
                    REDUCE-IT study design key inclusion criteria:<sup>1</sup>
                </h2>
                <img
                    src='/images/study-design-1.png'
                    alt=''
                    className={styles.studyDesign1}
                />
                <img
                    className='next'
                    src='/images/next.svg'
                    alt=''
                    onClick={() =>
                        router.push('/reduce-cv-risk/primary-endpoint')
                    }
                />
                <img
                    src='/images/study-design-2.png'
                    alt=''
                    className={styles.buttonBaseline}
                    onClick={() => {
                        setShowPopup(true);
                        setPopupIndex(0);
                    }}
                />
                <img
                    src='/images/study-design-3.png'
                    alt=''
                    style={{ marginLeft: 80 }}
                />
                <Footer
                    imgSrc='reference-4.0.png'
                    popupImgSrc={['/images/study-design-popup-1.png']}
                    showPopup={showPopup}
                    setShowPopup={setShowPopup}
                    popupIndex={popupIndex}
                />
            </div>
        </>
    );
}
