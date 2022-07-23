import { Character } from "./Character"
import { useState, useEffect } from "react"
import styles from "./CharacterList.module.css"
import { Link } from 'react-router-dom'

export const CharacterList = () => {
    const [characters, setCharacters] = useState([])
    const [battleCharacters, setBattle] = useState([])

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

    return (
        <main className={styles['character-list-container']}>
            <h1>Characters Catalog</h1>
            {/* <p>Welcome to the character catalog. This section contains all available characters. 
                You can view their details by selecting the DETAILS button.</p>
            <p>You can select characters and initiate a battle just by cliking on the card - try for yourself:</p> */}
            {characters.map(character => <Character clickEv={ev => selectCharacters(ev, character)} key={character._id} characterData={character} />)}
{/*             <div title="Add Character" className={styles['add']} >
                <img src="https://i.ibb.co/DpQ6Xxx/add-icon-png-2459.png" alt="" />
            </div> */}
            <div style={{display: battleCharacters.length > 0 ? '' : 'none' }} title="Selected characters" className={styles['battle-panel']} >
                {battleCharacters.length === 1
                    ? <img className={styles['character-img']} src={battleCharacters[0].img} alt="" />
                    : null
                }
                {battleCharacters.length === 2
                    ? <>
                        <img className={styles['character-img']} src={battleCharacters[0].img} alt="" />
                        <img className={styles['vs-img']} src="https://i.ibb.co/ZS1382W/Versus-PNG-Image-File.png" alt="" />
                        <img className={styles['character-img']} src={battleCharacters[1].img} alt="" />
                        <div title="Start Battle" className={styles['battle']} >


                            <Link to={"../battle-create/"} state={{ data: battleCharacters }}>
                                <img src="https://i.ibb.co/zS4qNwZ/transparent-sword-icon-vikings-icon-swords-icon-60bc20b3a15aa4-1746426716229418756609.png" alt="" />
                                Battle
                            </Link>

                        </div>
                    </>
                    : null
                }
            </div>

        </main>
    )
}