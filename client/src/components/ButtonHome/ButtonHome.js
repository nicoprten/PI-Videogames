import { Link } from 'react-router-dom';
import './ButtonHome.scss';
import { connect } from 'react-redux';
import { getGames } from './../../actions/index';

function ButtonHome({ getGames }){

    return(
        <>
            <Link to='/home' className='link-home'>
                <button className='button-home' onClick={() => getGames()}>Enter</button>
            </Link>
        </>
    )
}

const mapStateToProps = (state) =>{
    return {
        games: state.games
    }
}

export default connect(mapStateToProps, { getGames })(ButtonHome);