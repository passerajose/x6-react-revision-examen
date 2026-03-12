// user task: requiere intervención humana
export function createUserTask(graph, x, y, label, data) {
  return graph.addNode({
    shape: "rect",
    x,
    y,
    width: 200,
    height: 60,
    label,
    data,
    attrs: { body: { fill: "#ffe58f" } },
  });
}

// service task: automática
export function createServiceTask(graph, x, y, label, data) {
  return graph.addNode({
    shape: "rect",
    x,
    y,
    width: 200,
    height: 60,
    label,
    data,
    attrs: { body: { fill: "#bae7ff" } },
  });
}

// gateway: condicional
export function createGateway(graph, x, y, label) {
  return graph.addNode({
    shape: "polygon",
    x,
    y,
    width: 60,
    height: 60,
    label,
    points: [
      { x: 30, y: 0 },
      { x: 60, y: 30 },
      { x: 30, y: 60 },
      { x: 0, y: 30 },
    ],
  });
}
