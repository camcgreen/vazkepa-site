import React from 'react'
import styles from '../../../../styles/LearnMore.module.scss';
import Footer from '../../../../components/footer';
import ArrowButtons from '../../../../components/ArrowButtons';
import Sidebar from '../../../../components/sidebar'

export default function VazkepaReduced() {

    const [showPopup, setShowPopup] = React.useState(false)
    const [popupIndex, setPopupIndex] = React.useState(0);



    return (
        <div >

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


            <div className={` content`} style={{ height: '80%' }}>
                <h1>

                    <span className='blue'>VAZKEPA</span> REDUCED THE RISK OF MAJOR CV EVENTS<br />IN PATIENTS WITH <span style={{ fontWeight: '500' }}>PRIOR MI<sup style={{ fontSize: '15px', position: 'relative', top: '-2px' }}>1,2</sup></span>

                </h1>
                <h2 style={{ fontWeight: 500, position: 'relative', top: '4vh' }}>Prespecified and post hoc analysis of REDUCE-IT in patients with prior MI<sup style={{ fontSize: '10px', position: 'relative', top: '-1px' }}>1,2*</sup></h2>



                {/* <div className={`${styles.mainComponentVazkRedu}`} style={{display: 'flex'}} > */}
                {/* <div className={styles.graph}>
                        <h2>Primary endpoint<sup style={{ fontSize: '15px', position: 'relative', top: '-1px' }}>1*,†</sup></h2>
                        <p>5-point MACE: a composite of CV death, nonfatal MI, nonfatal stroke, coronary revascularisation, or unstable angina requiring hospitalisation
                        </p>
                        <img src="\images\learn-more\David\David_Reduced_Graphic.svg" alt="" />
                        <span>
                            <table>
                                <tbody>
                                    <th>
                                        <tr><th style={{ fontWeight: '550' }}>No. at Risk:</th><th>{ }</th><th>{ }</th><th>{ }</th><th>{ }</th><th>{ }</th><th>{ }</th></tr>
                                        <tr><th>Placebo</th><th>1823</th><th>1757</th><th>1637</th><th>1404</th><th>1167</th><th>667</th></tr>
                                        <tr><th>VAZKEPA</th><th>1870</th><th>1812</th><th>1691</th><th>1440</th><th>1237</th><th>698</th></tr>
                                    </th>
                                </tbody>
                            </table>
                        </span>

                    </div> */}
                <div style={{ display: 'flex', alignSelf: 'center', marginBottom: 80, position: 'relative', top: '4vh' }}>
                    <img src="/images/karin-reduced-1.png" alt="" style={{ width: 583 }} />
                    <img src="/images/karin-reduced-2.png" alt="" style={{ width: 176, alignSelf: 'center' }} />
                </div>
                {/* <div className={styles.arrow} style={{transform: 'translateY(20px)'}}>
                        <img src="\images\learn-more\Karin\Karin_Reduced_Arrow.jpg" alt="" />
                    </div> */}
                {/* </div> */}
                <div className={styles.bottomReducedRisk} >
                    {/* <button
                        onClick={() => {
                            setShowPopup(true);
                            setPopupIndex(0);
                        }}
                    >
                        Total events
                        <img src="\images\Pop_up_button.png" alt="" />
                    </button>
                    <button onClick={() => {
                        setShowPopup(true);
                        setPopupIndex(1);
                    }}>
                        Safety in ACS subgroup
                        <img src="\images\Pop_up_button.png" alt="" />
                    </button> */}
                    <img src="/images/karin-reduced-3.png" alt="" onClick={() => {
                        setShowPopup(true);
                        setPopupIndex(0);
                    }}
                        style={{ width: 183, marginRight: 40, cursor: 'pointer', }}
                    />
                    <img src="/images/karin-reduced-4.png" alt="" onClick={() => {
                        setShowPopup(true);
                        setPopupIndex(1);
                    }}
                        style={{ width: 330, marginRight: 40, cursor: 'pointer', }}
                    />
                    <img src="/images/karin-reduced-5.png" alt="" onClick={() => {
                        setShowPopup(true);
                        setPopupIndex(2);
                    }}
                        style={{ width: 236, cursor: 'pointer', }}
                    />
                </div>
                <p style={{ position: 'relative', top: '9vh', left: '2.5vw', fontSize: '0.8rem', transform: 'translate(30px)'}}>
                    * REDUCE-IT was not designed to specifically test hypotheses in subgroups.<br />† Time-to-event analysis. RRR and ARR for the primary endpoint were calculated based on the observed event rate: 20.2% in VAZKEPA arm vs 26.1% in the placebo arm over a median<br /> follow up period of 4.8 years.<sup style={{ fontSize: '0.75rem' }}>1</sup>
                </p>

                <ArrowButtons left />

                <Footer imgSrc='reference-5.2.3.4.png'
                    popupImgSrc={['/images/karin-reduced-popup-1.png', '/images/karin-reduced-popup-2.png', '/images/karin-reduced-popup-3.png']}
                    showPopup={showPopup}
                    setShowPopup={setShowPopup}
                    popupIndex={popupIndex}
                />
            </div>





        </div>


    )
}
