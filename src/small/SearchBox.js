import React from "react"

const SearchBox = props => (
  <form className="action">
    <input
      className="search box"
      type="text"
      id="searchBox"
      placeholder="Search posts..."
    />
  </form>
)

export default SearchBox
