function FilterBar() {
  return (
    <div className="filter-bar">
      <select>
        <option>Error</option>
        <option>Warning</option>
        <option>Info</option>
      </select>

      <input type="text" placeholder="Search logs..." />
      <button>Filter</button>
    </div>
  );
}

export default FilterBar;
