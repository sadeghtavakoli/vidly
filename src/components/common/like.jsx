import React, { Component } from 'react';

class Like extends Component {
    state = {  }
    
    render() { 
        const {liked ,item , onClick} = this.props

        let classes =  'fa fa-heart';
        if(!liked) classes += '-o'

     return (<i 
                style={{cursor:'pointer'}}
                className={classes} 
                aria-hidden="true" 
                onClick={() =>onClick(item)}/>);
      
    }
}
 
export default Like;