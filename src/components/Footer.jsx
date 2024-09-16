import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>

            <div className={styles.footerInline}>
                <div className={styles.footerRow}>
                    <a href="https://github.com/gabasaura" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                        <FaGithub /><span className={styles.iconLinkTitle}>Github</span>
                    </a>
                    <a href="https://www.linkedin.com/in/gabriela-garin/" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                        <FaLinkedin /><span className={styles.iconLinkTitle}>Linkedin</span>
                    </a>
                </div>

                <div className={styles.footerRow}>
                    <a href="mailto:gabriela.garin@gmail.com" className={styles.cvLink}>
                        💌
                    </a>
                    <a href="/cv/gabriela-garin__es.pdf" target="_blank" className={styles.cvLink}>
                        CV<b> ES</b>
                    </a>
                    <a href="/cv/gabriela-garin__en.pdf" target="_blank" className={styles.cvLink}>
                        CV<b> EN</b>
                    </a>
                </div>
            </div>

            <div className={styles.footerBloc}>
                <span className={styles.copyright}><b>GABA </b>✦ 2024</span>
            </div>

        </footer>
    );
};

export default Footer;
