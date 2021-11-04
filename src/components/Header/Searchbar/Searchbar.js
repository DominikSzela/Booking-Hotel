import React from 'react'

function Searchbar() {
    return (
        <div className="d-flex">
            <input
            className="form-control"
                type="text"
                placeholder="Szukaj..."
            />
            <button
                className="btn btn-primary">
                szukaj
            </button>
        </div>
    )
}

export default Searchbar;