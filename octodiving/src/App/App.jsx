import { Route, Routes } from 'react-router';
import Presentation from "../Presentation/Presentation";
import './App.scss';

function App() {
  return (
   <Routes>
    <Route path="/" element={<Presentation />} />
   </Routes>
  );
}

export default App;
