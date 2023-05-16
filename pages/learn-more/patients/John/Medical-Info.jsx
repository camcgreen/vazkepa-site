import React from 'react'
import styles from '../../../../styles/LearnMore.module.scss';
import Footer from '../../../../components/footer';
import Router from 'next/router';
import ArrowButtons from '../../../../components/ArrowButtons';
import ButtonCard from '../../../../components/buttonCard';
import Sidebar from '../../../../components/sidebar';

export default function JohnMedicalInfo() {


    return (
        <div>
            <Sidebar
                navItems={[
                    {
                        title: 'BACK TO PATIENTS',
                        link: '/learn-more',
                    },
                    {
                        title: 'MEET JOHN',
                        link: '/learn-more/patients/John',
                    },
                    {
                        title: 'MEDICAL INFO',
                        link: '/learn-more/patients/John/Medical-Info',
                    },
                    {
                        title: 'SUBGROUP PRIOR PCI',
                        link: '/learn-more/patients/John/VazkepaReduced',
                    },
                ]}
            />


            <div className={`${styles.content} content`} >
                <h1>

                    MEET <span className='blue'>JOHN*</span>


                </h1>

                <div className={`${styles.gap1Content} ${styles.gap1ContentMOD}`} style={{
                    top: '-5vh', flexDirection: 'column', left: '-2vw'
                    , width: '61vw'
                }}>


                    <div className={`${styles.profiles} ${styles.singleCard} ${styles.topCardContainer}`} style={{ alignItems: 'flex-start', height: '80vh' }}>
                        {/* <div className={styles.topCard}>
                            <div>
                                <span>
                                    Suffered a MI two months ago
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
                                    Increased TGs values (2.1 mmol/L)
                                </span>
                                <img src='/images/DownArrow.png' />
                            </div>
                        </div> */}
                        <img src="/images/karin-medical-info-1.png" alt="" style={{ width: 378, marginRight: 40, transform: 'translateX(20px)' }} />
                        <div className={styles.text}>
                            <span style={{ paddingTop: '60px', fontWeight: 'inherit' }}>
                                John is a 72 year old retired banker, who has a<br />history of hypertension and Type 2 diabetes.
                            </span>
                            {/*                             <span style={{ paddingTop: '0px', fontWeight: 'inherit' }}>
                                For patients like Karin with prior MI, even with current guideline-recommended therapies, risk for CV events remains in patients.<sup style={{ fontSize: '15px' }}>1</sup>
                            </span> */}

                            <span style={{ paddingTop: '20px' }}>
                                Patients like John may need more help to<br />reduce the risk of CV events in the future.
                            </span>
                        </div>

                    </div>

                    {/* <div className={styles.infoCards}>

                        <ButtonCard
                            buttonRefId={1}
                            frontText='ABOUT'
                            backText={(
                                <div styles={{ color: 'black !important', zIndex: '3' }}>
                                    72 years old<br /><br />
                                    Has a 10 year history of<br />hypertension and Type<br />2 diabetes which is<br />well managed<br /><br />
                                    John experienced a<br />myocardial infarction<br />and had a subsequent<br />revascularisation<br />procedure
                                </div>)}
                        />
                        <ButtonCard
                            buttonRefId={2}
                            frontText={(<span>CURRENT<br /> MEDICATION</span>)}
                            backText={(
                                <div>
                                    Atorvastatin 80 mg<br /><br />
                                    Acetylsalicylic acid 75 mg<br /><br />
                                    Brilique 90 mg BD<br /><br />
                                    Metoprolol 100 mg<br /><br />
                                    Enalapril 20 mg<br /><br />
                                    Metformin 3 x 500 mg
                                </div>)}
                        />

                        <ButtonCard
                            buttonRefId={3}
                            frontText='CURRENT STATUS'
                            backText={(
                                <div styles={{ color: 'black !important', zIndex: '3' }}>
                                    Blood pressure<br />= 130/90 mmHg<br /><br />
                                    LDL-C = 1.49 mmol/L<br /><br />
                                    HDL-C = 1.39 mmol/L<br /><br />
                                    TGs = 2.1 mmol/L
                                </div>)}

                        />


                    </div> */}
                    <img src="/images/john-medical-info-2.png" alt="" style={{ width: 819, position: 'relative', top: '-2vh' }} />
                    {/* <p style={{ position: 'fixed', right: 40, bottom: 100, fontWeight: 300 }}>*Hypothetical patient</p> */}
                    <p style={{ position: 'fixed', left: 850, bottom: 100, fontWeight: 300 }}>*Hypothetical patient</p>

                </div>



                <ArrowButtons right left urlRight={'/learn-more/patients/John/VazkepaReduced'} />
                <Footer imgSrc='reference-5.3.2.1.png' />
            </div>


        </div>
    )
}
