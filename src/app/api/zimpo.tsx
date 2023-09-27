export async function Zimpo() {
  // Gere um timestamp único para adicionar como parâmetro de consulta
  const timestamp = Date.now();
  const apiUrl = `https://tabelazimpo.onrender.com/?timestamp=${timestamp}`;

  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();

  return data;
}
