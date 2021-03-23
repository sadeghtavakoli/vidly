import React, { Component } from "react";
import PropTypes from "prop-types";
class Pagination extends Component {
  renderPageItems = (pageCount, onPageChange, selectedPage = 0) => {
    const pageItems = [];
    for (let i = 1; i <= pageCount; i++) {
      let style = "page-item ";
      if (selectedPage === i) style += "active";

      pageItems.push(
        <li key={i} className={style}>
          <a className="page-link" href="#" onClick={() => onPageChange(i)}>
            {i}
          </a>
        </li>
      );
    }
    return pageItems;
  };
  render() {
    const { itemsCount, pageSize, onPageChange, selectedPage } = this.props;

    const pageCount = Math.ceil(itemsCount / pageSize);
    if (pageCount === 1) return null;

    return (
      <nav>
        <ul className="pagination">
          {this.renderPageItems(pageCount, onPageChange, selectedPage)}
        </ul>
      </nav>
    );
  }
}

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  selectedPage: PropTypes.number.isRequired,
};
export default Pagination;
