import React from 'react';
import { connect } from 'react-redux';
import SearchGame from './../SearchGame/SearchGame';
import './Home.scss';
import { Link } from 'react-router-dom';

function Home({ games }){
    React.useEffect(() =>{
        console.log(games)
    }, [games])

    return(
        <>
            <SearchGame />
            <div className="container-home">
                {games.length > 0 ? games.map((game) => 
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
                : <h3>Searching for games...</h3>
                }
            </div>
        </>
    )
}

const mapStateToProps = (state) =>{
    return {
        games: state.games
    }
}

export default connect(mapStateToProps, { })(Home);