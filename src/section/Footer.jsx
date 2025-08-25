import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div>
            <div className={styles.interno}>
            <p>Meu contato:</p>
            <p>(21) 97346-4104</p>
            </div>
            <div className={styles.interno}>
            <p>E-mail:</p>
            <p>mbrito0530@gmail.com</p>
            </div>
            <div className={styles.interno2}>
                <ul>
                    <li><a id="git" target="_blank" href="https://github.com/MBritto05" aria-label="Link do Github"><FaGithub size={40}/></a></li>
                    <li><a  target="_blank" href="https://www.linkedin.com/in/miguel-brito-silverio-a4b6262ba/" aria-label="Link do meu linkdin"><FaLinkedin size={40}/></a></li>
                    <li>
                        <a 
                         target="_blank" 
                            href="https://api.whatsapp.com/send?phone=5521973464104"
                            
                            ><FaWhatsapp size={40}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    </footer>
  )
}