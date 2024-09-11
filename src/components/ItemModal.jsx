import Modal from "react-modal";
import PropTypes from "prop-types";
import styles from "../styles/ItemModal.module.css";
import stylesStack from "../styles/Stack.module.css";
import stylesTags from "../styles/Tags.module.css";
import stylesIcon from "../styles/Icons.module.css"
import { FaGithub } from "react-icons/fa";
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
          <div className={styles.titleRow}>
          <h2 className={styles.title}>Proyecto {item.title}</h2>
          {/* LINKS */}
          <div className={styles.projectLinks}>
            {item.links.frontend && (
              <a href={item.links.frontend} target="_blank" rel="noopener noreferrer"
                    className={stylesIcon.gitIconFront}>
                    <FaGithub /></a>
            )}
            {item.links.backend && (
              <a href={item.links.backend} target="_blank" rel="noopener noreferrer"
              className={stylesIcon.gitIconBack}>
                    <FaGithub /></a>
            )}
            {item.links.deploy && (
              <a href={item.links.deploy} className={styles.aHref} target="_blank" rel="noopener noreferrer">
                Deployed
              </a>
            )}
          </div></div>

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

          <p>{item.description}</p>

          {/* TAGS */}

          {item.tags.map((tag, index) => (
            <span key={index} className={`${stylesTags.tag} ${stylesTags['tag-' + tag]}`}>
              {tag}
            </span>
          ))}

          {/* IMGS */}

          {item.images.map((image, index) => (
            <div key={index} className={styles.imageContainer}>
              <img src={image.src} alt={image.caption} className={styles.imgModal} />
              {image.caption && <p>{image.caption}</p>}
            </div>
          ))}

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
    tags: PropTypes.arrayOf(PropTypes.string),
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
