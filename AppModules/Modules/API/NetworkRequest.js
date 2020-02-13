import axios from "axios";

let lat = null;
let lng = null;

export const API = axios
  .get(
    "https://qa-api.t2scdn.com/settings?api_token=72373f025c58c47999f5732045068d2585caf5c4"
  )
  .then(response => {
    lat = response.data.data[0].lat;
    lng = response.data.data[0].lng;
  })
  .catch(error => alert("Server error : Refresh the App"));

export { lat, lng };
