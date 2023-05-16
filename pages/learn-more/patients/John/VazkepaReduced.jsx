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


            <div className={` content`} style={{ height: '80%' }}>
                <h1>

                    <span className='blue'>VAZKEPA</span> REDUCED THE RISK OF MAJOR CV EVENTS<br />IN PATIENTS WITH <span style={{ fontWeight: '500' }}>PRIOR PCI<sup style={{ fontSize: '15px', position: 'relative', top: '-2px' }}>1</sup></span>

                </h1>
                <h2 style={{ fontWeight: 500, position: 'relative', top: '4vh' }}>Post hoc analysis of REDUCE-IT in patients with prior PCI<sup style={{ fontSize: '10px', position: 'relative', top: '-1px' }}>1</sup></h2>



                {/* <div className={`${styles.mainComponentVazkRedu}`} >
                    <div className={styles.graph}>
                        <h2>Primary endpoint<sup style={{ fontSize: '15px', position: 'relative', top: '-1px' }}>1*,†</sup></h2>
                        <p>5-point MACE: a composite of CV death, nonfatal MI, nonfatal stroke, coronary revascularisation, or unstable angina requiring hospitalisation
                        </p>
                        <img src="\images\learn-more\David\David_Reduced_Graphic.svg" alt="" />
                        <span>
                            <table>
                                <tbody>
                                    <th>
                                        <tr><th style={{ fontWeight: '550' }}>No. at Risk:</th><th>{ }</th><th>{ }</th><th>{ }</th><th>{ }</th><th>{ }</th><th>{ }</th></tr>
                                        <tr><th>Placebo</th><th>1671</th><th>1497</th><th>1314</th><th>1058</th><th>845</th><th>475</th></tr>
                                        <tr><th>VAZKEPA</th><th>1737</th><th>1587</th><th>1430</th><th>1186</th><th>983</th><th>547</th></tr>
                                    </th>
                                </tbody>
                            </table>
                        </span>

                    </div>
                    <div className={styles.arrow}>
                        <img src="\images\learn-more\John\John_Reduced_Arrow.jpg" alt="" />
                    </div>
                </div> */}
                <div style={{ display: 'flex', alignSelf: 'center', marginBottom: 80, position: 'relative', top: '4vh' }}>
                    <img src="/images/john-reduced-1.png" alt="" style={{ width: 583 }} />
                    <img src="/images/john-reduced-2.png" alt="" style={{ width: 220 }} />
                </div>
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
                    <img src="/images/john-reduced-3.png" alt="" onClick={() => {
                        setShowPopup(true);
                        setPopupIndex(0);
                    }}
                        style={{ width: 180, marginRight: 40 }}
                    />
                    <img src="/images/john-reduced-4.png" alt="" onClick={() => {
                        setShowPopup(true);
                        setPopupIndex(1);
                    }}
                        style={{ width: 281, marginRight: 40 }}
                    />
                    <img src="/images/john-reduced-5.png" alt="" onClick={() => {
                        setShowPopup(true);
                        setPopupIndex(2);
                    }}
                        style={{ width: 236 }}
                    />
                </div>
                <p style={{ position: 'relative', top: '10vh', left: '2.5vw', fontSize: '0.8rem', }}>
                    *REDUCE-IT was not designed to specifically test hypotheses in subgroups.<br />† Time-to-event analysis. RRR and ARR for the primary endpoint were calculated based on the observed event rate: 20.8% in VAZKEPA arm vs 29.4% in the placebo arm over a median<br />follow up period of 4.8 years.<sup style={{fontSize: '0.45rem'}}>1</sup>                </p>

                <ArrowButtons left />

                <Footer imgSrc='reference-5.3.3.3.png'
                    popupImgSrc={['/images/john-reduce-popup-1.png', '/images/john-reduce-popup-2.png', '/images/john-reduce-popup-3.png']}
                    showPopup={showPopup}
                    setShowPopup={setShowPopup}
                    popupIndex={popupIndex}
                />
            </div>





        </div>


    )
}
