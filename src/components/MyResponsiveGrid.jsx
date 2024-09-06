import { useState, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import FilterButtons from "./FilterButtons";
import { gridItemsData } from "../data/gridItemsData";

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
    return layout.map((item, idx) => ({
      ...item,
      x: idx % cols, // Dynamic x based on number of columns
      y: Math.floor(idx / cols), // Dynamic y based on number of columns
    }));
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
            <div key={item.i} style={{overflow: "hidden"}}>
              <img src={item.imageUrl} alt={item.title}
                style={{
                  position: "absolute",
                  zIndex: -1, 
                }}
              />
              <h3>{item.tag}</h3>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </ResponsiveGridLayout>
      </div>
    </div>
  );
};

export default MyResponsiveGrid;
