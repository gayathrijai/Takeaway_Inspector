import axios from "axios";

let responseData;
let lat = null;
let lng = null;
export const fetchAPI = () => {
  axios
    .get(
      "https://qa-api.t2scdn.com/settings?api_token=72373f025c58c47999f5732045068d2585caf5c4"
    )
    .then(response => {
      responseData = response.data.data[0];
      lat = response.data.data[0].lat;
      lng = response.data.data[0].lng;
      console.log(responseData);
      console.log(lat + " " + lng);
    })

    .catch(error => alert("Server error : Refresh the App" + error));
  return responseData;
};
export { lat, lng, responseData };
