import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import PriceArray from "../PriceArray/PriceArray";
import Formulaire from "../Formulaire/Formulaire";
 
import "./stylesProfessionnel.scss";

function Professionnel (){
    return (
        <div className="professionnel">
            <NavBar />
            <div>
                <div className="arrayContainer">
                    <h1>Tarif</h1>
                    <div className="array">
                        <PriceArray />
                    </div>
                </div>
                <div className="textContainer">
                    <p>Vous souhaitez un devis ou de plus amples informations ? N'hésitez pas a remplir le formulaire ci-dessous et a posez vos question dans l'encart prévu a cet effet.</p>
                </div>

                <div className="formContainer">
                    <h2>Vos Renseignements</h2>
                    <Formulaire />
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default Professionnel;