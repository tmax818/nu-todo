import React, { Component } from 'react'
import {Card, CardImg} from 'reactstrap'

const Item = ({item, onSelect}) => {
 
        return (
            <div key={item.id} className="col-md-3 m-1">
            <Card onClick={() => onSelect(item)}>
                <CardImg width="100%" height="25%" src={item.image}/>
                <h1>{item.name}</h1>
        <p>{item.description}</p>
            </Card>
            </div>
        )
    
}
export default Item