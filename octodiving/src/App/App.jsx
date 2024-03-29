import { Route, Routes } from 'react-router';
import Calendrier from '../Calendrier/Calendrier';
import ConfirmationSendEmail from '../ConfirmationSendEmail/ConfirmationSendEmail';
import Contact from '../Contact/Contact';
import Presentation from "../Presentation/Presentation";
import Professionnel from '../Professionnel/Professionnel';
import './App.scss';

function App() {
  return (
   <Routes>
    <Route path="/" element={<Presentation />} />
    <Route path="/professionnel" element={<Professionnel />} />
    <Route path="/calendrier" element={<Calendrier />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/thanks" element={<ConfirmationSendEmail />} />

   </Routes>
  );
}

export default App;
