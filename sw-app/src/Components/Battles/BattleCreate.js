import { BattleDetails } from './BattleDetails'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getCharacter } from "../../services/characterService";
import { BattleCreateForm } from "../Forms/BattleCreateForm";

export const BattleCreate = () => {

    const { characterIds } = useParams()
    const [character1_id, character2_id] = characterIds.split('VS')
    const [character1, setCharacter1] = useState('')
    const [character2, setCharacter2] = useState('')

    useEffect(() => {
        getCharacter(character1_id)
            .then(result =>
                setCharacter1(result)
            )
    }, [character1_id])

    useEffect(() => {
        getCharacter(character2_id)
            .then(result =>
                setCharacter2(result)
            )
    }, [character2_id])

    return (
        <>
            <BattleDetails character1={character1} character2={character2} />
            <BattleCreateForm character1={character1} character2={character2} />
        </>
    )
}