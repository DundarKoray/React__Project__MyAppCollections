
import styles from './footer.module.css'
// import links from '../constants/links'
import socialIcons from '../constants/social-icons'
import { Link } from 'react-router-dom'
// import AniLink from "gatsby-plugin-transition-link/AniLink"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            {/* <div className={styles.links}>
                {links.map((item,index)=>{
                    // return <Link key={index} to={item.path}>{item.text}</Link>
                    return <a key={index} href={item.path}>{item.text}</a>
                })}
            </div> */}
            <div className={styles.icons}>
                {socialIcons.map((item,index)=>{
                    return <a key={index} target="_blank" rel="noopener noreferrer" href={item.url}>{item.icon}</a>
                })}
            </div>
            <div className={styles.copyright}>
                copyright &copy; <Link style={{textDecoration:'underline',outline:'none', background:'transparent', color:'#d4a53f'}} to={"./about"}>Koray Dündar</Link> {new Date().getFullYear()} all rights reserved.
            </div>
        </footer>
    );
};

export default Footer;