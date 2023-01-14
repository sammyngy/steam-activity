const { STEAM_API_KEY, STEAM_ID, API_CORS_HOST } = process.env;
Object.entries({
    STEAM_API_KEY,
    STEAM_ID,
    API_CORS_HOST
}).forEach(([key, value]) => {
    if (typeof value === "string") {
        return;
    }
    console.error(`Missing environment variable: ${key}`);
});
export const GET_PLAYER_SUMMARIES = "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/"
export const GET_RECENT_PLAYED_GAMES = "http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/"
export const API_KEY = STEAM_API_KEY ?? ""
export const CORS_HOST = API_CORS_HOST  ?? "*"
export const ID = STEAM_ID ?? ""
