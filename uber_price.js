
var uberClientId = "RxGbzH***************"
    , uberServerToken = "h_hqd3L4***************";


var userLatitude
    , userLongitude
  , partyLatitude = 19.3256725
  , partyLongitude = -43.1579731;



navigator.geolocation.watchPosition(function(position) {
    
    userLatitude = position.coords.latitude;
    userLongitude = position.coords.longitude;

  
    getEstimatesForUserLocation(userLatitude, userLongitude);
});

function getEstimatesForUserLocation(latitude,longitude) {
  $.ajax({
    url: "https://api.uber.com/v1/estimates/price",
    headers: {
        Authorization: "KA.ey**********************************************************************************************************************************" + uberServerToken
    },
    data: { 
      start_latitude: latitude,
      start_longitude: longitude,
      end_latitude: partyLatitude,
      end_longitude: partyLongitude
    },
    success: function(result) {
      console.log(result);
    }
  });
}