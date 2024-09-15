import Modal from "react-modal";
import PropTypes from "prop-types";
import styles from "../styles/ItemModal.module.css";
import stylesStack from "../styles/Stack.module.css";
import stylesTags from "../styles/Tags.module.css";
import stylesIcon from "../styles/Icons.module.css"
import stylesLink from "../styles/Links.module.css"

import { FaGithub } from "react-icons/fa";
import { BiLinkAlt } from "react-icons/bi";



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
        <div className={styles[item.styleClass]} >
          {/* TAGS */}
          <div className={styles.tags}>
            {item.tags.map((tag, index) => (
              <span key={index} className={`${stylesTags.tag} ${stylesTags['tag-' + tag]}`}>
                {tag}
              </span>
            ))}
          </div>

          {item.imageUrl ? (
            <span className={styles.imgURLbox}><img src={item.imageUrl} className={styles.imgURL} /></span>
          ) : null}


          {/* TITLE */}
          <div className={styles.titleRow}>
            <h2 className={styles.title}>{item.title}</h2>

            {/* LINKS */}
            {item.links.deploy || item.links.backend || item.links.frontend ? (
              <div className={stylesLink.projectLinks}>
                {item.links.deploy && (
                  <a href={item.links.deploy} className={stylesIcon.Icon} target="_blank" rel="noopener noreferrer">
                    <BiLinkAlt />
                  </a>
                )}
                {item.links.backend && (
                  <a href={item.links.backend} target="_blank" rel="noopener noreferrer" className={stylesIcon.gitIconBack}>
                    <FaGithub />
                  </a>
                )}
                {item.links.frontend && (
                  <a href={item.links.frontend} target="_blank" rel="noopener noreferrer" className={stylesIcon.gitIconFront}>
                    <FaGithub />
                  </a>
                )}
              </div>
            ) : null}

            {/* EXTRA LINKS */}
            {item.extraLink.length > 0 && (
              <div className={stylesLink.projectExtraLinks}>
                {item.extraLink.map((link, index) => (
                  <div key={index} className={stylesLink.extraLink}>
                    <a href={link.url} className={stylesLink.extraIcon} target="_blank" rel="noopener noreferrer">
                      <BiLinkAlt /> {link.title && <span className={stylesLink.extraLinkTitle}>{link.title}</span>}
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>


          {/* IMGS */}

          {item.images.map((image, index) => (
            <div key={index} className={styles.imageContainer}>
              <img src={image.src} alt={image.caption} className={styles.imgModal} />
              {image.caption && <p className={styles.imgCaption}>{image.caption}</p>}
            </div>
          ))}

          {/* STACK TECH */}

          {item.stack && item.stack.length > 0 ? (
            <div className={stylesStack.stackContainerModal}>
              {item.stack.map((tech, index) => (
                <span
                  key={index}
                  className={stylesStack.badgeModal}
                  style={{ color: tech.color || '#000' }}  // Color por defecto si tech.color no está definido
                >
                  {tech.name || 'Unnamed'}
                </span>
              ))}
            </div>
          ) : <span style={{ display: 'inline-block', width: '30px', height: '30px' }}></span>
          }


          {/* BTN CLOSE */}
          <button onClick={onRequestClose} className={styles.closeModal}>
            <span>✦</span>
          </button>
        </div>
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
    styleClass: PropTypes.string,
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
    extraLink: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string, // URL de cada imagen
        title: PropTypes.string, // Pie de imagen para la explicación (opcional)
      })
    ),
  }), // Estructura del objeto ítem
};

export default ItemModal;
