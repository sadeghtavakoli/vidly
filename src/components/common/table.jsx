import React, { Component } from 'react';

import TableBody from './tableBody';
import TableHeader from './tableHeader';

class Table extends Component {
    render() { 
        const {data , columns , sortedColumn , onSort } = this.props
        return (
            <table className="table">
            <TableHeader 
                sortedColumn={sortedColumn}
                onSort={onSort}
                columns={columns}
                 />
            
            <TableBody
            data={data}
            columns={columns}
            />
    </table>
          );
    }
}
 
export default Table;