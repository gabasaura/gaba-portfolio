import { Component } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

// Wrap Responsive with WidthProvider to allow it to automatically adjust to the width of its container
const ResponsiveGridLayout = WidthProvider(Responsive);

class MyResponsiveGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTag: "all", // Initial state for the selected tag
    };
  }

  // Function to handle tag selection
  handleTagChange = (tag) => {
    this.setState({ selectedTag: tag });
  };

  // Helper function to dynamically calculate the layout positions
  generateLayout = (layout, cols) => {
    return layout.map((item, idx) => ({
      ...item,
      x: idx % cols, // Dynamic x based on number of columns
      y: Math.floor(idx / cols), // Dynamic y based on number of columns
    }));
  };

  render() {
    // Define the layout with tags (no need to define x and y here)
    const layout = [
      { i: "a", w: 1, h: 1, tag: "backend" },
      { i: "b", w: 1, h: 1, tag: "personal" },
      { i: "c", w: 1, h: 1, tag: "backend" },
      { i: "d", w: 1, h: 1, tag: "personal" },
      { i: "e", w: 1, h: 1, tag: "frontend" },
      { i: "f", w: 1, h: 1, tag: "backend" },
    ];

    // Filter layout based on the selected tag
    const filteredLayout =
      this.state.selectedTag === "all"
        ? layout
        : layout.filter((item) => item.tag === this.state.selectedTag);

    // Define the layout for different breakpoints
    const layouts = {
      lg: this.generateLayout(filteredLayout, 3), // 3 columns for large screens
      md: this.generateLayout(filteredLayout, 3), // 2 columns for medium screens
      sm: this.generateLayout(filteredLayout, 2), // 2 columns for small screens
      xs: this.generateLayout(filteredLayout, 1), // 1 column for extra small screens
      xxs: this.generateLayout(filteredLayout, 1), // 1 column for extra extra small screens
    };

    return (
      <div>
        {/* Buttons for selecting tags */}
        <div>
          <button onClick={() => this.handleTagChange("all")}>All</button>
          <button onClick={() => this.handleTagChange("backend")}>Backend</button>
          <button onClick={() => this.handleTagChange("frontend")}>Frontend</button>
          <button onClick={() => this.handleTagChange("personal")}>Personal</button>
        </div>

        {/* Container to center the grid and set the max width */}
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {/* Responsive grid layout component */}
          <ResponsiveGridLayout
            className="layout"
            layouts={layouts} // Use the dynamically generated layout based on breakpoints
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }} // Define breakpoints for responsiveness
            cols={{ lg: 3, md: 3, sm: 2, xs: 1, xxs: 1 }} // Define number of columns for each breakpoint
            rowHeight={281} // Define the height of each row
          >
            {/* Grid items */}
            {filteredLayout.map((item) => (
              <div key={item.i} style={{ backgroundColor: this.getColor(item.tag) }}>
                {item.i}
              </div>
            ))}
          </ResponsiveGridLayout>
        </div>
      </div>
    );
  }

  // Helper function to determine background color based on tag
  getColor(tag) {
    switch (tag) {
      case "backend":
        return "yellow";
      case "personal":
        return "green";
      case "frontend":
        return "blue";
      default:
        return "gray";
    }
  }
}

export default MyResponsiveGrid;