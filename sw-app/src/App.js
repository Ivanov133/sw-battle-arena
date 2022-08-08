import { CharacterList } from './Components/Character/CharactersList';
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
import { BattlesListPage } from './Components/Battles/BattlesListPage';
import { Battle } from './Components/Battles/Battle';
import { CharacterDetailsPage } from './Components/Character/CharacterDetailsPage';


function App() {
    const [user, setUser] = useLocalStorage('auth', {})

    const userLogin = (authData) => {
        setUser(authData)
    }

    const userLogout = () => {
        setUser({})
    }

    console.log(user.accessToken);

    return (
        <AuthContext.Provider value={{ user, userLogin, userLogout }}>
            <div style={styles} className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/characters" element={<CharacterList />} />
                    <Route path="/characters/:charId" element={<CharacterDetailsPage />} />
                    <Route path="/characters/:charId/:commentId" element={<CharacterDetailsPage />} />
                    <Route path="/battles-catalog/" element={<BattlesListPage />} />
                    <Route path="/battle-details/:battleId" element={<Battle />} />
                    <Route path="/battle-details/:battleId/:commentId" element={<Battle />} />
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
