function initMap(){
            // Map options
            let options = {
                zoom: 3, 
                center: {lat:53.1424,lng:-7.6921},
                
            }
            // New map
            let map = new google.maps.Map(document.getElementById("map"), options);
          
            addMarker({lat:-20.5000,lng:-55.0000});
            addMarker({lat:53.1424,lng:-7.6921});
            addMarker({lat:52.1326,lng:5.2913});
            addMarker({lat:42.3601,lng:-71.0589});
            addMarker({lat:43.6532,lng:-79.3832});
            addMarker({lat:38.7223,lng:-9.1393});
            addMarker({lat:60.4720,lng:8.4689});
            addMarker({lat:41.8719,lng:12.5674});
            
            // Add Marker Function
            function addMarker(coords){
            let marker = new google.maps.Marker({
                position:coords,
                map:map,
            })
            }
        }