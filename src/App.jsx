import { Component } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

class MyResponsiveGrid extends Component {
  constructor() {
    super();
    this.state = {
      value: true,
    };
    this.onHandle = this.onHandle.bind(this);
  }

  onHandle() {
    this.setState((prevState) => ({
      value: !prevState.value,
    }));
  }

  render() {
    const layoutA = [
      { i: "a", x: 0, y: 0, w: 4, h: 1 },
      { i: "b", x: 4, y: 0, w: 4, h: 1 },
      { i: "c", x: 8, y: 0, w: 4, h: 1 },
      { i: "d", x: 0, y: 1, w: 4, h: 1 },
      { i: "e", x: 4, y: 1, w: 4, h: 1 },
      { i: "f", x: 8, y: 1, w: 4, h: 1 },
    ];
    const layoutB = [
      { i: "a", x: 0, y: 0, w: 6, h: 1 },
      { i: "b", x: 6, y: 0, w: 6, h: 1 },
      { i: "c", x: 0, y: 1, w: 6, h: 1 },
      { i: "d", x: 6, y: 1, w: 6, h: 1 },
      { i: "e", x: 0, y: 2, w: 6, h: 1 },
      { i: "f", x: 6, y: 2, w: 6, h: 1 },
    ];

    const layouts = { lg: this.state.value ? layoutA : layoutB };

    return (
      <div>
        <button onClick={this.onHandle}>
          {this.state.value ? "Increase" : "Decrease"} Grid by 2 columns
        </button>
        
        <ResponsiveGridLayout
          className="layout"
          layouts={layouts}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={281}
        >
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
    );
  }
}

export default MyResponsiveGrid;