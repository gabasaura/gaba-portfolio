import { useState, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import FilterButtons from "./FilterButtons";
import { gridItemsData } from "../data/gridItemsData";
import styles from "../styles/GridItem.module.css"

// Wrap Responsive with WidthProvider to automatically adjust to the container width
const ResponsiveGridLayout = WidthProvider(Responsive);

const MyResponsiveGrid = () => {
  const [selectedTag, setSelectedTag] = useState("all");
  const [layout, setLayout] = useState([]);

  // Simulating fetch data from an API or static source
  useEffect(() => {
    setLayout(gridItemsData);
  }, []);

  // Helper function to dynamically calculate the layout positions
  const generateLayout = (layout, cols) => {
    // eslint-disable-next-line no-unused-vars
    let currentColumn = 0;
    let rowHeights = Array(cols).fill(0); // Heights of rows in each column
    let columnWidths = Array(cols).fill(0); // Widths of columns based on the maximum width of items in that column
  
    // Function to find the first column with enough vertical space
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
  
      // Determine the optimal column and row position for the item
      let x = findColumnForItem(item);
      let y = rowHeights[x];
  
      // Update rowHeights and columnWidths for the column where the item is placed
      for (let i = 0; i < w; i++) {
        if (x + i < cols) {
          rowHeights[x + i] = y + h;
          columnWidths[x + i] = Math.max(columnWidths[x + i], w);
        }
      }
  
      return {
        ...item,
        x,
        y
      };
    });
  };
  
  

  // Filter layout by selected tag
  const filteredLayout =
    selectedTag === "all"
      ? layout
      : layout.filter((item) => item.tag === selectedTag);

  // Define the layout for different breakpoints
  const layouts = {
    lg: generateLayout(filteredLayout, 3), // 3 columns for large screens
    md: generateLayout(filteredLayout, 3), // 3 columns for medium screens
    sm: generateLayout(filteredLayout, 2), // 2 columns for small screens
    xs: generateLayout(filteredLayout, 1), // 1 column for extra small screens
    xxs: generateLayout(filteredLayout, 1), // 1 column for extra extra small screens
  };

  const handleTagChange = (tag) => setSelectedTag(tag);

  return (
    <div>
      {/* Buttons to select tag */}
      <FilterButtons handleTagChange={handleTagChange} />

      {/* Grid layout */}
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <ResponsiveGridLayout
          className="layout"
          layouts={layouts}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 3, md: 3, sm: 2, xs: 1, xxs: 1 }}
          rowHeight={281}
        >
          {filteredLayout.map((item) => (
            <div key={item.i} className={styles.gridItem}>
              <img src={item.imageUrl} alt={item.title}/>
              <div className={styles.gridItemBox}>
              <h3>{item.tag}</h3>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div></div>
          ))}
        </ResponsiveGridLayout>
      </div>
    </div>
  );
};

export default MyResponsiveGrid;
