import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Gap.module.css';
import Footer from '../../components/footer';
import Sidebar from '../../components/sidebar';

export default function Elevated() {
    const router = useRouter();
    const [showPopup, setShowPopup] = useState(false);
    const [popupIndex, setPopupIndex] = useState(0);
    useEffect(() => {
        // on mount
    }, []);
    return (
        // <div className={styles.wrapper}>
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
                    <span className='blue'>ON-TREATMENT TG LEVELS</span> Were
                    Associated With CV Risk Independently Of on treatment LDL-C
                    Levels
                    <span className='superscript'>
                        <sup>1</sup>
                    </span>
                </h1>
                <h2>
                    {
                        <>
                            Post hoc analysis of 3,718 ACS patients from the
                            PROVE-IT TIMI 22 trial who survived event
                            <br />
                            free &gt;30 days: incidence of death, MI or
                            re-hospitalisation for ACS
                        </>
                    }
                    <sup>1</sup>
                </h2>
                <img
                    src='/images/elevated-1.png'
                    className={styles.elevatedImg1}
                    alt=''
                />
                <img
                    className='prev'
                    src='/images/prev.svg'
                    alt=''
                    onClick={() =>
                        router.push(
                            '/wheres-the-gap/drivers-of-residual-cv-risk'
                        )
                    }
                />
                <div className={styles.buttonContainerElevated}>
                    <img
                        src='/images/elevated-2.png'
                        alt=''
                        className={styles.buttonElevated1}
                        onClick={() => {
                            setShowPopup(true);
                            setPopupIndex(0);
                        }}
                    />
                    <img
                        src='/images/elevated-3.png'
                        alt=''
                        className={styles.buttonElevated2}
                        onClick={() => {
                            setShowPopup(true);
                            setPopupIndex(1);
                        }}
                    />
                </div>
                {/* <ul className='footnotes'>
                    <li className='footnote'>
                        *Confidence intervals: Primary endpoint (5-point MACE) -
                        HR (95% CI): 0.75 (0.68-0.83); key secondary endpoint
                        (3-point MACE) - HR (95% CI): 0.74 (0.65-0.83).
                    </li>
                    <li className='footnote'>
                        5-point MACE was defined as nonfatal MI, nonfatal
                        stroke, CV death, coronary revascularisation, or
                        unstable angina requiring hospitalisation.
                    </li>
                    <li className='footnote'>
                        3-point MACE was defined as nonfatal MI, nonfatal
                        stroke, or CV death.
                    </li>
                </ul> */}
                <Footer
                    imgSrc='reference-2.2.png'
                    popupImgSrc={[
                        '/images/elevated-popup-1.png',
                        '/images/elevated-popup-2.png',
                    ]}
                    showPopup={showPopup}
                    setShowPopup={setShowPopup}
                    popupIndex={popupIndex}
                />
            </div>
        </>
    );
}
