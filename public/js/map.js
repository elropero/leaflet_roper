var theMap = L.map('mapid').setView([21.505, -40.09], 3);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.satellite',
    accessToken: 'pk.eyJ1IjoiZWxyb3Blcm8iLCJhIjoiY2owYXc4b201MDAwbDMzbXg5N3o0ZzY2OCJ9.TrN--dVPSHx-m8li-CIwvg'
}).addTo(theMap);

// Stanford
L.marker([37.430047, -122.173362])
  .addTo(theMap)
  .bindPopup("<b>1995-1999</b><br/>I went to Stanford and got my degree in Computer Science<br/><b>2001-2002</b><br/>I also got a masters degree from CCRMA in Music, Science and Technology");

// 1stup
L.marker([37.78956, -122.40036])
  .addTo(theMap)
  .bindPopup("<b>1999-2001</b><br/>I worked for a startup called 1stUp.com which was acquired by CMGI.<br/><b>2002<br/>I then started a spinoff called Merado Software, which we sold to PeoplePC in 2002");

// Peace Corps
L.marker([13.882247, -86.93612])
  .addTo(theMap)
  .bindPopup("<b>2002-2003</b><br/>In 2002 I joined the Peace Corps and left for a Honduras. I lived in a small town called Güinope - the orange capital of Honduras apparently.");

// Washington State Democrats
L.marker([47.650544, -122.3493])
  .addTo(theMap)
  .bindPopup("<b>2003-2004</b><br/>After returning from the Peace Corps, I moved to Seattle with my now wife Emily. There I worked for the Washington State Democrats during the 2004 primary season.");


// Brooklyn
L.marker([40.720852, -73.960833])
	.addTo(theMap)
	.bindPopup("<b>2004-2010</b><br/>In late 2004, I moved to Williamsburg, Brooklyn.");

// NYC
L.marker([40.751906, -73.97727])
  .addTo(theMap)
  .bindPopup("<b>2004-2010</b><br/>In New York, I worked for Portware. My office was across the street from Grand Central Station.");

// Amsterdam / Spreecast
L.marker([52.358318, 4.861018])
  .addTo(theMap)
  .bindPopup("<b>2011-2017</b><br/>At the beginning of 2011, we moved to Amsterdam.<br/><b>2012-2013</b>In 2012 I started working (remotely) for Spreecast, a social video startup based in San Francisco.");

// Amsterdam / Proto
L.marker([52.359733, 4.891785])
  .addTo(theMap)
  .bindPopup("<b>2014-</b><br/>In 2014 I co-founded <a href='http://buildproto.com' target='_blank'>Proto</a>");


// Corvallis
L.marker([44.564566, -123.262043])
  .addTo(theMap)
  .bindPopup("<b>2017- </b><br/>In 2017 we will relocate to Corvallis, Oregon. Wow!");




