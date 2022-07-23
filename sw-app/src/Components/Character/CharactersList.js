import { Character } from "./Character"
import { useState, useEffect } from "react"
import styles from "./CharacterList.module.css"
import { BattlePanel } from '../Battles/BattlePanel'
import { CharacterCreateForm } from "../Forms/CharacterCreateForm"

export const CharacterList = () => {
    const [characters, setCharacters] = useState([])
    const [battleCharacters, setBattle] = useState([])
    const [formType, setFormType] = useState(null)


    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/characters`)
            .then(response => response.json())
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

    const closeHandler = () => {
        setFormType(null);
    };

    return (
        <main className={styles['character-list-container']}>
            {formType === "Create" && <CharacterCreateForm onClose={closeHandler} />}
            <BattlePanel data={battleCharacters} />

            <h1>Characters Catalog</h1>
            {characters.map(character => <Character clickEv={ev => selectCharacters(ev, character)} key={character._id} characterData={character} />)}
            <div onClick={() => userAction("Create")} title="Add Character" className={styles['add']} >
                <img src="https://i.ibb.co/DpQ6Xxx/add-icon-png-2459.png" alt="" />
            </div>
        </main>
    )
}