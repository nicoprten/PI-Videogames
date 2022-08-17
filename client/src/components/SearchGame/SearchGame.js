import { useState, useEffect } from 'react';
import MenuSearch from './../MenuSearch/MenuSearch';
import { getGameByName, getGames, delAllGames } from './../../actions/index';
import { connect } from 'react-redux';
import './SearchGame.scss';

function SearchGame({ getGameByName, getGames, delAllGames}){
    const [search, setSearch] = useState('');
    // const [checkSearch, setCheckSearch] = useState(false);

    console.log(search)
    useEffect(() =>{
        let inputSearch = document.getElementById('input-search');
        inputSearch.addEventListener('keydown', (e) => {
            if(e.key === 'Enter'){
                e.preventDefault();
                if(search){
                    delAllGames();
                    getGameByName(e.target.value);
                    // setSearch('');
                }else{
                    console.log('no escribio nada')
                }
            }
        });

    }, [getGameByName, search, delAllGames])
    
    function handleButton(){
        delAllGames();
        getGameByName(search);
        setSearch('');
    }

    return(
        <>
            <div className='container-search'>
                <input id='input-search' type='text' placeholder='Search any game' onChange={(e) => setSearch(e.target.value)} value={search}/>
                <button className='button-search' onClick={() => handleButton()}>SEARCH</button>
                <button className='button-search' onClick={() => {
                    delAllGames();
                    getGames()
                }}>SEE ALL</button>
            </div>
            <MenuSearch />
        </>
    )
}

const mapStateToProps = (state) =>{
    return {
        gamesByName: state.games
    }
}

export default connect(mapStateToProps, { getGameByName, getGames, delAllGames })(SearchGame);