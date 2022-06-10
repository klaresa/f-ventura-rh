import api from "../config/api";

export async function getApiData(url) {
  const token = localStorage.getItem('token');

  const headers = {
    'headers': {
      'Authorization': `Bearer ${(token)}`,
    }
  }

  const request = await api.get(
      url,
      headers)
      .then(res => res)
      .catch(er => er);

  console.log('request - getapidata', request);

  return request.data;
}
