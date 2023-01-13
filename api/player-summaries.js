import { getPlayerSummaries } from '../lib/steam';

export default async function playSummaries(req, res) {
    const playerSummaries = await getPlayerSummaries();
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 's-maxage=1');
    res.status(200).send(playerSummaries);
}
