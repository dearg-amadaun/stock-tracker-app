import React, { Component } from 'react';

class StockRow extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        //API query for Data
        this.setState({
            data: {
                price: 'price',
                date: 'date',
                time: 'time'
            }
        })
    }

    render() {
        return (
            <tr>
                <td>{this.props.ticker}</td>
                <td>{this.state.data.price}</td>
                <td>{this.state.data.date}</td>
                <td>{this.state.data.time}</td>
            </tr>   
        )
    }

}

export default StockRow;