import * as request from "../lib/request";

const baseURL = "http://localhost:3030/jsonstore/games/comments"

export const create = async (gameId, username, text) => {
    const result = await request.post(baseURL, {
        gameId,
        username,
        text
    });

    return result;
}