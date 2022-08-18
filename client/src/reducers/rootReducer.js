const initialState = {
    games: [],
    // gamesFiltered: [],
    gameDetail: {},
    genres: []
}

export default function rootReducer( state = initialState, action){
    switch(action.type){
        case 'GET_ALL_GAMES':
            return {
                ...state,
                games: action.payload
            }
        case 'GET_GAME_DETAIL':
            return {
                ...state,
                gameDetail: action.payload
            }
        case 'GET_GAME_BY_NAME':
            return {
                ...state,
                games: action.payload
            }
        case 'DEL_GAME_DETAIL':
            return {
                ...state,
                gameDetail: {}
            }
        case 'DEL_ALL_GAMES':
            return {
                ...state,
                games: []
            }
        case 'POST_GAME':
            return {
                ...state
            }
        case 'GET_GENRES':
            return {
                ...state,
                genres: action.payload
            }
        default:
            return state;
    }
}