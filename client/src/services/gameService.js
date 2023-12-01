import { request } from "../lib/request";

const baseURL = "http://localhost:3030/jsonstore/games"

export const getAll = async () => {
    const result = await request('GET', baseURL);

    return Object.values(result);
}


export const create = async (gameData) => {
    const response = await fetch(baseURL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(gameData)
    });

    const result = await response.json();

    return result;
}