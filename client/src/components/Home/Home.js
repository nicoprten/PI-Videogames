import React from 'react';
import {useState } from 'react';
import { connect } from 'react-redux';
import SearchGame from './../SearchGame/SearchGame';
import Pages from './../Pages/Pages';
import './Home.scss';
import { Link } from 'react-router-dom';

function Home({ games }){

    const prev = '<<';
    const next = '>>';
    const [page, setPage] = useState(1);
    const perPage = 15;

    const indexLastGame = page * perPage;
    const indexFirstGame = indexLastGame - perPage;

    const currentGames = games ? games.slice(indexFirstGame, indexLastGame) : 0;

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
            <SearchGame />
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
            {games.length > 0 && 
            <div className='container-pages'>
                { page > 1 && <button className='pages-button' onClick={(e) => {handlePassPage(prev)}}>{prev}</button>}
                <Pages allGames={games.length} gamesPerPage={perPage} setPage={handlePage}/>
                {page < (games.length / 15) && <button className='pages-button' onClick={(e) => {handlePassPage(next)}}>{next}</button>}
            </div>
            }
        </>
    )
}

const mapStateToProps = (state) =>{
    return {
        games: state.games
    }
}

export default connect(mapStateToProps, { })(Home);