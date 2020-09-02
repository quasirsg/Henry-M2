import React from "react";

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div>
      <div class="form-inline md-form mr-auto mb-4">
        <input
          class="form-control mr-sm-2"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <button onClick={props.onSearch} class="btn aqua-gradient btn-rounded btn-sm my-0" >
          Search
        </button>
      </div>
    </div>
  );
}
