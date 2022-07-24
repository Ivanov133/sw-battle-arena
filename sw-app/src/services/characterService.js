export async function getAllCharacters() {
    const response = await fetch(`http://localhost:3030/jsonstore/characters`)
    const result = await response.json()

    return result
}

export async function createCharacter(characterData) {

}