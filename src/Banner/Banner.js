import styles from './banner.module.css';

const Banner = ( { title, info, children } ) => {
    return (
        <div className={styles.banner}>
            <h1 className={styles.bannerTitle}>{title}</h1>
            <p className={styles.bannerInfo}>{info}</p>
            <div className={styles.bannerCenter}>{children}</div>
        </div>
    );
};

export default Banner;