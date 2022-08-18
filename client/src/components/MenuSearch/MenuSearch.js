import './MenuSearch.scss';
import { connect } from 'react-redux';
import './MenuSearch.scss';
// import { useEffect } from 'react';

function MenuSearch({ genres }){
    // useEffect(() =>{
    //     console.log(genres)
    // }, [genres])
    return(
        <div className='container-filter-order'>
            <div className='container-filter'>
                <h2>FILTER</h2>
                <div className='filter-genre'>
                    <select defaultValue={'DEFAULT'} name='genre' onChange={(e) => console.log(e.target.value)}>
                        <option value="DEFAULT" disabled>Genre</option>
                        {genres.length > 1 && genres.map((g, index) => 
                            <option key={index} value={g.name}>{g.name}</option>
                        )}
                    </select>
                </div>
                <div className='filter-createdInDb'>
                    <select defaultValue={'DEFAULT'} name='createdInDb' onChange={(e) => console.log(e.target.value)}>
                        <option value="DEFAULT" disabled>Created</option>
                        <option value='true'>True</option>
                        <option value='false'>False</option>
                    </select>
                </div>
            </div>
            <div className='container-order'>
                <h2>ORDER</h2>
                <div className='order-alphabet'>
                    <select defaultValue={'DEFAULT'} name='alphabet' onChange={(e) => console.log(e.target.value)}>
                        <option value="DEFAULT" disabled>Alphabet</option>
                        <option value='desc'>A-Z</option>
                        <option value='asc'>Z-A</option>
                    </select>
                </div>
                <div className='order-rating'>
                <select defaultValue={'DEFAULT'} name='rating' onChange={(e) => console.log(e.target.value)}>
                        <option value="DEFAULT" disabled>Rating</option>
                        <option value='lower'>Lower</option>
                        <option value='higher'>Higher</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        genres: state.genres
    }
}

export default connect(mapStateToProps, { })(MenuSearch);