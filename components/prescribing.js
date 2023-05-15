import styles from '../styles/Prescribing.module.css';

const Prescribing = ({ setShowPrescribingPopup }) => {
    return (
        <div className='popupBg' id='prescribingPopup'>
            <div
                className={styles.bg}
                onClick={() => setShowPrescribingPopup(false)}
            />
            <img className={styles.img} src='/images/prescribing.png' alt='' />
        </div>
    );
};

export default Prescribing;
