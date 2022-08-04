import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { delGameDetail, getGameDetail } from './../../actions/index';
import { useParams } from 'react-router-dom';
import React from 'react';

function GameDetail({getGameDetail, delGameDetail, gameDetail}){

    let params = useParams();
    React.useEffect(() =>{
        getGameDetail(params.id, params.createdInDb);
    }, [params, getGameDetail])

    return(
        <>
            <h2>{gameDetail.name}</h2>

            <Link to='/home' onClick={() => delGameDetail()}>BACK</Link>
        </>
    )
}

const mapStateToProps = (state) =>{
    return {
        gameDetail: state.gameDetail
    }
}

export default connect(mapStateToProps, { getGameDetail, delGameDetail })(GameDetail);