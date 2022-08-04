import { Character } from "./Character"
import { useState, useEffect, useContext } from "react"
import styles from "./CharactersList.module.css"
import { BattlePanel } from '../Battles/BattlePanel'
import { CharacterCreateForm } from "../Forms/CharacterCreateForm"
import { createCharacter, getAllCharacters } from '../../services/characterService'
import { charactersData } from "../../helpers/prefetchData"
import { AuthContext } from '../../contexts/authContext'
import { useNavigate } from "react-router-dom"


export const CharacterList = () => {
    const navigate = useNavigate()
    const [characters, setCharacters] = useState([])
    const [battleCharacters, setBattle] = useState([])
    const [formType, setFormType] = useState(null)
    const { user } = useContext(AuthContext)

    useEffect(() => {

            getAllCharacters()
                .then(result => {
                    setCharacters(Object.values(result))
               })
        
    }, []);



    //This is optional to use - load data into server and make authorized request - log in to make button visible
    function initialDataLoad() {
        charactersData.forEach(x => {
            createCharacter(x)
        })
        navigate('/')

    }

    function selectCharacters(ev, character) {
        if (battleCharacters.length === 0 || battleCharacters.length === 2) {
            setBattle(battleCharacters => [character])

        }
        else if (battleCharacters.length === 1 && battleCharacters[0] !== character) {
            setBattle(battleCharacters => [...battleCharacters, character])

        }

    }

    function userAction(action) {
        setFormType(action)
    }

    function closeHandler() {
        setFormType(null);
    };

    return (
        <>
            {/* Battle panel which leads to the Create Battle page */}
            <BattlePanel data={battleCharacters} />
            
            {user.email && characters.length < 1
                ?
                <button onClick={initialDataLoad}>Load initial data app</button>
                : null}
            <main className={styles['character-list-container']}>



                {/* Character List*/}

                <h1>Characters Catalog</h1>
                {characters.map(character => <Character clickEv={ev => selectCharacters(ev, character)} key={character._id} character={character} />)}

                {/* Charactet create form*/}
                {formType === "Create" && <CharacterCreateForm setCharacters={setCharacters} onClose={closeHandler} />}
                {user.email 
                    ?
                    <div onClick={() => userAction("Create")} title="Add Character" className={styles['add']} >
                        <img src="https://i.ibb.co/DpQ6Xxx/add-icon-png-2459.png" alt="" />
                    </div> 
                    :
                    null}
            </main>
        </>
    )
}