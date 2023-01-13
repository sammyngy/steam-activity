import { getRecentPlayedGames } from '../lib/steam';

export default async function recentPlayedGames(req, res) {
    const playedGames = await getRecentPlayedGames();
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 's-maxage=1');
    res.status(200).send(playedGames);
}
