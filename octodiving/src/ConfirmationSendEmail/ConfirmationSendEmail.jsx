import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
 
import "./stylesConfirmationSendEmail.scss";

function ConfirmationSendEmail (){
    return (
        <div className="confirmationSendEmail">
            <NavBar />
            <h1 className="confirm">Merci! Je vous recontacte le plus rapidement possible</h1>            
            <Footer />

        </div>
    )
}

export default ConfirmationSendEmail;