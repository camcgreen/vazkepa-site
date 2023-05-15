import styles from '../styles/References.module.css';

const References = ({ setShowReferencesPopup, imgSrc }) => {
    return (
        <div className='popupBg' id='referencesPopup'>
            <div
                className={styles.bg}
                onClick={() => setShowReferencesPopup(false)}
            />
            {/* <div className={styles.imgHolder}> */}
            <img className={styles.img} src={`/images/${imgSrc}`} alt='' />
            {/* <img src='/images/close.png' alt='' className={styles.close} /> */}
            {/* </div> */}
        </div>
    );
};

export default References;
