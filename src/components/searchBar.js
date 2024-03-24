import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
// import { GEO_OPTIONS_URL, geoApiOptions } from './api';

const SearchBar = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  // const loadOptions = (inputValue) => {

  // }

  const handleOnSearch = (search) => {
    setSearch(search);
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnSearch}
      // loadOptions={loadOptions}
    />
  );
};

export default SearchBar;
