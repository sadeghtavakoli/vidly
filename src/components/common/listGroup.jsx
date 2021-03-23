import React, { Component } from 'react';

class ListGroup extends Component {
    
    render() { 
        const {items ,textProperty,valueProperty,selectedItem ,onItemSelect} = this.props


        return (  
            <ul className="list-group">
                {items.map(item =>
                    <li key={item[valueProperty]}className={`list-group-item ${selectedItem === item[valueProperty] ? " active":''}` }
                    onClick={() => onItemSelect(item[valueProperty])}> 
                    {item[textProperty]} </li>              
 )}
            </ul>
        );
    }
}
 ListGroup.defaultProps = {
    textProperty : 'name',
    valueProperty : '_id'
 }
export default ListGroup ;