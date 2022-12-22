import Footer from "../Footer/Footer";
import Navbar from "../NavBar/NavBar";

import "./stylesPresentation.scss";

function Presentation (){
    return (
        <>
        <Navbar />
        <div className="presentation">
            <div className="welcome">
                <h1>Bienvenue chez Octo Diving</h1>
            </div>
            <div className="secondMainDiv">
                <div>
                    <p>Besoin d'un coup de main !?</p>
                </div>
                <div>
                    <p>Vous êtes un centre professionnel ou un club associatif de plongée, et vous êtes à la recherche d'un moniteur de plongée pour renforcer votre équipe ?</p>
                    <p>Vous êtes au bon endroit ! </p>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <div>01</div>
                        <div>
                            <h2>Mobile</h2>
                            <p>Vivant dans un  fourgon aménagé</p>
                        </div>
                    </div>
                    <div>
                        <div>02</div>
                        <div>
                            <h2>Multi système</h2>
                            <p>Système français, PADI et SSI</p>
                        </div>
                    </div>
                    <div>
                        <div>03</div>
                        <div>
                            <h2>Multi fonction</h2>
                            <p>Moniteur de plongée, Instructeur de secourisme DAN, mécanique</p>
                        </div>
                    </div>
                    
                </div>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
            <div>
                <div>
                    <h1>Qui suis-je ?!</h1>
                </div>
                <div>
                    <h2>Description</h2>
                    <ul>
                        <li>Dessinateur industriel en mécanique au sein d'une grande entreprise pendant 10 ans.</li>
                        <li>Après la découverte de la plongée, et le passage de tous mes niveaux loisir. J'ai décidé de passer en 2022 mon DEJEPS de moniteur de plongée au sein du CREPS de Montpellier et de la structure Plongée Bleue de Banyuls-sur-Mer.</li>
                        <li>J'ai ensuite ouvert mon auto-entreprise de moniteur de plongée en structure.</li>
                        <li>Pour optimiser mon fonctionnement j'ai ensuite aménagé un fourgon et y vie dedans à l'année ce qui facilité mes déplacements dans les structures.</li>
                    </ul>
                    <h2>Certifications</h2>
                    <ul>
                        <li>DEJEPS E3</li>
                        <li>OWSI PADI :
                            <ul>
                                <li>Spécialité :
                                    <ul>
                                        <li>Deep Diver</li>
                                        <li>DSMBD</li>
                                        <li>Dry Suit Diver</li>
                                        <li>Enriched Air Diver</li>
                                        <li>U/W Navigator</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>OWSI SSI :
                            <ul>
                                <li>Spécialités :
                                    <ul>
                                        <li>Marine Ecology</li>
                                        <li>Stress & Rescue</li>
                                        <li>Perfect Buoyancy</li>
                                        <li>Navigation</li>
                                        <li>Night diving and Limited visibility</li>
                                        <li>Deep Diving</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>Dan Instructor :
                            <ul>
                                <li>Spécialités
                                    <ul>
                                        <li>IQC</li>
                                        <li>PBLS-D</li>
                                        <li>First Aid</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Presentation;