let cachedData: null = null;
let lastFetchTime = 0;
const revalidateInterval = 3600 * 1000; // 3600 seconds (1 hour) in milliseconds

export async function Zimpo() {
  // Check if the data is cached and if it's time to revalidate
  if (cachedData !== null && Date.now() - lastFetchTime < revalidateInterval) {
    return cachedData;
  }

  const response = await fetch("https://tabelazimpo.onrender.com");

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();

  // Update the cache and last fetch time
  cachedData = data;
  lastFetchTime = Date.now();

  return data;
}
