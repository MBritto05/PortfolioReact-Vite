import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div>
            <div className={styles.interno}>
            <p>Meu contato:</p>
            <p>(11) 97521-9737</p>
            </div>
            <div className={styles.interno}>
            <p>E-mail:</p>
            <p>airton.saoliviera@gmail.com</p>
            </div>
            <div className={styles.interno2}>
                <ul>
                    <li><a  target="_blank" href="https://github.com/AirtonOliveiraS" aria-label="Link do Github"><FaGithub size={40}/></a></li>
                    <li><a  target="_blank" href="https://www.linkedin.com/in/airton-dos-santos-/" aria-label="Link do meu linkdin"><FaLinkedin size={40}/></a></li>
                    <li>
                        <a 
                         target="_blank" 
                            href="https://api.whatsapp.com/send?phone=5511975219737"
                            
                            ><FaWhatsapp size={40}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    </footer>
  )
}