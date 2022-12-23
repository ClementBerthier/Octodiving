
import {Link} from 'react-router-dom';
import "./stylesFooter.scss";

function Footer (){
    return (
        <div className="footer">
            <div className="contact">
                <div className="contactContainer">
                    <div>
                        <h1></h1>   {/* Nos clients */}
                        <div className="clientList"></div> {/* La liste des client, css non fait attente du format*/}
                    </div>
                    <div>
                        <div className="contactDetail">
                            <div className="way">
                                <div>
                                    <img src="../img/phone-call.svg" alt="Telephone" />
                                </div>
                                <div className="contactText">
                                    <p className="contactTitle">Nous appeler: </p>
                                    <p className="contactValue">+33 6 30 24 27 74</p>
                                </div>
                            </div>
                            <div className="way">
                                <div>
                                    <img src="../img/mail.svg" alt="E-mail" />
                                </div>
                                <div className="contactText">
                                    <p className="contactTitle">E-mail: </p>
                                    <Link to="florian.bessiere.pro@gmail.com" className="contactValue">florian.bessiere.pro@gmail.com</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='endingFooter'>
                <div className="returnPresentation">
                    <Link to="/presentation">
                        <img src="../img/nom-vectoriel-couleur.png" alt="Logo-site" />
                    </Link>
                </div>
                <div className="logo">
                    <Link to="https://www.facebook.com/profile.php?id=100087820029338" className='linkLogo'>
                        <img src="../img/facebook.svg" alt="logo-facebook"/>
                    </Link>
                    <Link to="https://www.instagram.com/octo.diving.fr/" className='linkLogo'>
                        <img src="../img/instagram.svg" alt="logo-instagram" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;