console.log('Simply.js Geo');

navigator.geolocation.getCurrentPosition(function(pos) {
  var coords = pos.coords;
  var lat = coords.latitude;
  var lon = coords.longitude;
  /*var lat_g = lat*60+" "+lat*60*60-lat*60;*/
  /*var lon_g = lon*60+" "+lon*60*60-lon*60; */
  simply.setText({ title:'GeoPosition:' }, true);
  simply.text({ body:lat+"\n"+lon });
});