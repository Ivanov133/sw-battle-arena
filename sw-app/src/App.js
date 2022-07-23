import { CharacterList } from './Components/Character/CharactersList';
import { CharacterDetails } from './Components/Character/CharacterDetails';
import { Navbar } from './Components/Basic/Navbar';
import { Footer } from './Components/Basic/Footer';
import { Routes, Route } from 'react-router-dom'
import styles from './App.module.css'
import { Battle } from './Components/Battles/Battle';
function App() {
  return (

    <div style={styles} className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/characters" element={<CharacterList />} />
        <Route path="/characters/:charId" element={<CharacterDetails />} />
        <Route path="/battle-create" element={<Battle />} />
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
