# Steam Activity

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/sammyngy/steam-activity&env=STEAM_API_KEY,STEAM_ID&project-name=steam-activity)

### Features 
**All your recents played games:** All the informations about a steam user `GET /api/player-summaries`

**Your recent played Games:** A list of your recent played games with stats `GET /api/recent-played-games`
	
## How to use
### Create an account on Steam Dev website to get an API key

- Go to [https://steamcommunity.com/dev/apikey](https://steamcommunity.com/dev/apikey) and create/login to your account and copy the key

- Go to [https://www.steamidfinder.com](https://www.steamidfinder.com) and search with your steam username to get your steam id (steamID64)

Exemple:

![image](https://user-images.githubusercontent.com/32553897/212471715-ec46d71c-5826-4bd1-be43-0c1672b77061.png)


###  Deploy the application with Vercel

Open this link [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/sammyngy/steam-activity&env=STEAM_API_KEY,STEAM_ID&project-name=steam-activity)

- Link and create a new git repo
- Paste the environnements variables (**STEAM_ID** and **STEAM_API_KEY**)
- Click on **Deploy**
- Click **Continue To Dashboard** 
- Copy the **DOMAINS** url

Exemple : `https://example.vercel.app/api/player-summaries`

Then enjoy the endpoint's

## No Vercel 
### If you want to run the project locally :
- Copy `.env.example` to `.env` and add values to env variables
- Run `npm install` for dependencies installation
- Run `npm start`
## License

MIT
