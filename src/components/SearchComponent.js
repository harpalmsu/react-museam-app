import { useEffect, useState } from "react";
import ResultComponent from "./ResultComponent";
import useDebounce from "../hooks/use-debounce";

const SearchComponent = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchInput, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      searchWord(debouncedSearchTerm).then((result) => {
        console.log("!!!", result);
        setIsSearching(false);
        setSearchResult(result);
      });
    } else {
      setSearchResult([]);
    }
  }, [debouncedSearchTerm]);
  function searchWord(search) {
    const url = `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${search}`;
    return fetch(url, { method: "GET" })
      .then((res) => {
        return res.json();
      })
      .then((res) => res.objectIDs.slice(0, 20))
      .catch((err) => {
        console.log(err);
        return [];
      });
  }
  return (
    <div className="container">
      <div style={{ marginTop: 20 }}>
        <input
          style={{ height: 40 }}
          type="search"
          className="col-md-12 form-control"
          placeholder="Search..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        {isSearching ? (
          <div> Searching...........</div>
        ) : (
          <ResultComponent result={searchResult} />
        )}
      </div>
    </div>
  );
};
export default SearchComponent;
