export async function getAllCharacters() {
    const response = await fetch(`http://localhost:3030/jsonstore/characters`)
    const result = await response.json()

    return result
}

export async function createCharacter(data) {
    const response = await fetch("http://localhost:3030/jsonstore/characters", {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    return result;
}

export async function editCharacter(data, id) {
    const response = await fetch(`http://localhost:3030/jsonstore/characters/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    return result;
}