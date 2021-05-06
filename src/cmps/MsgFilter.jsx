import SearchIcon from "@material-ui/icons/Search";
export function MsgFilter({ setFilterBy, filterBy }) {
  return (
    <label className="search-input">
      <input
        placeholder="Search.."
        value={filterBy}
        onChange={({ target }) => {
          setFilterBy(target.value);
        }}
      />
      <SearchIcon />
    </label>
  );
}
