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


            <div className={` content`} style={{ height: '80%' }}>
                <h1>

                    <span className='blue'>VAZKEPA</span> REDUCED THE RISK OF MAJOR CV EVENTS IN PATIENTS WITH <span style={{ fontWeight: '500' }}>RECENT ACS<sup style={{ fontSize: '15px', position: 'relative', top: '-2px' }}>1</sup></span>

                </h1>
                <h2 style={{ fontWeight: 500, position: 'relative', top: '4vh' }}>Post hoc analysis of REDUCE-IT in patients with recent ACS<sup style={{ fontSize: '10px', position: 'relative', top: '-0px' }}>1</sup></h2>



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
                                        <tr><th>Placebo</th><th>940</th><th>900</th><th>724</th><th>624</th><th>624</th><th>363</th></tr>
                                        <tr><th>VAZKEPA</th><th>897</th><th>865</th><th>820</th><th>687</th><th>697</th><th>342</th></tr>
                                    </th>
                                </tbody>
                            </table>
                        </span>

                    </div>
                    <div className={styles.arrow}>
                        <img src="\images\learn-more\David\David_Reduced_Arrow.jpg" alt="" />
                    </div>
                </div> */}
                <div style={{ display: 'flex' }}>
                    <img src="/images/david-reduced-1.png" alt="" style={{ width: 708, marginLeft: 40, marginRight: 80, position: 'relative', top: '4vh' }} />
                    <img src="/images/david-reduced-2.png" alt="" style={{ width: 200 }} />
                </div>
                <div className={styles.bottomReducedRisk} style={{ marginTop: 40 }}>
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
                    <img src="/images/david-reduced-4.png" alt="" onClick={() => {
                        setShowPopup(true);
                        setPopupIndex(0)
                    }}
                        style={{ width: 287, marginRight: 40 }}
                    />
                    <img src="/images/david-reduced-3.png" alt="" onClick={() => {
                        setShowPopup(true);
                        setPopupIndex(1)
                    }}
                        style={{ width: 235 }}
                    />
                </div>
                <p style={{ position: 'relative', top: '12vh', left: '2.5vw', fontSize: '0.8rem', }}>
                    VAZKEPA reduced risk total primary endpoint events by 36% (RR 0.64; 95% CI 0.45-0.90, p=0.01).
                </p>

                <ArrowButtons left />

                <Footer imgSrc='reference-5.1.3.3.png'
                    popupImgSrc={['/images/david-reduced-popup-1.png', '/images/david-reduced-popup-2.png']}
                    showPopup={showPopup}
                    setShowPopup={setShowPopup}
                    popupIndex={popupIndex}
                />
            </div>





        </div>


    )
}
