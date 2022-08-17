const axios = require('axios');

export function getGames(){
    return function(dispatch){
        return axios.get('http://localhost:3001/videogames')
        .then(r => r.data)
        .then(d => dispatch({type: 'GET_ALL_GAMES', payload: d}))
        .catch(err => console.log(err))
    }
}

export function getGameDetail(id, createdInDb){
    return function(dispatch){
        return axios.get(`http://localhost:3001/videogame/${id}/${createdInDb}`)
        .then(r => r.data)
        .then(d => dispatch({type: 'GET_GAME_DETAIL', payload: d}))
        .catch(err => console.log(err))
    }
}

export function getGameByName(name){
    return function(dispatch){
        return axios.get(`http://localhost:3001/videogames?name=${name}`)
        .then(r => r.data)
        .then(d => dispatch({type: 'GET_GAME_BY_NAME', payload: d}))
        .catch(err => console.log(err))
    }
}

export function delAllGames(){
    return ({type: 'DEL_ALL_GAMES'})
}

export function delGameDetail(){
    return ({type: 'DEL_GAME_DETAIL'})
}