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

  render() {
    // Define the layout with tags
    const layout = [
      { i: "a", x: 0, y: 0, w: 1, h: 1, tag: "work" },
      { i: "b", x: 1, y: 0, w: 1, h: 1, tag: "personal" },
      { i: "c", x: 2, y: 0, w: 1, h: 1, tag: "work" },
      { i: "d", x: 0, y: 1, w: 1, h: 1, tag: "personal" },
      { i: "e", x: 1, y: 1, w: 1, h: 1, tag: "others" },
      { i: "f", x: 2, y: 1, w: 1, h: 1, tag: "work" },
    ];

    // Filter layout based on the selected tag
    const filteredLayout =
      this.state.selectedTag === "all"
        ? layout
        : layout.filter((item) => item.tag === this.state.selectedTag);

    const layouts = {
      lg: filteredLayout,
      md: filteredLayout,
      sm: filteredLayout,
      xs: filteredLayout,
      xxs: filteredLayout,
    };

    return (
      <div>
        {/* Buttons for selecting tags */}
        <div>
          <button onClick={() => this.handleTagChange("all")}>All</button>
          <button onClick={() => this.handleTagChange("work")}>Work</button>
          <button onClick={() => this.handleTagChange("personal")}>Personal</button>
          <button onClick={() => this.handleTagChange("others")}>Others</button>
        </div>

        {/* Container to center the grid and set the max width */}
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {/* Responsive grid layout component */}
          <ResponsiveGridLayout
            className="layout"
            layouts={layouts} // Use the filtered layout based on the selected tag
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }} // Define breakpoints for responsiveness
            cols={{ lg: 3, md: 3, sm: 2, xs: 1, xxs: 1 }} // Adjust number of columns per breakpoint
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
      case "work":
        return "yellow";
      case "personal":
        return "green";
      case "others":
        return "blue";
      default:
        return "gray";
    }
  }
}

export default MyResponsiveGrid;
