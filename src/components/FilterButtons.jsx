import PropTypes from "prop-types";

const FilterButtons = ({ selectedTag, handleTagChange }) => {
  const tags = ["inicio", "backend", "frontend", "personal"];

  const handleButtonClick = (tag) => {
    handleTagChange(tag);  // Llama a la función para cambiar la etiqueta seleccionada
  };

  return (
    <div>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => handleButtonClick(tag)}
          style={{
            backgroundColor: selectedTag === tag ? "blue" : "gray", // Marca solo el tag seleccionado
            color: "white",
            margin: "5px",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

FilterButtons.propTypes = {
  selectedTag: PropTypes.string.isRequired, // Recibe una única etiqueta seleccionada
  handleTagChange: PropTypes.func.isRequired
};

export default FilterButtons;
