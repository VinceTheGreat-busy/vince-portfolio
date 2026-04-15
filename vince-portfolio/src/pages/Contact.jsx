import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faGitlab,
    faFacebook,
    faInstagram,
    faLinkedin,
    faEnvelope
} from "@fortawesome/free-brands-svg-icons";
import '../assets/css/contact.css';

function Contact() {
    return (
        <main>
            <div className="contact-page">
                <h1>Let’s Connect</h1>

                <div className="contact-grid">

                    <a className="contact-card" href="https://github.com/" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                        <p>GitHub</p>
                    </a>

                    <a className="contact-card" href="https://gitlab.com/" target="_blank">
                        <FontAwesomeIcon icon={faGitlab} />
                        <p>GitLab</p>
                    </a>

                    <a className="contact-card" href="https://facebook.com/" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} />
                        <p>Facebook</p>
                    </a>

                    <a className="contact-card" href="mailto:yourgmail@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p>Gmail</p>
                    </a>

                    <a className="contact-card" href="https://instagram.com/" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} />
                        <p>Instagram</p>
                    </a>

                    <a className="contact-card" href="https://linkedin.com/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                        <p>LinkedIn</p>
                    </a>

                </div>
            </div>
        </main>
    );
}

export default Contact;