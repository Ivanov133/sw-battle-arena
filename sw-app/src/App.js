import { CharacterList } from './Components/Character/CharactersList';
import { Navbar } from './Components/Navigation/Navbar';
import { Footer } from './Components/Navigation/Footer';
import { Routes, Route } from 'react-router-dom'
import styles from './App.module.css'
import { BattleCreatePage } from './Components/Battles/BattleCreatePage';
import { useLocalStorage } from './hooks/useLocalStorage';
import { AuthContext } from './contexts/authContext';
import { Login } from './Components/User/Login';
import { Register } from './Components/User/Register';
import { Logout } from './Components/User/Logout';
import { Home } from './Components/Navigation/Home';
import { Profile } from './Components/User/Profile'
import { BattlesListPage } from './Components/Battles/BattlesListPage';
import { BattleDetailsPage } from './Components/Battles/BattleDetailsPage';
import { CharacterDetailsPage } from './Components/Character/CharacterDetailsPage';
import { Introduction } from './Components/Navigation/Introduction';

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
                    <Route path="/battle-details/:battleId" element={<BattleDetailsPage />} />
                    <Route path="/battle-details/:battleId/:commentId" element={<BattleDetailsPage />} />
                    <Route path="/battle-create/:characterIds" element={<BattleCreatePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile/:userId" element={<Profile />} />
                    <Route path="/introduction" element={<Introduction />} />
                </Routes>
                <Footer></Footer>

            </div>
        </AuthContext.Provider>

    );
}

export default App;
