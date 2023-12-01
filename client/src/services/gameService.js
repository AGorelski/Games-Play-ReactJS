import * as request from "../lib/request";

const baseURL = "http://localhost:3030/jsonstore/games"

export const getAll = async () => {
    const result = await request.get(baseURL);

    return Object.values(result);
}


export const create = async (gameData) => {
    const result = await request.post(baseURL, gameData);

    return result;
}