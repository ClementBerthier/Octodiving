import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import "./stylesContact.scss";

function Contact (){
    return (
        <div className="contact">
            <NavBar />
            <div>
                <div>
                    <h1>Nous Contacter</h1>
                </div>
                <div>
                    <h2>Parlons un peu</h2>
                    <p>Faites-nous part de vos réflexions.</p>
                </div>
                <div>
                    <div>
                        <div>
                            <img src="" alt="Télephone" />
                            <h3>NUMERO DE TELEPHONE</h3>
                            <p>06 30 24 27 77</p>
                        </div>
                        <div>
                            <img src="" alt="Email" />
                            <h3>EMAIL</h3>
                            <p>florian.bessiere.pro@gmail.com</p>
                        </div>
                        <div>
                            <img src="" alt="Facebook" />
                            <h3>FACEBOOK</h3>
                            <a href="">Octo Diving</a>
                        </div>
                        <div>
                            <img src="" alt="Instagram" />
                            <h3>INSTAGRAM</h3>
                            <a href="">Octo Diving</a>
                        </div>
                    </div>
                    <div>
                        <img src="" alt="Plongeur" />
                    </div>

                </div>
            </div>
            <Footer />

        </div>
        
    )
}

export default Contact;