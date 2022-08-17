import { connect } from 'react-redux';
import { createGame } from './../../actions/index';
import { Link } from 'react-router-dom';

function CreateGame({ createGame }){
    return(
        <>
            <h2>Create a new game!</h2>
            <Link className='button-back' to='/home'>BACK</Link>
        </>
    )
}

const mapStateToProps = (state) =>{
    return {
        games: state.games
    }
}

export default connect(mapStateToProps, { createGame })(CreateGame);