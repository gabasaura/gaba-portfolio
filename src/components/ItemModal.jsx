import Modal from "react-modal";
import PropTypes from "prop-types";
import styles from "../styles/ItemModal.module.css";

const ItemModal = ({ isOpen, onRequestClose, item }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Item Modal"
      className={styles.modalContent}
      overlayClassName={styles.modalOverlay}
      bodyOpenClassName={styles.bodyModalOpen}
    >
      {item && (
        <>
          <h2>{item.title}</h2>
          <img src={item.imageUrl} alt={item.title} />
          <p>{item.description}</p>
          <p>Tags: {item.tags.join(", ")}</p>
          <button onClick={onRequestClose}>Cerrar</button>
        </>
      )}
    </Modal>
  );
};

ItemModal.propTypes = {
  isOpen: PropTypes.bool.isRequired, // Estado para controlar si el modal está abierto o no
  onRequestClose: PropTypes.func.isRequired, // Función para cerrar el modal
  item: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }), // Objeto con la información del ítem
};

export default ItemModal;
