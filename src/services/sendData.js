import axios from "axios";

export function sendData(url, data) {
  axios.post(url, data)
      .then(res => res)
      .catch(err => err);
}
