import styles from '../styles/Popup.module.css';

const Popup = ({ setShowPopup, popupImgSrc, popupIndex }) => {
    return (
        <div className='popupBg' id='popup'>
            <div className={styles.bg} onClick={() => setShowPopup(false)} />
            <img className={styles.img} src={popupImgSrc[popupIndex]} alt='' />
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
                onClick={() => setShowPopup(false)}
            />
        </div>
    );
};

export default Popup;
