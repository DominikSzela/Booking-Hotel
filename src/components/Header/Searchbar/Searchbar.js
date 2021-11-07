import React, { useState } from 'react'

function Searchbar() {

    const [term, setTerm] = useState('');


    return (

        <div className="d-flex">
            <input
                value={term}
                onChange={e => setTerm(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && search()}
                className="form-control"
                type="text"
                placeholder="Szukaj..."
            />
            <button
                className="btn btn-secondary"
                onClick={search}
            >
                szukaj
            </button>
        </div>
    )
}

export default Searchbar;gi