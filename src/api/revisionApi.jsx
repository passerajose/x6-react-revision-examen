export async function crearRevision(data) {
  const response = await fetch("http://localhost:3001/revisiones", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response.json();
}
