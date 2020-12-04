import React, { Component } from 'react'
import {Card, CardImg} from 'reactstrap'

class Item extends Component {
    render() {
        return (
            <div key={this.props.item.id} className="col-md-5 m-1">
            <Card onClick={() => this.props.onSelect(this.props.item)}>
                <CardImg width="100%" height="25%" src={this.props.item.image}/>
                <h1>{this.props.item.name}</h1>
        <p>{this.props.item.description}</p>
            </Card>
            </div>
        )
    }
}
export default Item