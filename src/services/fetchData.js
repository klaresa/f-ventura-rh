export default async function fetchData(url) {
  const response = await fetch(url, { credentials: "same-origin" });
  return await response.json();
}
