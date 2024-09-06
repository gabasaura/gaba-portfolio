import PropTypes from "prop-types";

const FilterButtons = ({ handleTagChange }) => {
  return (
    <div>
      <button onClick={() => handleTagChange("all")}>All</button>
      <button onClick={() => handleTagChange("backend")}>Backend</button>
      <button onClick={() => handleTagChange("frontend")}>Frontend</button>
      <button onClick={() => handleTagChange("personal")}>Personal</button>
    </div>
  );
};

// Validación de las props
FilterButtons.propTypes = {
  handleTagChange: PropTypes.func.isRequired, // handleTagChange debe ser una función y es requerida
};

export default FilterButtons;
