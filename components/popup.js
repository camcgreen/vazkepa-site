import styles from '../styles/Popup.module.css';

const Popup = ({ setShowPopup, popupImgSrc, popupIndex }) => {
    return (
        <div className='popupBg' id='popup'>
            <div className={styles.bg} onClick={() => setShowPopup(false)} />
            <img className={styles.img} src={popupImgSrc[popupIndex]} alt='' />
        </div>
    );
};

export default Popup;
