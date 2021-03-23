import React, { Component } from 'react';

class counter extends Component {

 
  render() { 
    const showCount = () =>{
        const {value} = this.props.counter
        if(value === 0 ) return <span className='mr-2 badge bg-warning text-dark'>Zero</span>
        
        return <span className='mr-2 badge bg-primary text-light '>{value}</span>
    }
     return (
      <div className="container">
      <div className="row">
        <div className="col-1">
          {showCount()}
        </div>
        <div className="col-2">
        <button 
            onClick={() => this.props.onIncreament(this.props.counter.id)}
            className='m-2 btn btn-secondary'>+</button>
           
            <button 
            disabled={!this.props.counter.value}
            onClick={() => this.props.onDecreament(this.props.counter.id)}
            className='m-2 btn btn-secondary'>-</button>
        
            <button 
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className='m-2 btn btn-danger '> X </button>
        </div>
      </div>
    </div>
     
      );
  }
}
 
export default counter;

 