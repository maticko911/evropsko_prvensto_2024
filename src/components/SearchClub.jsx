import React from "react";
import { TextInput } from "carbon-components-react";

import './SearchClub.css'

const SearchClub = ({ search, setSearch }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="search-club-form">
      <TextInput
        id="searchClub"
        labelText="Išči:"
        placeholder="poišči svoj klub..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        role="searchBox"
      />
    </form>
  );
};

export default SearchClub;
