require('dotenv').config();
const { default: axios } = require("axios");
const { API_KEY} = process.env;


const filterDataGame = (dataGame) => {
    return dataGame.map(game => {return {id: game.id, name: game.name, released: game.released, rating: game.rating, image: game.background_image, genres: game.genres.map(genre => genre.name), platforms: Array.isArray(game.platforms) ? game.platforms.map(platform => platform.platform.name) : 'No information'}});
}

const getAll = async () => {
    const games01 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=40`);
    const games02 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=2&page_size=40`);
    const games03 = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=2&page_size=20`);
    const initialGames = filterDataGame(games01.data.results.concat(games02.data.results).concat(games03.data.results));
    return initialGames;
}

const getGameByName = async (name) => {
    const games = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}&page_size=15`);
    return filterDataGame(games.data.results);
}

module.exports = {
    getAll,
    getGameByName
};