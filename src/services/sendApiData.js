import api from "../config/api";

export async function sendApiData(url, data) {
  const token = localStorage.getItem("token");
  const parse = JSON.parse(token);

  const headers = {
    "headers": {
      "Authorization": `Bearer ${(parse.access_token)}`,
    }
  };

  const request = await api.post(
    url,
    data,
    headers)
    .then(res => res)
    .catch(er => er);

  console.log("request - sendApiData", request);

  return request.data;
}
