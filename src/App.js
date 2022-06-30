import { Routes,Route } from 'react-router-dom';
import './App.css';
import Addnote from './Components/Addnote';
import Shownote from './Components/Shownote';
import Favoritenote from './Components/Favoritenote';
import CompletedNote from './Components/CompletedNote';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Addnote/>}/>
        <Route path='/shownote' element={<Shownote/>}/>
        <Route path='/favnote' element={<Favoritenote/>}/>
        <Route path='/finishednote' element={<CompletedNote/>}/>
      </Routes>
    </div>
  );
}

export default App;
