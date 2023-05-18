import { useEffect, useState } from 'react';
import Prescribing from './prescribing';
import References from './references';
import Popup from './popup';
import styles from '../styles/Footer.module.css';
import { useRouter } from 'next/router';

const Footer = ({
    imgSrc,
    popupImgSrc,
    showPopup,
    setShowPopup,
    popupIndex,
}) => {
    const router = useRouter();

    const [showPrescribingPopup, setShowPrescribingPopup] = useState(false);
    const [showReferencesPopup, setShowReferencesPopup] = useState(false);
    useEffect(() => {
        const popup = document.getElementById('prescribingPopup');
        if (showPrescribingPopup) {
            popup.style.opacity = 1;
            popup.style.pointerEvents = 'all';
        } else {
            popup.style.opacity = 0;
            popup.style.pointerEvents = 'none';
        }
    }, [showPrescribingPopup]);
    useEffect(() => {
        const popup = document.getElementById('referencesPopup');
        if (showReferencesPopup) {
            popup.style.opacity = 1;
            popup.style.pointerEvents = 'all';
        } else {
            popup.style.opacity = 0;
            popup.style.pointerEvents = 'none';
        }
    }, [showReferencesPopup]);
    useEffect(() => {
        const popup = document.getElementById('popup');
        if (popup) {
            if (showPopup) {
                popup.style.opacity = 1;
                popup.style.pointerEvents = 'all';
            } else {
                popup.style.opacity = 0;
                popup.style.pointerEvents = 'none';
            }
        }
    }, [showPopup]);

    const isMedicalInfoPage = () => {
        const string = router.pathname;
        const parts = string.split('/'); // Split the string by '/'
        const lastPart = parts[parts.length - 1]; // Get the last part of the split string

        const result =
            lastPart == 'David' || lastPart == 'Karin' || lastPart == 'John'
                ? true
                : false;
        return result;
    };
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.left}>
                    <p>VAZKEPA ist in Deutschland nicht erhältlich</p>
                </div>
                <div className={styles.right}>
                    {isMedicalInfoPage() == true ? (
                        <div
                            style={{ opacity: '0.5' }}
                            className={styles.button}
                        >
                            <img src='/images/references.svg' alt='' />
                            <p>REFERENCES & ABBREVIATIONS</p>
                        </div>
                    ) : (
                        <div
                            className={styles.button}
                            onClick={() =>
                                setShowReferencesPopup(!showReferencesPopup)
                            }
                        >
                            <img src='/images/references.svg' alt='' />
                            <p>REFERENCES & ABBREVIATIONS</p>
                        </div>
                    )}
                    <div className={styles.line} />
                    <div
                        className={styles.button}
                        onClick={() =>
                            setShowPrescribingPopup(!showPrescribingPopup)
                        }
                    >
                        <img src='/images/prescribing.svg' alt='' />
                        <p>PRESCRIBING INFORMATION</p>
                    </div>
                </div>
            </footer>
            <Prescribing setShowPrescribingPopup={setShowPrescribingPopup} />
            <References
                setShowReferencesPopup={setShowReferencesPopup}
                imgSrc={imgSrc}
            />
            {popupImgSrc && (
                <Popup
                    setShowPopup={setShowPopup}
                    popupImgSrc={[...popupImgSrc]}
                    popupIndex={popupIndex}
                />
            )}
        </>
    );
};

export default Footer;
