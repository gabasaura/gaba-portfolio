import PropTypes from "prop-types";
import styles from "../styles/Buttons.module.css"


const FilterButtons = ({ selectedTag, handleTagChange }) => {
  const tags = ["inicio", "backend", "frontend", "personal"];

  const handleButtonClick = (tag) => {
    handleTagChange(tag);  // Llama a la función para cambiar la etiqueta seleccionada
  };

  return (
    <div className={styles.filterButtons}>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => handleButtonClick(tag)}
          className={`${styles.tagButton} ${selectedTag === tag ? styles.active : ''}`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

FilterButtons.propTypes = {
  selectedTag: PropTypes.string.isRequired, // Recibe una única etiqueta seleccionada
  handleTagChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default FilterButtons;
