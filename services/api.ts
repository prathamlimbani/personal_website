// Helper to wrap fetching logic if needed in the future
export const fetchFromNetlify = async (endpoint: string) => {
  const res = await fetch(`/.netlify/functions/${endpoint}`);
  if (!res.ok) throw new Error(`API Error: ${res.statusText}`);
  return res.json();
};