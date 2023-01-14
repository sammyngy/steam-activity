import { getRecentPlayedGames } from '../lib/steam';
import { CORS_HOST } from '../consts';

export default async function recentPlayedGames(req, res) {
    const playedGames = await getRecentPlayedGames();
    if (CORS_HOST) {
        res.setHeader('Access-Control-Allow-Origin', CORS_HOST);
        res.setHeader('Access-Control-Allow-Methods', 'GET');
    }
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 's-maxage=1');
    res.status(200).send(playedGames);
}
