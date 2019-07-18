import React from "react";

// Passing the search bar, which react refers to as Inverse Data Flow
// Its a function component and we are returning a div so we dont need rce.

export default ({ onSearch, onCheck }) => (
  <div className="container">
    <label>Search</label>
    <div className="input-group flex-nowrap">
      <input
        className="form-control"
        type="text"
        placeholder="Search"
        onChange={event => onSearch(event.target.value)}
      />
    </div>

    <div className="custom-control custom-checkbox">
      <input
        type="checkbox"
        className="custom-control-input"
        id="customCheck1"
        onChange={event => onCheck(event.target.checked)}
      />
      <label className="custom-control-label" htmlFor="customCheck1">
        On Stock
      </label>
    </div>
  </div>
);
