# Discord Casestudy

A case study on the success factors of Discord and a comparison with TeamSpeak. The case study is available at https://xeeija.github.io/discord-casestudy/.

This website is built using [Docusaurus 2](https://docusaurus.io/).

## Installation

In order to work with the project locally, first clone the repository and run

```
npm install
```

### Local Development

```
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
USE_SSH=true npm run deploy
```

Not using SSH:

```
GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
