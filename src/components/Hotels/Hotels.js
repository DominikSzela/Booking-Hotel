import React, { Component } from 'react'
import Hotel from './Hotel/Hotel'

class Hotels extends Component {
    render() {
        return (
            <div>
                <h1>Hotels</h1>
                <Hotel />
                <Hotel />
            </div>
        )
    }
}

export default Hotels;