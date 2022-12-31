import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import "./stylesContact.scss";

function Contact (){
    return (
        <div className="contact">
            <NavBar />
            <div className="contactContainer">
                <div className="contactTitle">
                    <h1>Nous Contacter</h1>
                </div>
                <div className="contactParagraph">
                    <h2>Parlons un peu</h2>
                    <p>Faites-nous part de vos réflexions.</p>
                </div>
                <div className="infoContainer">
                    <div className="logoContainer">
                        <div className="genericContact">
                            <div className="contactItem">
                                <img src="./img/phone-call-contact.svg" alt="Télephone" />
                                <h3>NUMERO DE TELEPHONE</h3>
                                <p>06 30 24 27 77</p>
                            </div>
                            <div className="contactItem">
                                <img src="./img/facebook-contact.svg" alt="Facebook" />
                                <h3>FACEBOOK</h3>
                                <a href="https://www.facebook.com/profile.php?id=100087820029338">Octo Diving</a>                                
                            </div>
                        </div>
                        <div className="socialContact">
                            <div className="contactItem">
                                <img src="./img/mail-contact.svg" alt="Email" />
                                <h3>EMAIL</h3>
                                <p>florian.bessiere.pro@gmail.com</p>
                            </div>
                            <div className="contactItem instagram">
                                <img src="./img/instagram-contact.svg" alt="Instagram" />
                                <h3>INSTAGRAM</h3>
                                <a href="https://www.instagram.com/octo.diving.fr/">Octo Diving</a>
                            </div>
                        </div>
                    </div>
                    <div className="imgContainer">
                        <img src="./img/plongeur-contact.jpg" alt="Plongeur" />
                    </div>

                </div>
            </div>
            <Footer />

        </div>
        
    )
}

export default Contact;