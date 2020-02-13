import * as geolib from "geolib";

import { lat, lng } from "../API/NetworkRequest";

export const distance = position => {
  return geolib.getDistance(position, {
    latitude: lat,
    longitude: lng
  });
};
