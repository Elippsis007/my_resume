const properties = {"lat": 12, "lng": 100}
/** Declaring a function so I can create the map */
function myMap() {
        
/** The mapProp variable defines the properties of the map */
const mapProp = {
     
    /** The center property specifies where to centre the map
     * or pass in the coordinates from an external variable/function  */
    center: properties,

    /** zoom set the zoom level of the map */
    zoom: 5,

    };     
/** Creates a new map inside the div that has the id of "map" set
 * it then calls the properties to see how to render the map */
const map = new google.maps.Map(document.getElementById("map"), mapProp);
}

myMap()
       

