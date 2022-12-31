import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import "./stylesCalendrier.scss";

function Calendrier (){
    return (
        <div className="calendrier">
            <NavBar />
            <div className="calendrierContainer">
                <div>
                    <h1>Calendrier des disponibilitées</h1>
                </div>
                <div>
                    <iframe src="https://calendar.google.com/calendar/embed?src=256b8ad70ad3e214fb07658fc5e691b5e8bf1eca8dce5e21e82e632414c6ea40%40group.calendar.google.com&ctz=Europe%2FParis" title="Calendrier des disponibilitées"width="800" height="600"></iframe>                    
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Calendrier;