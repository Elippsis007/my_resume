    const properties = {"lat": 12, "lng": 100}
        function myMap() {
           const mapProp = {
               center: properties,
               zoom: 5,
           };
           const map = new google.maps.Map(document.getElementById("map"), mapProp);
        }

        myMap()
