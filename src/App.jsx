import Canvas, { getGraph } from "./components/Canvas";
import RevisionForm from "./components/RevisionForm";
import { crearRevision } from "./api/revisionApi";

export default function App() {
  const handleRevision = async (data) => {
    const revision = await crearRevision(data);
    const graph = getGraph();
    graph.addNode({
      x: 200,
      y: 50 + Math.random() * 150,
      width: 180,
      height: 50,
      label: `Solicitud ${revision.id}`,
      data: revision,
      attrs: { body: { fill: "#bae7ff" } },
    });
  };

  return (
    <div>
      <h1>Workflow revisión de examen</h1>
      <RevisionForm onSubmit={handleRevision} />
      <Canvas />
    </div>
  );
}
