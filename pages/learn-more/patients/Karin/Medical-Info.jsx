import React from 'react'
import styles from '../../../../styles/LearnMore.module.scss';
import Footer from '../../../../components/footer';
import Router from 'next/router';
import ArrowButtons from '../../../../components/ArrowButtons';
import ButtonCard from '../../../../components/buttonCard';
import Sidebar from '../../../../components/sidebar';

export default function KarinMedicalInfo() {


    return (
        <div>
            <Sidebar
                navItems={[
                    {
                        title: 'BACK TO PATIENTS',
                        link: '/learn-more',
                    },
                    {
                        title: 'MEET KARIN',
                        link: '/learn-more/patients/Karin',
                    },
                    {
                        title: 'MEDICAL INFO',
                        link: '/learn-more/patients/Karin/Medical-Info',
                    },
                    {
                        title: 'SUBGROUP PRIOR MI',
                        link: '/learn-more/patients/Karin/VazkepaReduced',
                    },
                ]}
            />


            <div className={`${styles.content} content`} >
                <h1>

                    MEET <span className='blue'>Karin*</span>


                </h1>

                <div className={`${styles.gap1Content} ${styles.gap1ContentMOD}`} style={{
                    top: '-5vh', flexDirection: 'column', left: '-2vw'
                    , width: '61vw'
                }}>


                    <div className={`${styles.profiles} ${styles.singleCard} ${styles.topCardContainer}`} style={{ alignItems: 'flex-start', height: '80vh', padding: 0 }}>
                        {/* <div className={styles.topCard}>
                            <div>
                                <span>
                                    Suffered a MI one year ago
                                </span>
                                <img src='/images/Warning.png' />
                            </div>
                            <div>
                                <span>
                                    Treated with statins
                                </span>
                                <img src='/images/Pill.png' />
                            </div>
                            <div>
                                <span>
                                    Increased TGs values (1.9 mmol/L)
                                </span>
                                <img src='/images/DownArrow.png' />
                            </div>
                        </div> */}
                        <img src="/images/karin-medical-info-1.png" alt="" style={{ width: 378, marginRight: 40, transform: 'translateX(20px)' }} />
                        <div className={styles.text}>
                            <span style={{ paddingTop: '40px', fontWeight: 'inherit', width: '30vw' }}>
                                Since her MI just over a year ago, Karin<br />has been on standard medical therapy,<br />including statins.
                            </span>
                            {/*                             <span style={{ paddingTop: '0px', fontWeight: 'inherit' }}>
                                For patients like Karin with prior MI, even with current guideline-recommended therapies, risk for CV events remains in patients.<sup style={{ fontSize: '15px' }}>1</sup>
                            </span> */}

                            <span style={{ paddingTop: '20px' }}>
                                Patients like Karin may need more help to reduce the risk of CV events in the future.                            </span>
                        </div>

                    </div>

                    {/* <div className={styles.infoCards}>

                        <ButtonCard
                            buttonRefId={1}
                            frontText='ABOUT'
                            backText={(
                                <div styles={{ color: 'black !important', zIndex: '3' }}>
                                    67 years old<br /><br />
                                    History of high blood<br />pressure but well controlled<br /><br />
                                    BMI around 30<br /><br />
                                    Just over 1 year ago Karin<br />suffered a myocardial<br />infarction
                                </div>)}
                        />
                        <ButtonCard
                            buttonRefId={2}
                            frontText={(<span>CURRENT<br /> MEDICATION</span>)}
                            backText={(
                                <div>
                                    Candesartan 16 mg<br /><br />
                                    Metoprolol 100 mg<br /><br />
                                    Spironolactone 50 mg<br /><br />
                                    Acetylsalicylic acid 75 mg<br /><br />
                                    Rosuvastatin 40 mg
                                </div>)}
                        />

                        <ButtonCard
                            buttonRefId={3}
                            frontText='CURRENT STATUS'
                            backText={(
                                <div styles={{ color: 'black !important', zIndex: '3' }}>
                                    Blood pressure = 125/80<br /> mmHg<br /><br />
                                    LDL-C = 1.32 mmol/L<br /><br />
                                    HDL-C = 1.21 mmol/L<br /><br />
                                    TGs = 1.9 mmol/L
                                </div>)}

                        />


                    </div> */}

                    <img src="/images/karin-medical-info-2.png" alt="" style={{ width: 819, transform: 'translateY(-40px)', position: 'relative', top: '-2vh' }} />

                    <p style={{ position: 'fixed', left: 850, bottom: 100, fontWeight: 300 }}>*Hypothetical patient</p>

                </div>


                <ArrowButtons right left urlRight={'/learn-more/patients/Karin/VazkepaReduced'} />

                <Footer imgSrc='reference-5.2.2.1.png' />
            </div>


        </div>
    )
}
