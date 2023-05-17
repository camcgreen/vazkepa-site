import styles from '../styles/Prescribing.module.css';

const Prescribing = ({ setShowPrescribingPopup }) => {
    return (
        <div className='popupBg' id='prescribingPopup'>
            <div
                className={styles.bg}
                onClick={() => setShowPrescribingPopup(false)}
            />
            <img className={styles.img} src='/images/prescribing.png' alt='' />
            <img
                src='/images/close.png'
                alt=''
                className={styles.close}
                style={{
                    position: 'fixed',
                    top: 235,
                    right: 550,
                    zIndex: 5,
                    cursor: 'pointer',
                }}
                onClick={() => setShowPrescribingPopup(false)}
            />
        </div>
    );
};

export default Prescribing;
