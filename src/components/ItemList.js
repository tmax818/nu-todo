import React, { Component } from 'react'
import Item from './Item'

class ItemList extends Component {
    render() {

        return (
            <div className="container">
                <div className="row">
                {this.props.items.map(item => {
                    return (
                    <Item key={item.id} item={item}/>
                    )
                })}
                </div>
            </div>
        )
    }
}
export default ItemList;