import { CharacterList } from './Components/Character/CharactersList';
import { CharacterDetails } from './Components/Character/CharacterDetails';
import { Navbar } from './Components/Basic/Navbar';
import { Footer } from './Components/Basic/Footer';
import { Routes, Route } from 'react-router-dom'
import styles from './App.module.css'
import { BattleCreate } from './Components/Battles/BattleCreate';
import { useLocalStorage } from './hooks/useLocalStorage';
import { AuthContext } from './contexts/authContext';
import { Login } from './Components/User/Login';
import { Register } from './Components/User/Register';
import { Logout } from './Components/User/Logout';
import { Home } from './Components/Basic/Home';
import { Profile } from './Components/User/Profile'
import { useEffect } from 'react';
import { login } from './services/userService';
import { initialDataLoad } from './helpers/prefetchData';


function App() {
    /*     const [characters, setCharacters] = useState([])
        useEffect(() => {
            getAllCharacters()
                .then(result => {
                    setCharacters(Object.values(result))
                })
        }, []);
     */


    const [user, setUser] = useLocalStorage('auth', {})

    // This is only used to populate data in the app
/*     useEffect(() => {
        login('admin@abv.bg', 'admin')
        .then(authData => {
            userLogin(authData)
            
        })
    }, []) */

    const userLogin = (authData) => {
        setUser(authData)
    }

    const userLogout = () => {
        setUser({})
    }
    
    return (
        <AuthContext.Provider value={{ user, userLogin, userLogout }}>
            <div style={styles} className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/characters" element={<CharacterList /* setCharacters={setCharacters} characters={characters}  */ />} />
                    <Route path="/characters/:charId" element={<CharacterDetails />} />
                    <Route path="/battle-create/:characterIds" element={<BattleCreate />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile/:userId" element={<Profile />} />

                </Routes>
                <Footer></Footer>

            </div>
        </AuthContext.Provider>

    );
}

export default App;
