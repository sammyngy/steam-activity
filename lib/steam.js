import fetch from 'isomorphic-unfetch';
import { API_KEY, ID, GET_PLAYER_SUMMARIES, GET_RECENT_PLAYED_GAMES } from '../consts';

export async function getPlayerSummaries(){
    const ENDPOINT_PLAYER_SUMMARIES = `${GET_PLAYER_SUMMARIES}?key=${API_KEY}&steamids=${ID}`
    const res = await fetch(ENDPOINT_PLAYER_SUMMARIES)
    return res.json()
}
export async function getRecentPlayedGames(){
    const ENDPOINT_RECENT_PLAYED_GAMES = `${GET_RECENT_PLAYED_GAMES}?key=${API_KEY}&steamid=${ID}`
    const res = await fetch(ENDPOINT_RECENT_PLAYED_GAMES)
    return res.json()
}