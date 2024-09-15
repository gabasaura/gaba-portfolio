import { useState, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { FaGithub } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import FilterButtons from "./FilterButtons";
import { gridItemsData } from "../data/gridItemsData";
import styles from "../styles/GridItem.module.css";
import stylesStack from "../styles/Stack.module.css"
import stylesTags from "../styles/Tags.module.css"
import stylesLink from "../styles/Links.module.css"
import stylesIcon from "../styles/Icons.module.css"
import ItemModal from "./ItemModal";




// Wrap Responsive with WidthProvider to automatically adjust to the container width
const ResponsiveGridLayout = WidthProvider(Responsive);

const MyResponsiveGrid = () => {
  const [selectedTag, setSelectedTag] = useState("Inicio");
  const [layout, setLayout] = useState([]);
  const [breakpoint, setBreakpoint] = useState("lg");
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar si el modal está abierto
  const [selectedItem, setSelectedItem] = useState(null); // Estado para controlar el ítem seleccionado


  // Simulating fetch data from an API or static source
  useEffect(() => {
    setLayout(gridItemsData); // Carga los ítems con múltiples tags
  }, []);

  // MODAL
  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  // Update layout to force w = 1 for "sm" breakpoint (2 columns)
  const updateLayoutForTwoColumns = (currentLayout) => {
    // Forzamos el ancho w a 1 cuando estamos en el breakpoint 'sm'
    if (breakpoint === "sm") {
      return currentLayout.map(item => ({
        ...item,
        w: 1 // Fuerza el ancho a 1 para que cada ítem ocupe solo una columna
      }));
    }
    return currentLayout;
  };

  // GRID DINAMICA & RESPONSIVE MAGIC
  // Helper function to dynamically calculate the layout positions
  const generateLayout = (layout, cols) => {
    let rowHeights = Array(cols).fill(0); // Heights of rows in each column
    let columnWidths = Array(cols).fill(0); // Widths of columns based on the maximum width of items in that column

    const findColumnForItem = (item) => {
      let minHeight = Infinity;
      let columnIndex = 0;

      for (let i = 0; i < cols; i++) {
        const height = rowHeights[i];
        const width = columnWidths[i];

        if (width + item.w <= cols && height < minHeight) {
          minHeight = height;
          columnIndex = i;
        }
      }
      return columnIndex;
    };

    return layout.map(item => {
      const { w, h } = item;
      let x = findColumnForItem(item);
      let y = rowHeights[x];

      for (let i = 0; i < w; i++) {
        if (x + i < cols) {
          rowHeights[x + i] = y + h;
          columnWidths[x + i] = Math.max(columnWidths[x + i], w);
        }
      }
      return { ...item, x, y };
    });
  };

  // FILTER LAYOUT
  // Function to get ordered layout based on selected tag
  const getOrderedLayout = () => {
    if (selectedTag === "Inicio") {
      // Return items to their initial state
      return layout.map(item => ({
        ...item,
        opacity: 1, // Ensure full opacity for all items
      }));
    }

    // Items filtered by the selected tag
    const filteredItems = layout.map(item => ({
      ...item,
      opacity: item.tags.includes(selectedTag) ? 1 : 0.3,
    }));

    // Ensure items with the selected tag come first, maintain original order for all
    return filteredItems.sort((a, b) => {
      if (a.tags.includes(selectedTag) && !b.tags.includes(selectedTag)) {
        return -1;
      } else if (!a.tags.includes(selectedTag) && b.tags.includes(selectedTag)) {
        return 1;
      } else {
        // Maintain original order
        return layout.indexOf(a) - layout.indexOf(b);
      }
    });
  };

  // Get the ordered layout based on the current tag
  const orderedLayout = getOrderedLayout();

  // Define the layout for different breakpoints
  const layouts = {
    lg: generateLayout(orderedLayout, 3),
    md: generateLayout(orderedLayout, 3),
    sm: generateLayout(updateLayoutForTwoColumns(orderedLayout), 2),
    xs: generateLayout(orderedLayout, 1),
    xxs: generateLayout(orderedLayout, 1),
  };

  // Update breakpoint state on change
  const onBreakpointChange = (newBreakpoint) => {
    setBreakpoint(newBreakpoint);
  };

  const handleTagChange = (tag) => setSelectedTag(tag);

  return (
    <>
      {/* Buttons to select tag */}
      <FilterButtons
        selectedTag={selectedTag}
        handleTagChange={handleTagChange}
      />

      {/* Grid layout */}
      <div>
        <ResponsiveGridLayout
          className="layout"
          layouts={layouts}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 3, md: 3, sm: 2, xs: 1, xxs: 1 }}
          rowHeight={281}
          onBreakpointChange={onBreakpointChange} // Escucha cambios de breakpoints
          isDraggable={false}
          isResizable={false}
        >
          {orderedLayout.map((item) => (
            <div
              key={item.i}
              className={`${styles.gridItem} ${styles.defaultStyle} ${styles[item.styleClass]}`} // Aplicar clase dinámica
              style={{
                opacity: selectedTag === "Inicio" || item.tags.includes(selectedTag) ? 1 : 0.3,
                transition: "opacity 0.3s ease",
              }}

            >
              {item.imageUrl ? (<span className={styles.imgURLbox}><img src={item.imageUrl} className={styles.imgURL} /></span>) : null}


              <div className={styles.gridItemBox}>
                <h2 className={styles.title}>{item.title}</h2>

                {/* Stack de lenguajes */}
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


                <div className={styles.iconTags}>

                  {/* LINKS */}
                  <div className={stylesLink.gridLinks}>

                    {item.links.backend && (
                      <a href={item.links.backend} target="_blank" rel="noopener noreferrer"
                        className={stylesIcon.gitIconBack}>
                        <FaGithub /></a>
                    )}
                    {item.links.frontend && (
                      <a href={item.links.frontend} target="_blank" rel="noopener noreferrer"
                        className={stylesIcon.gitIconFront}>
                        <FaGithub /></a>
                    )}
                  </div>

                  {item.tags.map((tag, index) => (
                    <span key={index} className={`${stylesTags.tag} ${stylesTags['tag-' + tag]}`}>
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

              {/* Botón con el ícono para abrir el modal */}
              <button className={styles.plusIcon} onClick={() => {
                handleOpenModal(item)
              }}>
                <FaPlusCircle />


              </button>


            </div>
          ))}
        </ResponsiveGridLayout>

        {/* ItemModal */}
        <ItemModal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          item={selectedItem}
        />
      </div>
    </>
  );
};

export default MyResponsiveGrid;
