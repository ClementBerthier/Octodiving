import Footer from "../Footer/Footer";
import Navbar from "../NavBar/NavBar";
import PriceArray from "../PriceArray/PriceArray";
import Formulaire from "../Formulaire/Formulaire";
 
import "./stylesProfessionnel.scss";

function Professionnel (){
    return (
        <div className="professionnel">
            <Navbar />
            <div>
                <div className="arrayContainer">
                    <h1>Tarif</h1>
                    <div className="array">
                        <PriceArray />
                    </div>
                </div>
                <div className="formContainer">
                    <h2>Vos Rensignements</h2>
                    <Formulaire />
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default Professionnel;