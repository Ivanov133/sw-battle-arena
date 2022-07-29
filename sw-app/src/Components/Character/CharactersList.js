import { Character } from "./Character"
import { useState, useEffect } from "react"
import styles from "./CharactersList.module.css"
import { BattlePanel } from '../Battles/BattlePanel'
import { CharacterCreateForm } from "../Forms/CharacterCreateForm"
import { getAllCharacters } from '../../services/characterService'

export const CharacterList = () => {
    const [characters, setCharacters] = useState([])
    const [battleCharacters, setBattle] = useState([])
    const [formType, setFormType] = useState(null)

    useEffect(() => {
        getAllCharacters()
            .then(result => {
                setCharacters(Object.values(result))
            })
    }, []);

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

            <main className={styles['character-list-container']}>

                {/* Character List*/}

                <h1>Characters Catalog</h1>
                {characters.map(character => <Character setCharacters={setCharacters} clickEv={ev => selectCharacters(ev, character)} key={character._id} character={character} />)}

                {/* Charactet create form*/}
                {formType === "Create" && <CharacterCreateForm setCharacters={setCharacters} onClose={closeHandler} />}
                <div onClick={() => userAction("Create")} title="Add Character" className={styles['add']} >
                    <img src="https://i.ibb.co/DpQ6Xxx/add-icon-png-2459.png" alt="" />
                </div>
            </main>
        </>
    )
}