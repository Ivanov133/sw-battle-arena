import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { CharacterCommentsSection } from "../Comments/CharacterCommentsSection"
import { CommentEditForm } from "../Forms/CommentsForms/CommentEditForm"
import { CharacterDetails } from "./CharacterDetails"
import { getAllCharacterComments } from "../../services/commentsService"

export const CharacterDetailsPage = () => {
    const [comments, setComments] = useState([])
    const { charId, commentId } = useParams()
    const [formType, setFormType] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        getAllCharacterComments()
            .then(
                result => {
                    if (result) {
                        let characterComments = result.filter(x => x.characterId === charId)
                        setComments(characterComments)
                    }
                }
            )
    }, [charId, commentId])


    function userAction(action) {
        setFormType(action)
    }

    const closeHandler = () => {
        setFormType(null);
        navigate(`/characters/${charId}/`, { replace: true });
    };

    return (
        <>
            <CharacterDetails userAction={userAction} closeHandler={closeHandler} formType={formType} />
            <CharacterCommentsSection userAction={userAction} formType={formType} closeHandler={closeHandler} comments={comments} setComments={setComments} />
            {formType === 'EditComment' && <CommentEditForm onClose={closeHandler} setComments={setComments}/>}
        </>
    )
}