import React from 'react';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import SearchGame from './../SearchGame/SearchGame';
import Pages from './../Pages/Pages';
import './Home.scss';
import { Link } from 'react-router-dom';
import { getGames, getGenres } from './../../actions/index';
import { orderBy } from './../../actions/index';

function Home({ allGames, getGames, getGenres, searchFilters, orderBy }){
    const [order, setOrder] = useState('');
    
    function handleOrder(value){
        setOrder(value);
    }
    
    useEffect(() => {
        
    }, [allGames])

    useEffect(() =>{
        // console.log(allGames)
        handleOrder(order)
        orderBy(order)
        setPage(2)
        setPage(1);
    }, [order, orderBy])

    useEffect(() =>{
        getGames();
        getGenres();
    }, [getGames, getGenres])

    const prev = '<<';
    const next = '>>';
    const [page, setPage] = useState(1);
    const perPage = 15;

    const indexLastGame = page * perPage;
    const indexFirstGame = indexLastGame - perPage;

    const currentGames = allGames ? allGames.slice(indexFirstGame, indexLastGame) : 0;

    const handlePage = function (num){
        setPage(num)
        // console.log(page)
    }

    const handlePassPage = function (action){
        console.log(action)
        action === '<<' ? setPage(page - 1) : setPage(page + 1);
    }

    return(
        <>
            <SearchGame handleOrder={handleOrder}/>
            <div className="container-home">
                {currentGames.length > 0 ? currentGames.map((game) => 
                    <div className='card-game' key={game.id}>
                        <img className='game-image' alt={game.name} src={game.image}/>
                        <div className='game-info'>
                            <h3 className='game-title'>{game.name}</h3>
                            <ul className='game-list'>
                                {game.genres.length > 0 ? 
                                game.genres.map((genre, index) => <li className='game-list-genre' key={index}>{genre}</li>)
                                : <li className='game-list-genre'>No genre defined</li>
                                }
                            </ul>
                        </div>
                        <div className='view-button'>
                            <Link to={`/home/${game.id}/${game.createInDb}`}>
                                VIEW DETAIL
                            </Link>
                        </div>
                    </div>
                )
                : <h3 className='waiting-games'>Searching for games...</h3>
                }
            </div>
            {allGames.length > 0 && 
            <div className='container-pages'>
                { page > 1 && <button className='pages-button' onClick={(e) => {handlePassPage(prev)}}>{prev}</button>}
                <Pages allGames={allGames.length} gamesPerPage={perPage} setPage={handlePage}/>
                {page < (allGames.length / 15) && <button className='pages-button' onClick={(e) => {handlePassPage(next)}}>{next}</button>}
            </div>
            }
        </>
    )
}

const mapStateToProps = (state) =>{
    return {
        allGames: state.allGames,
        searchFilters: state.searchFilters
    }
}

export default connect(mapStateToProps, { getGames, getGenres, orderBy })(Home);