import { Character } from "./Character"
import { useState, useEffect, useContext } from "react"
import styles from "./CharactersList.module.css"
import { BattleSelectPanel } from '../Battles/BattleSelectPanel'
import { CharacterCreateForm } from "../Forms/CharacterForms/CharacterCreateForm"
import { getAllCharacters } from '../../services/characterService'
import { charactersData, loadData } from "../../helpers/prefetchData"
import { AuthContext } from '../../contexts/authContext'
import { useNavigate } from "react-router-dom"
import { Paginator } from "../Navigation/Paginator"

export const CharacterList = () => {
    const navigate = useNavigate()
    const [characters, setCharacters] = useState([])
    const [battleCharacters, setBattle] = useState([])
    const [formType, setFormType] = useState(null)
    const { user } = useContext(AuthContext)
    const [currentPage, setCurrentPage] = useState(1)
    const [charactersPerPage] = useState(10)

    useEffect(() => {
        getAllCharacters()
            .then(result => {
                if (result) {
                    setCharacters(Object.values(result))
                }
            })

    }, []);

    const indexOfLastCharacter = currentPage * charactersPerPage
    const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage
    const currentCharacters = characters.slice(indexOfFirstCharacter, indexOfLastCharacter)


    //This is optional to use - load data into server and make authorized request - log in to make button visible
    function initialDataLoad() {
        charactersData.forEach(x => loadData(x))
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

    function paginate(n) {
        setCurrentPage(n)
    }

    return (
        <>
            {/* Battle panel which leads to the Create Battle page */}
            <BattleSelectPanel data={battleCharacters} />

            {/* The intial data POST should be available to newly registered users, since they will have a profile object */}
            {user.email && user.email !== "peter@abv.bg" && user.email !== "george@abv.bg" && user.email !== "admin@abv.bg " && characters.length < 1
                ?
                <button className={styles["load-data-btn"]} onClick={initialDataLoad}>Load initial characters or add your own</button>
                : null}
            <main className={styles['character-list-container']}>

                {/* Character List*/}

                <h1>Characters Catalog</h1>
                {characters.length > 0 ?
                    currentCharacters.map(character =>
                        <Character clickEv={ev => selectCharacters(ev, character)}
                            key={character._id}
                            character={character}
                        />) : <p>No characters available. Please login to add new characters or load data from database.</p>}

                {formType === "Create" && <CharacterCreateForm setCharacters={setCharacters} onClose={closeHandler} />}

                {/* Add character */}
                {user.email
                    ?
                    <div onClick={() => userAction("Create")} title="Add Character" className={styles['add']} >
                        <img src="https://i.ibb.co/DpQ6Xxx/add-icon-png-2459.png" alt="" />
                    </div>
                    :
                    null}
                <Paginator charactersPerPage={charactersPerPage} totalCharacters={characters.length} paginate={paginate}/>
            </main>
        </>
    )
}