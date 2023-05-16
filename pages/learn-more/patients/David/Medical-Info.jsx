import React from 'react'
import styles from '../../../../styles/LearnMore.module.scss';
import Footer from '../../../../components/footer';
import Router from 'next/router';
import ArrowButtons from '../../../../components/ArrowButtons';
import ButtonCard from '../../../../components/buttonCard';
import Sidebar from '../../../../components/sidebar';

export default function DavidMedicalInfo() {


    return (
        <div>
            <Sidebar
                navItems={[
                    {
                        title: 'BACK TO PATIENTS',
                        link: '/learn-more',
                    },
                    {
                        title: 'MEET DAVID',
                        link: '/learn-more/patients/David',
                    },
                    {
                        title: 'MEDICAL INFO',
                        link: '/learn-more/patients/David/Medical-Info',
                    },
                    {
                        title: 'SUBGROUP RECENT ACS',
                        link: '/learn-more/patients/David/VazkepaReduced',
                    },
                ]}
            />


            <div className={`${styles.content} content`} >
                <h1>

                    MEET <span className='blue'>DAVID*</span>


                </h1>

                <div className={`${styles.gap1Content} ${styles.gap1ContentMOD}`} style={{
                    top: '-5vh', flexDirection: 'column', left: '-2vw'
                    , width: '61vw'
                }}>


                    <div className={`${styles.profiles} ${styles.singleCard} ${styles.topCardContainer}`} style={{ alignItems: 'flex-start', height: '80vh' }}>
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
                        <img src="/images/david-medical-info-1.png" alt="" style={{ width: 378, marginRight: 40, transform: 'translateX(20px)' }} />
                        <div className={styles.text}>
                            <span style={{ paddingTop: '60px', fontWeight: 'inherit' }}>
                                Since his event six months ago, David has been on<br /> standard medical therapy, including statins.                            </span>
                            {/*                             <span style={{ paddingTop: '0px', fontWeight: 'inherit' }}>
                                For patients like Karin with prior MI, even with current guideline-recommended therapies, risk for CV events remains in patients.<sup style={{ fontSize: '15px' }}>1</sup>
                            </span> */}

                            <span style={{ paddingTop: '20px' }}>
                                Patients like David may need more help to reduce the risk of CV events in the future.                            </span>
                        </div>

                    </div>

                    <img src="/images/david-medical-info-2.png" alt="" style={{ width: 819, position: 'relative', top: '-5vh' }} />

                    {/* <div className={styles.infoCards}>

                        <ButtonCard
                            buttonRefId={1}
                            frontText='ABOUT'
                            backText={(
                                <div styles={{ color: 'black !important', zIndex: '3' }}>
                                    60 years old<br /><br />
                                    History of high blood pressure but well controlled<br /><br />
                                    BMI around 28.5<br /><br />
                                    Six months ago David suffered a myocardial infarction
                                </div>)}
                        />
                        <ButtonCard
                            buttonRefId={2}
                            frontText={(<span>CURRENT<br /> MEDICATION</span>)}
                            backText={(
                                <div>
                                    Irbesartan 150 mg<br /><br />
                                    Metoprolol 100 mg<br /><br />
                                    Spironolactone 50 mg<br /><br />
                                    Acetylsalicylic acid 75 mg<br /><br />
                                    Atorvastatin 40 mg
                                </div>)}
                        />

                        <ButtonCard
                            buttonRefId={3}
                            frontText='CURRENT STATUS'
                            backText={(
                                <div styles={{ color: 'black !important', zIndex: '3' }}>
                                    Blood pressure =130/85 mmHg<br /><br />
                                    LDL-C = 1.45 mmol/L<br /><br />
                                    HDL-C = 1.15 mmol/L<br /><br />
                                    TGs = 2.0 mmol/L
                                </div>)}

                        />


                    </div> */}
                    <p style={{ position: 'fixed', left: 850, bottom: 100, fontWeight: 300 }}>*Hypothetical patient</p>

                </div>



                <ArrowButtons right left urlRight={'/learn-more/patients/David/VazkepaReduced'} />
                <Footer imgSrc='/reference-5.1.2.1.png' />
            </div>


        </div>
    )
}