import React, { Component } from 'react';

class StockRow extends Component {

    constructor(props) {
        super(props)
        this.state = {
            price: 'price',
            date: 'date',
            time: 'time'
        }
    }

    render() {
        return (
            <tr>
                <td>{this.props.ticker}</td>
                <td>{this.state.price}</td>
                <td>{this.state.date}</td>
                <td>{this.state.time}</td>
            </tr>   
        )
    }

}

export default StockRow;