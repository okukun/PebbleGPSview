console.log('Simply.js Geo');

navigator.geolocation.getCurrentPosition(function(pos) {
  var coords = pos.coords;
  var lat = coords.latitude;
  var lon = coords.longitude;
  var lat_g = lat*60+" "+lat*60*60-lat*60;
  var lon_g = lon*60+" "+lon*60*60-lon*60; 
  console.log(util2.format('pos: $pos', pos));
  console.log(util2.format('Coords: $pos.coords', pos.coords));
  console.log(util2.format('coords.latitude: $coords.latitude', coords.latitude));
  console.log(util2.format('coords.longitude: $coords.longitude', coords.longitude));
  console.log(util2.format('lat: $lat', lat));
  console.log(util2.format('lon: $lon', lon));
  console.log(util2.format('lat_g: $lat_g', lat_g));
  console.log(util2.format('lon_g: $lon_g', lon_g));
  simply.setText({ title:'GeoPosition:' }, true);
  simply.text({ body:lat_g+"\n"+lon_g });
});