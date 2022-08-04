import { useState } from 'react';

export default function SearchGame(){
    const [search, setSearch] = useState('')

    return(
        <>
            <input type='text' placeholder='Search any game' onChange={(e) => setSearch(e.target.value)} value={search}/>
            <button onClick={() => console.log(search)}>SEARCH</button>
        </>
    )
}