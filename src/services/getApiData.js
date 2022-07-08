import api from "../config/api";

export async function getApiData(url) {
  // const token = localStorage.getItem('token');
  const token = localStorage.getItem("token");
  const parse = JSON.parse(token);
  console.log("APIDATAREQUEST", parse);

  const headers = {
    "headers": {
      "Authorization": `Bearer ${(parse.access_token)}`,
    }
  };
  console.log("url", url);

  const request = await api.get(
    url,
    headers)
    .then(res => res)
    .catch(er => er);

  console.log("request - getapidata", request);

  return request.data;
}
