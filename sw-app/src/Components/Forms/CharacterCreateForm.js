export const CharacterCreateForm = ({
    onClose
}) => {

    return (
        <form>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" />
            <button onClick={onClose} >CLOSE</button>

        </form>
    )


}