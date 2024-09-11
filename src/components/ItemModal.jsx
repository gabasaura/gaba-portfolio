import Modal from "react-modal";
import PropTypes from "prop-types";
import styles from "../styles/ItemModal.module.css";
import stylesStack from "../styles/Stack.module.css";
import { FiPlus } from "react-icons/fi";


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

          {/* STACK TECH */}
          <div className={stylesStack.stackContainer}>
            {item.stack.map((tech, index) => (
              <span
                key={index}
                className={stylesStack.badge}
                style={{ backgroundColor: tech.color }}
              >
                {tech.name}
              </span>
            ))}
          </div>

{/* LINKS */}
          <div className={styles.projectLinks}>
            {item.links.frontend && (
              <a href={item.links.frontend} target="_blank" rel="noopener noreferrer">
                Frontend Repo
              </a>
            )}
            {item.links.backend && (
              <a href={item.links.backend} target="_blank" rel="noopener noreferrer">
                Backend Repo
              </a>
            )}
            {item.links.deploy && (
              <a href={item.links.deploy} target="_blank" rel="noopener noreferrer">
                Deployed Project
              </a>
            )}
          </div>

          <p>{item.description}</p>

{/* IMGS */}
          {item.images ? (
            item.images.map((image, index) => (
              <div key={index} className={styles.imageContainer}>
                <img src={item.images.url} alt={image.caption} />
                {item.images.caption && <p>{image.caption}</p>}
              </div>
            ))
          ) : (
            <img src={item.imageUrl} />
          )}

{/* BTN CLOSE */}
          <button onClick={onRequestClose} className={styles.closeModal}>
            <FiPlus />
          </button>
        </>
      )}
    </Modal>
  );
};

// PropTypes para asegurar los tipos correctos
ItemModal.propTypes = {
  isOpen: PropTypes.bool.isRequired, // Estado que indica si el modal está abierto
  onRequestClose: PropTypes.func.isRequired, // Función para cerrar el modal
  item: PropTypes.shape({
    title: PropTypes.string, // Título del ítem
    description: PropTypes.string, // Descripción del ítem
    imageUrl: PropTypes.string, // URL de la imagen principal (opcional si hay múltiples imágenes)
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string, // URL de cada imagen
        caption: PropTypes.string, // Pie de imagen para la explicación (opcional)
      })
    ), // Arreglo de imágenes con sus explicaciones
    stack: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string, // Nombre de la tecnología o stack
        color: PropTypes.string, // Color de fondo para el badge de tecnología
      })
    ), // Arreglo del stack de tecnologías
    links: PropTypes.shape({
      frontend: PropTypes.string,
      backend: PropTypes.string,
      deploy: PropTypes.string,
    }),
  }), // Estructura del objeto ítem
};

export default ItemModal;
