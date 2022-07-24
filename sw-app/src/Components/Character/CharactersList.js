import { Character } from "./Character"
import { useState, useEffect } from "react"
import styles from "./CharacterList.module.css"
import { BattlePanel } from '../Battles/BattlePanel'
import { CharacterCreateForm } from "../Forms/CharacterCreateForm"
import {getAllCharacters} from '../../services/characterService'


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

    const closeHandler = () => {
        setFormType(null);
    };

    return (
    <>
        <BattlePanel data={battleCharacters} />
        <main className={styles['character-list-container']}>
            {formType === "Create" && <CharacterCreateForm setCharacters={selectCharacters} onClose={closeHandler} />}


            <h1>Characters Catalog</h1>
            {characters.map(character => <Character clickEv={ev => selectCharacters(ev, character)} key={character._id} characterData={character} />)}
            <div onClick={() => userAction("Create")} title="Add Character" className={styles['add']} >
                <img src="https://i.ibb.co/DpQ6Xxx/add-icon-png-2459.png" alt="" />
            </div>
        </main>
    </>
    )
}