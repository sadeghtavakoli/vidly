import React, { Component } from "react";

class Select extends Component {
  render() {
    const { name, label, options, error, ...rest } = this.props;
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <select
          {...rest}
          name={name}
          id={name}
          className="custom-select mr-sm-2"
        >
          <option value={""} />
          {options.map((option) => {
            return (
              <option key={option._id} value={option._id}>
                {option.name}
              </option>
            );
          })}
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    );
  }
}

export default Select;
