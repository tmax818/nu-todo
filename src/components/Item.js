import React, { Component } from 'react'
import {Card, CardImg} from 'reactstrap'

class Item extends Component {
    render() {

        return (
            <div key={this.props.item.id} className="col-md-5 m-1">
                <Card>
                    <CardImg src={this.props.item.image} />
        <h2>{this.props.item.name}</h2>
                </Card>
            </div>
        )
    }
}


export default Item