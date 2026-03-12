import { createGateway, createUserTask, createServiceTask } from "./nodes";

export function initialGraph(graph) {
  const alumno = createServiceTask(graph, 50, 200, "Alumno envía solicitud", {
    tipo: "service",
  });

  const profesor = createUserTask(graph, 300, 200, "Profesor revisa", {
    tipo: "user",
    estado: "pendiente",
  });

  const gateway = createGateway(graph, 550, 200, "¿Aprobado?");
  gateway.setData({ tipo: "gateway" });

  const generarDocumento = createServiceTask(
    graph,
    750,
    120,
    "Generar documento y notificación",
    { tipo: "service" },
  );

  const notificarRechazo = createServiceTask(
    graph,
    750,
    280,
    "Notificar rechazo y posible apelación",
    { tipo: "service" },
  );

  const direccion = createUserTask(
    graph,
    950,
    280,
    "Dirección revisa apelación",
    { tipo: "user", estado: "pendiente" },
  );

  // Conectar nodos
  graph.addEdge({ source: alumno, target: profesor });
  graph.addEdge({ source: profesor, target: gateway });
  graph.addEdge({ source: gateway, target: generarDocumento }); // aceptado
  graph.addEdge({ source: gateway, target: notificarRechazo }); // rechazado
  graph.addEdge({ source: notificarRechazo, target: direccion });
}
