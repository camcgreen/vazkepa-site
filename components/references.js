import styles from '../styles/References.module.css';

const References = ({ setShowReferencesPopup, imgSrc }) => {
    return (
        <div className='popupBg' id='referencesPopup'>
            <div
                className={styles.bg}
                onClick={() => setShowReferencesPopup(false)}
            />
            <img className={styles.img} src={`/images/${imgSrc}`} alt='' />
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
                onClick={() => setShowReferencesPopup(false)}
            />
        </div>
    );
};

export default References;
