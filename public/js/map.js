var theMap = L.map('mapid').setView([31.505, -40.09], 3);

googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(theMap);

var content;
var tooltip;
var counter = 0;

// Birthplace
content = "Many moons ago I was born in Grand Junction, CO";
L.marker([39.063871, -108.550649])
  .bindTooltip(String(++counter), {permanent: true, opacity: .5})
  .addTo(theMap)
  .bindPopup(content);

// Bay Area region
var circle = L.circle([38.177751,-121.666203], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 100000
}).addTo(theMap);

L.marker([38.662609, -121.204137])
  .addTo(theMap)
  .bindTooltip(String(++counter), {permanent: true, opacity: .5})
  .bindPopup("I grew up just outside Sacramento, CA");

// Stanford
content = "<b>1995-1999</b><br/>";
content += "I went to Stanford and got my degree in Computer Science<br/><br/>";
content += "<b>2001-2002</b><br/>I also got a masters degree from <a href='https://ccrma.stanford.edu' target='_blank'>CCRMA</a> in <a href='https://ccrma.stanford.edu/academics/masters'>Music, Science and Technology</a>";
L.marker([37.430047, -122.173362])
  .bindTooltip(String(++counter), {permanent: true, opacity: .5})
  .addTo(theMap)
  .bindPopup(content);

// 1stup
content = "<b>1999-2001</b><br/>"
content += "I worked for a startup in San Francisco called 1stUp.com, which was ultimately by CMGI in 2000.<br/><br/>";
content += "<b>2002</b><br/>I then co-founded a spinoff called Merado Software, which we sold to PeoplePC in 2002"
content += "<ul>";
content += "<li>Front-end application development</li>";
content += "<li>Managed 10 person development team</li>";
content += "</ul>"
L.marker([37.78956, -122.40036])
  .addTo(theMap)
  .bindTooltip(String(++counter), {permanent: true, opacity: .5})
  .bindPopup(content);

// Central America region
var circle = L.circle([14.517205, -88.992796], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 300000
}).addTo(theMap);


// Peace Corps
content = "Looking to broaden my horizons, I joined the Peace Corps";
content = "<b>2002-2003</b><br/>";
content += "US Peace Corps, Site: Honduras. I lived in a small town called Güinope - the orange capital of Honduras apparently.<br/>";
content += "<ul>"
content += "<li>Language fluency: Spanish</li>";
content += "<li>Technical proficiency: Water and Sanitation</li>";
content += "</ul>";
L.marker([13.882247, -86.93612])
  .addTo(theMap)
  .bindTooltip(String(++counter), {permanent: true, opacity: .5})
  .bindPopup(content);


// Washington State Democrats
content = "After returning from the Peace Corps, I moved to Seattle with my now wife Emily.<br/><br/>";
content += "<b>2003-2004</b><br/>";
content += "Worked for the Washington State Democrats during the primary season.<br/>";
content += "<ul>";
content += "<li>Built backend and frontend software for campaign database</li>"; 
content += "</ul>";
L.marker([47.650544, -122.3493])
  .addTo(theMap)
  .bindTooltip(String(++counter), {permanent: true, opacity: .5})
  .bindPopup(content);

// NYC Region
var circle = L.circle([40.751906, -73.97727], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 5000
}).addTo(theMap);

// NYC
content = "In late 2004, I moved to NYC (Williamsburg, Brooklyn).<br/><br/>";
content += "<b>2004-2010</b><br/>";
content += "While there, I worked for <a href='http://portware.com'>Portware</a>. My office was across the street from Grand Central Station.";
content += "<ul>";
content += "<li>Architecture and development of compliance system</li>";
content += "<li>Manager and Lead Engineer, front-end trading application</li>";
content += "</ul>";
L.marker([40.751906, -73.97727])
  .addTo(theMap)
  .bindTooltip(String(++counter), {permanent: true, opacity: .5})
  .bindPopup(content);


// Amsterdam region
var circle = L.circle([52.358318, 4.861018], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 5000
}).addTo(theMap);


// Amsterdam / Spreecast
content = "At the beginning of 2011, we moved to Amsterdam.<br/><br/>";
content += "<b>2012-2013</b><br/>";
content += "I worked (remotely) for Spreecast, a social video startup based in San Francisco:<br/>";
content += "<ul>";
content += "<li>Built video streaming engine for live broadcasts</li>";
content += "<li>Worked on user interface overhaul with strong focus on improving user experience.</li>";
content += "</ul>";

content += "<b>2014-</b><br/>";
content += "Co-founded <a href='http://buildproto.com' target='_blank'>Proto</a><br/>:";
content += "<ul>";
content += "<li>For startups: managed and helped with implementation of API backends, web apps and iOS apps</li>";
content += "<li>Yahoo: wide array of technical consulting, from ecommerce site implementation and analytics capture to mobile app dev</li>";
content += "</ul>";

// Amsterdam / Proto
L.marker([52.359733, 4.891785])
  .addTo(theMap)
  .bindTooltip(String(++counter), {permanent: true, opacity: .5})
  .bindPopup(content);

// Guatemala
content = "Over the years I've spent significant time in Guatemala, accompanying my wife Emily on research trips and working remotely.";
L.marker([14.852071, -91.530547])
  .addTo(theMap)
  .bindTooltip(String(++counter), {permanent: true, opacity: .5})
  .bindPopup(content);


// Corvallis
L.marker([44.564566, -123.262043])
  .addTo(theMap)
  .bindTooltip(String(++counter), {permanent: true, opacity: .5})
  .bindPopup("<b>2017- </b><br/>In 2017 we will relocate to Corvallis, Oregon. Wow!");




