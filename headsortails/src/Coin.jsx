/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import './Coin.css'

class Coin extends Component {
    render() {
        return (
            <div className='Coin'>
                <img src={this.props.info.imgSrc} alt={this.props.info.side} />
            </div>
        )
    }
}

export default Coin