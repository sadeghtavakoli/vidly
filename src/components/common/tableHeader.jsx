import React, { Component } from 'react';


class TableHeader extends Component {
    raiseSort = column =>{
        const sortedColumn ={...this.props.sortedColumn};
        if(column.path){
            sortedColumn.path = column.path
            sortedColumn.order = sortedColumn.order ==='asc'?'desc' : 'asc'
            this.props.onSort(sortedColumn)
        }
        
    }

    render() { 
        const {sortedColumn,columns} = this.props

        const showCaret = (path) =>{
            if(path === sortedColumn.path && path){
                 let style="fa fa-caret-"
                 if(sortedColumn.order === 'asc') style +='down'
                 else style+= 'up' ;
             return   <i className={style} aria-hidden="true"></i>
            }
        }
        return ( 
        <thead>  
            <tr>
                {columns.map((column) =>
                  <th key={column.path || column.key} onClick={() =>this.raiseSort(column)}> {column.label} {showCaret(column.path)} </th>
                    )}
            </tr>
        </thead>    
         );
    }
}
 
export default TableHeader;