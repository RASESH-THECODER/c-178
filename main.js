

let latitude=22.7868542, longitude=88.3643296;
 // Initializing Mapbox
  mapboxgl.accessToken = 'pk.eyJ1IjoicmFzZXNoIiwiYSI6ImNrcmowaXk4dTBzYzEzMW81dWs0eTZldWcifQ.TB9G8SVYnRqgMkOpjXZv0g';
   var map = new mapboxgl.Map({ 
       container: 'map', 
       style: 'mapbox://styles/mapbox/streets-v11', 
       center: [longitude, latitude], 
       zoom: 16 });

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions:{
            enableHighAccuracy:true
        },
        traceUserLocation:true
    })
);
map.addControl(
    new MapboxDirections({
        accessToken:mapboxgl.accessToken
    }),
    "top-right"
)