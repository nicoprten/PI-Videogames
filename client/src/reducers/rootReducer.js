const initialState = {
    allGames: [],
    games: [],
    searchFilters: {},
    gameDetail: {},
    genres: []
}

export default function rootReducer( state = initialState, action){
    switch(action.type){
        case 'GET_ALL_GAMES':
            return {
                ...state,
                allGames: action.payload,
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
                allGames: action.payload,
                // games: action.payload
            }
        case 'DEL_GAME_DETAIL':
            return {
                ...state,
                gameDetail: {}
            }
        case 'DEL_ALL_GAMES':
            return {
                ...state,
                allGames: []
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
        case 'FILTER_BY':
            let gamesFiltered = [];
            // console.log(action.payload)
            // console.log(action.payload.lastGameSearched)
            // if(!action.payload.lastGameSearched){
            //     console.log('NO EXISTE')
            // }
            if(action.payload.lastGameSearched && action.payload.genreFilter && action.payload.createdFilter){
                gamesFiltered = state.games.filter(g => g.genre === action.payload.genreFilter && g.genre === action.payload.createdFilter);
            }
            if(action.payload.lastGameSearched && action.payload.genreFilter && !action.payload.createdFilter){
                gamesFiltered = state.games.filter(g => g.genre === action.payload.genreFilter);
            }
            if(action.payload.lastGameSearched && !action.payload.genreFilter && action.payload.createdFilter){
                gamesFiltered = state.games.filter(g => g.genre === action.payload.createdFilter);
            }
            if(!action.payload.lastGameSearched && action.payload.genreFilter && action.payload.createdFilter){
                gamesFiltered = state.games.filter(g => g.genre === action.payload.genreFilter && g.genre === action.payload.createdFilter);
            }
            if(!action.payload.lastGameSearched && action.payload.genreFilter && !action.payload.createdFilter){
                gamesFiltered = state.games.filter((g) => {return g.genres.includes(action.payload.genreFilter)});
            }
            if(!action.payload.lastGameSearched && !action.payload.genreFilter && action.payload.createdFilter){
                // gamesFiltered = state.games.filter((g) => {return g.createInDb === action.payload.createdFilter});
                if(action.payload.createdFilter === 'true'){
                    gamesFiltered = state.games.filter((g) => {return g.createInDb === true});
                }else{
                    gamesFiltered = state.games.filter((g) => {return g.createInDb === false});
                }
            }



            return {
                ...state,
                allGames: gamesFiltered
            }
        // case 'ORDER_BY':
        //     if(action.payload === '')
        //     const gamesOrdered = 
        //     return {
        //         ...state,
        //         games: gamesOrdered
        //     }
        default:
            return state;
    }
}