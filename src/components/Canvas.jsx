import { useEffect, useRef } from "react";
import { Graph } from "@antv/x6";
import { initialGraph } from "../graph/initialGraph";

let graphInstance = null;
export function getGraph() {
  return graphInstance;
}

export default function Canvas() {
  const ref = useRef(null);

  useEffect(() => {
    graphInstance = new Graph({
      container: ref.current,
      width: 1000,
      height: 400,
      grid: true,
    });

    // usar helper para construir el grafo inicial
    initialGraph(graphInstance);

    // evento compartido con otros componentes
    graphInstance.on("node:dblclick", ({ node }) => {
      const data = node.getData() || {};
      if (data.tipo === "user") {
        const estado = prompt("Ingrese estado: aceptado/rechazado");
        if (estado) {
          node.setData({ ...data, estado });
        }
      } else if (data.tipo === "gateway") {
        const decision = prompt("Seleccione: aprobado o rechazado");
        if (decision === "aprobado") {
          // resaltar camino verde
          const outEdges = graphInstance
            .getEdges()
            .filter((e) => e.getSourceCell() === node);
          outEdges.forEach((e) => {
            const targetLabel = e.getTargetCell()?.getLabel();
            e.attr(
              "line/stroke",
              targetLabel?.includes("Generar") ? "green" : "#ccc",
            );
          });
        } else if (decision === "rechazado") {
          const outEdges = graphInstance
            .getEdges()
            .filter((e) => e.getSourceCell() === node);
          outEdges.forEach((e) => {
            const targetLabel = e.getTargetCell()?.getLabel();
            e.attr(
              "line/stroke",
              targetLabel?.includes("Notificar") ? "red" : "#ccc",
            );
          });
        }
      }
    });
  }, []);

  return <div ref={ref} style={{ border: "1px solid #ccc" }} />;
}
