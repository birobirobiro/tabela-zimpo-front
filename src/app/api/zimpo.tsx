export async function Zimpo() {
  const zimpoTable = await fetch("https://tabelazimpo.onrender.com");

  if (!zimpoTable.ok) {
    throw new Error("Failed to fetch data");
  }

  return zimpoTable.json();
}