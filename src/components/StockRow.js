import React, { Component } from 'react';
import { stock } from '../resources/stock.js';

const changeStyle = {
    color: '#4caf50',
    fontSize: '0.8rem',
    marginLeft: 5
  }

class StockRow extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }
    }

    applyData(data) {
        this.setState({
            data: data
        })
    }

    componentDidMount() {
        stock.latestPrice(this.props.ticker, this.applyData.bind(this))
    }

    render() {
        return (
            <li className="list-group-item">
                  <b>{this.props.ticker}</b> {this.state.data.price}
                  <span className="change" style={changeStyle}>
                    +13.34 (5.0%)
                  </span>
                </li>
        )
    }

}

export default StockRow;