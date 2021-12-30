import React, { Component } from 'react';

class StockRow extends Component {

    render() {
        return (
            <tr className="">
                <td>{this.props.ticker}</td>
                <td>{this.props.ticker}</td>
                <td>{this.props.ticker}</td>
                <td>{this.props.ticker}</td>
            </tr>
        )
    }

}

export default StockRow;