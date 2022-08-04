const initialState = {
    games: [],
    gameDetail: {},
    gameCreated: {}
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
        case 'DEL_GAME_DETAIL':
            return {
                ...state,
                gameDetail: {}
            }
        default:
            return state;
    }
}