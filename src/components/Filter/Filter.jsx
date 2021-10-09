import PropTypes from "prop-types";

export default function Filter({ stateFilter, onChangeFilter }) {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type='text'
        name='Find contact'
        onChange={(e) => onChangeFilter(e.target.value)}
        value={stateFilter}
      />
    </>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
};
