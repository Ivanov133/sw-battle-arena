import { CharacterList } from './Components/Character/CharactersList';
import { CharacterDetails } from './Components/Character/CharacterDetails';
import { Navbar } from './Components/Basic/Navbar';
import { Footer } from './Components/Basic/Footer';
import { Routes, Route } from 'react-router-dom'
import styles from './App.module.css'
import { BattleCreate } from './Components/Battles/BattleCreate';
import { CharactersContext } from './contexts/charactersContext'
import { useState, useEffect } from 'react';
import { getAllCharacters } from './services/characterService'


function App() {
    const [characters, setCharacters] = useState([])
    useEffect(() => {
        getAllCharacters()
            .then(result => {
                setCharacters(Object.values(result))
            })
    }, []);


    return (

        <div style={styles} className="App">
            <CharactersContext.Provider value={{ characters, setCharacters }}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<h1>Home Page</h1>} />
                    <Route path="/characters" element={<CharacterList setCharacters={setCharacters} characters={characters} />} />
                    <Route path="/characters/:charId" element={<CharacterDetails />} />
                    <Route path="/battle-create" element={<BattleCreate />} />
                </Routes>
                <Footer></Footer>
            </CharactersContext.Provider >

        </div>

    );
}

export default App;
