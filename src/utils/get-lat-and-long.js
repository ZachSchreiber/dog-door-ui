import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyBldkPaL-hPG5XtRe9eK82K9yp_HFKgLiM");

// set response language. Defaults to english.
Geocode.setLanguage("en");

Geocode.enableDebug();

// // Get address from latitude & longitude.
// Geocode.fromLatLng("48.8583701", "2.2922926").then(
//   response => {
//     const address = response.results[0].formatted_address;
//     console.log(address);
//   },
//   error => {
//     console.error(error);
//   }
// );

const getLatAndLong = address =>
  Geocode.fromAddress(address).then(
    response => {
      const { lat, lng } = response.results[0].geometry.location;
      return { lat, lng };
    },
    error => {
      return error;
    }
  );

export default getLatAndLong;
