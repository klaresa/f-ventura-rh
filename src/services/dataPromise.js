import fetchData from "./fetchData";

export default function dataPromise(url) {
  return fetchData(url)
      .then(res => res)
      .then(data => data);
}
