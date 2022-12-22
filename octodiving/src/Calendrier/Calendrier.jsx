import Footer from "../Footer/Footer";
import Navbar from "../NavBar/NavBar";
import "./stylesCalendrier.scss";

function Calendrier (){
    return (
        <div className="calendrier">
            <Navbar />
            <div>
                <h1>Calendrier</h1>
                <p>Calendrier des disponibilitées</p>
                <div>
                    Calendrier
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Calendrier;