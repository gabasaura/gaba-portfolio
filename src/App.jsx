import { Component } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

// Wrap Responsive with WidthProvider to allow it to automatically adjust to the width of its container
const ResponsiveGridLayout = WidthProvider(Responsive);

class MyResponsiveGrid extends Component {
  constructor() {
    super();
    this.state = {
      value: true,  // Initial state to toggle between layouts
    };
    this.onHandle = this.onHandle.bind(this); // Bind the method to ensure 'this' refers to the class instance
  }

  // Method to toggle the grid layout
  onHandle() {
    this.setState((prevState) => ({
      value: !prevState.value,  // Toggle the state value between true and false
    }));
  }

  render() {
    // Define layout A (default layout)
    const layoutA = [
      { i: "a", x: 0, y: 0, w: 4, h: 1 },
      { i: "b", x: 4, y: 0, w: 4, h: 1 },
      { i: "c", x: 8, y: 1, w: 4, h: 1 },
      { i: "d", x: 0, y: 1, w: 4, h: 1 },
      { i: "e", x: 4, y: 2, w: 4, h: 1 },
      { i: "f", x: 8, y: 2, w: 4, h: 1 },
    ];
    
    // Define layout B (alternative layout)
    const layoutB = [
      { i: "a", x: 0, y: 0, w: 6, h: 1 },
      { i: "b", x: 6, y: 0, w: 6, h: 1 },
      { i: "c", x: 0, y: 1, w: 6, h: 1 },
      { i: "d", x: 6, y: 1, w: 6, h: 1 },
      { i: "e", x: 0, y: 2, w: 6, h: 1 },
      { i: "f", x: 6, y: 2, w: 6, h: 1 },
    ];

    // Determine which layout to use based on the state
    const layouts = { lg: this.state.value ? layoutA : layoutB };

    return (
      <div>
        {/* Button to toggle the grid layout */}
        <button onClick={this.onHandle}>
          {this.state.value ? "Increase" : "Decrease"} Grid by 2 columns
        </button>

        {/* Container to center the grid and set the max width */}
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {/* Responsive grid layout component */}
          <ResponsiveGridLayout
            className="layout"
            layouts={layouts} // Pass the dynamic layouts based on state
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }} // Define breakpoints for responsiveness
            cols={{ lg: 12, md: 12, sm: 12, xs: 1, xxs: 1 }} // Define the number of columns per breakpoint
            rowHeight={281} // Define the height of each row
          >
            {/* Grid items */}
            <div key="a" style={{ backgroundColor: "yellow" }}>
              1
            </div>
            <div key="b" style={{ backgroundColor: "green" }}>
              2
            </div>
            <div key="c" style={{ backgroundColor: "red" }}>
              3
            </div>
            <div key="d" style={{ backgroundColor: "blue" }}>
              4
            </div>
            <div key="e" style={{ backgroundColor: "violet" }}>
              5
            </div>
            <div key="f" style={{ backgroundColor: "lemonchiffon" }}>
              6
            </div>
          </ResponsiveGridLayout>
        </div>
      </div>
    );
  }
}

export default MyResponsiveGrid;