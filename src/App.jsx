import React, { Component } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import GridItem from "./components/GridItem";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

class MyResponsiveGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTag: "all", // Estado inicial para el tag seleccionado
    };
  }

  // Función para manejar el cambio de tags
  handleTagChange = (tag) => {
    this.setState({ selectedTag: tag });
  };

  render() {
    // Definición del layout con tags
    const layout = [
      { i: "a", x: 0, y: 0, w: 1, h: 1, tag: "backend" },
      { i: "b", x: 1, y: 0, w: 1, h: 1, tag: "personal" },
      { i: "c", x: 2, y: 0, w: 1, h: 1, tag: "backend" },
      { i: "d", x: 0, y: 1, w: 1, h: 1, tag: "personal" },
      { i: "e", x: 1, y: 1, w: 1, h: 1, tag: "frontend" },
      { i: "f", x: 2, y: 1, w: 1, h: 1, tag: "backend" },
    ];

    // Filtrar layout basado en el tag seleccionado
    const filteredLayout =
      this.state.selectedTag === "all"
        ? layout
        : layout.filter((item) => item.tag === this.state.selectedTag);

    // Configuración de layouts para diferentes tamaños de pantalla
    const layouts = {
      lg: filteredLayout,
      md: filteredLayout,
      sm: filteredLayout,
      xs: filteredLayout,
      xxs: filteredLayout,
    };

    return (
      <div>
        {/* Botones para seleccionar tags */}
        <div>
          <button onClick={() => this.handleTagChange("all")}>All</button>
          <button onClick={() => this.handleTagChange("backend")}>Backend</button>
          <button onClick={() => this.handleTagChange("frontend")}>Frontend</button>
          <button onClick={() => this.handleTagChange("personal")}>Personal</button>
        </div>

        {/* Contenedor para centrar la grilla y establecer el ancho máximo */}
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <ResponsiveGridLayout
            className="layout"
            layouts={layouts}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 3, md: 2, sm: 2, xs: 1, xxs: 1 }}
            rowHeight={280} // Ajuste de la altura de cada fila
          >
            {filteredLayout.map((item) => (
              <div key={item.i} style={{ backgroundColor: this.getColor(item.tag) }}>
                <GridItem data={item} />
              </div>
            ))}
          </ResponsiveGridLayout>
        </div>
      </div>
    );
  }

  // Función para asignar color basado en el tag
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