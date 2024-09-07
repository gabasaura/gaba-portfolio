import { useState, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import FilterButtons from "./FilterButtons";
import { gridItemsData } from "../data/gridItemsData";
import styles from "../styles/GridItem.module.css";

// Wrap Responsive with WidthProvider to automatically adjust to the container width
const ResponsiveGridLayout = WidthProvider(Responsive);

const MyResponsiveGrid = () => {
  const [selectedTag, setSelectedTag] = useState("inicio");
  const [layout, setLayout] = useState([]);

  // Simulating fetch data from an API or static source
  useEffect(() => {
    setLayout(gridItemsData); // Carga los ítems con múltiples tags
  }, []);

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
    if (selectedTag === "inicio") {
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
    sm: generateLayout(orderedLayout, 2),
    xs: generateLayout(orderedLayout, 1),
    xxs: generateLayout(orderedLayout, 1),
  };

  const handleTagChange = (tag) => setSelectedTag(tag);

  return (
    <div>
      {/* Buttons to select tag */}
      <FilterButtons selectedTag={selectedTag} handleTagChange={handleTagChange} />

      {/* Grid layout */}
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <ResponsiveGridLayout
          className="layout"
          layouts={layouts}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 3, md: 3, sm: 2, xs: 1, xxs: 1 }}
          rowHeight={281}
        >
          {orderedLayout.map((item) => (
            <div
              key={item.i}
              className={styles.gridItem}
              style={{
                opacity: selectedTag === "inicio" || item.tags.includes(selectedTag) ? 1 : 0.3,
                transition: "opacity 0.3s ease",
              }}
            >
              <img src={item.imageUrl} alt={item.title} />
              <div className={styles.gridItemBox}>
                <h3>{item.tags}</h3>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </ResponsiveGridLayout>
      </div>
    </div>
  );
};

export default MyResponsiveGrid;
