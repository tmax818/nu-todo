import React, { Component } from 'react'
import Item from './Item'

 class ItemList extends Component {

    state = {selectedItem: null}

    handleSelect = (item) => {
        this.setState({selectedItem: item })
    }


    render() {

        return (
            <div className="container">
                <div className="row">

                {this.props.items.map(item => {
                    return (
                        <Item key={item.id} item={item} onSelect={this.handleSelect}/>
                        )
                    })}

                    {this.state.selectedItem && <Item item={this.state.selectedItem}/>}
                    </div>
            </div>
        )
    }
}
export default ItemList