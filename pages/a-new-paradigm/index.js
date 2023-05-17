import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Gap.module.css';
import Footer from '../../components/footer';
import Sidebar from '../../components/sidebar';

export default function Paradigm() {
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
                    <span className='blue'>
                        VAZKEPA IS THE FIRST AND ONLY TREATMENT
                    </span>{' '}
                    OF ITS CLASS
                    <br /> APPROVED IN EUROPEAN UNION FOR CV RISK REDUCTION
                    <sup>1, 2</sup>
                </h1>
                <img
                    src='/images/what-is-vazkepa-1a.png'
                    alt=''
                    className={styles.whatIsVazkepa1}
                />
                <img
                    className='next'
                    src='/images/next.svg'
                    alt=''
                    onClick={() =>
                        router.push('/a-new-paradigm/how-does-vazkepa-work')
                    }
                />
                <img
                    src='/images/what-is-vazkepa-2.png'
                    alt=''
                    className={styles.buttonWhat}
                    onClick={() => {
                        setShowPopup(true);
                        setPopupIndex(0);
                    }}
                />
                <Footer
                    imgSrc='reference-3.0.png'
                    popupImgSrc={['/images/what-is-vazkepa-popup-1.png']}
                    showPopup={showPopup}
                    setShowPopup={setShowPopup}
                    popupIndex={popupIndex}
                />
            </div>
        </>
    );
}
