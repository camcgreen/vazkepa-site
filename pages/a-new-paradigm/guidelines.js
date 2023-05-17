import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Gap.module.css';
import Footer from '../../components/footer';
import Sidebar from '../../components/sidebar';
import ButtonCard from '../../components/buttonCard';

export default function Guidelines() {
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
                    // {
                    //     title: 'WHAT IS VAZKEPA?',
                    //     link: '/a-new-paradigm',
                    // },
                    // {
                    //     title: 'HOW DOES VAZKEPA WORK?',
                    //     link: '/a-new-paradigm/how-does-vazkepa-work',
                    // },
                    // {
                    //     title: 'GUIDELINES',
                    //     link: '/a-new-paradigm/guidelines',
                    // },
                    {
                        title: (
                            <>
                                A NEW PARADIGM IN
                                <br /> CV RISK REDUCTION
                            </>
                        ),
                        link: '/a-new-paradigm',
                    },
                    {
                        title: (
                            <>
                                VAZKEPA MECHANISM
                                <br /> OF ACTION
                            </>
                        ),
                        link: '/a-new-paradigm/how-does-vazkepa-work',
                    },
                    {
                        title: (
                            <>
                                VAZKEPA IN
                                <br /> EUROPEAN GUIDELINES
                            </>
                        ),
                        link: '/a-new-paradigm/guidelines',
                    },
                ]}
            />
            <div className='content'>
                <h1>
                    <span className='blue'>VAZKEPA</span> IN EUROPEAN GUIDELINES
                    <sup>1,2</sup>
                </h1>
                <h2>
                    Recommendations for drug treatments of high-risk patients
                    with <br />
                    hypertriglyceridaemia to reduce CV risk<sup>1,2</sup>
                </h2>
                <div className={styles.cardsGuidelines}>
                    <ButtonCard
                        buttonRefId={1}
                        frontText={
                            <p>
                                ESC/EAS GUIDELINES FOR
                                <br /> THE MANAGEMENT OF
                                <br /> DYSLIPIDAEMIAS 2019
                                <sup>3</sup>
                            </p>
                        }
                        backText={
                            <ul
                                styles={{
                                    color: 'black !important',
                                    zIndex: '3',
                                }}
                            >
                                <li style={{ marginBottom: 20 }}>
                                    Statin treatment is recommended as a first
                                    drug of choice for reduce CVD risk in
                                    high-risk individuals with
                                    hypertriglyceridaemia (TG&gt;2.3mmol/L
                                    [&gt;200mg/dL]). Class I, Level B
                                </li>
                                <li>
                                    In <span>high-risk (or above)</span>{' '}
                                    patients with TG between 1.5 and 5.6 mmol/L
                                    (135-499mg/dL)* despite statin treatment,
                                    n-3 PUFAs (<span>icosapent ethyl</span> 2 x
                                    2 g/day) should be considered in combination
                                    with statin. Class IIa, Level B
                                </li>
                            </ul>
                        }
                    />
                    <ButtonCard
                        buttonRefId={2}
                        frontText={
                            <p>
                                ESC GUIDELINES
                                <br /> CARDIOVASCULAR DISEASE
                                <br /> PREVENTION IN CLINICAL
                                <br /> PRACTICE 2021<sup>2</sup>
                            </p>
                        }
                        backText={
                            <ul
                                styles={{
                                    color: 'black !important',
                                    zIndex: '3',
                                }}
                            >
                                <li style={{ marginBottom: 20 }}>
                                    {
                                        <>
                                            Statin treatment is recommended as
                                            the first drug of choice for
                                            reducing CVD risk in high-risk
                                            individuals with
                                            hypertriglyceridaemia (triglycerides
                                            &gt;2.3mmol/L [&gt;200 mg/dL]).
                                            Class I, Level A
                                        </>
                                    }
                                </li>
                                <li>
                                    In <span>high-risk (or above)</span>{' '}
                                    patients with triglycerides &gt;1.5 mmol/L
                                    (&gt; 135mg/dL)* despite statin treatment
                                    and lifestyle measures, n-3 PUFAs (
                                    <span>icosapent ethyl</span> 2 x 2 g/day)
                                    may be considered in combination with a
                                    statin Class IIb, Level B
                                </li>
                            </ul>
                        }
                    />
                </div>
                <img
                    className='prev'
                    src='/images/prev.svg'
                    alt=''
                    onClick={() =>
                        router.push('/a-new-paradigm/how-does-vazkepa-work')
                    }
                />
                <p className={styles.howNote} style={{ marginLeft: 80 }}>
                    *VAZKEPA is indicated for TG ≥1.7 mmol/L [≥150 mg/dL]
                    <sup>3</sup>
                </p>
                <Footer
                    imgSrc='reference-3.2.png'
                    popupImgSrc={['/images/how-does-vazkepa-work-popup-1.png']}
                    showPopup={showPopup}
                    setShowPopup={setShowPopup}
                    popupIndex={popupIndex}
                />
            </div>
        </>
    );
}
