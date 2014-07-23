navigator.geolocation.getCurrentPosition(function(pos) {
  var coords = pos.coords;
  var lat = coords.latitude.toString().split(".");
  var lon = coords.longitude.toString().split(".");
  var lat_d = parseInt(lat[0]);
  var lat_ht = parseInt("0."+lat[1]);
  var lat_h = (lat_ht*60).substring(0,3);
  var lon_d = parseInt(lon[0]);
  var lon_ht = parseInt("0."+lon[1]);
  var lon_h = (lon_ht*60).substring(0,3);
  simply.setText({ title:'GeoPosition:' }, true);
  simply.text({ body:lat_d+"° "+lat_h+"\n"+lon_d+"° "+lon_h });
});
