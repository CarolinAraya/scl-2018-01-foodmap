var map;
var infowindow;

navigator.geolocation.getCurrentPosition(initMap);

function initMap(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    var pyrmont = { lat, lng };

    map = new google.maps.Map(document.getElementById('map'), {
        center: pyrmont,
        zoom: 15
    });

    infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
        location: pyrmont,
        radius: 500,
        type: ['restaurant']
    }, callback);

    function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                createMarker(results[i]);
                getInfoPlacesAndPrint(results[i]);
            }
            
        }
    }

    function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location
        });

        google.maps.event.addListener(marker, 'click', function () {
            infowindow.setContent(place.name);
            infowindow.open(map, this);
        });
    }

    /* get places */

    function getInfoPlacesAndPrint(place) {
        var name = place.name;
        var address = place.vicinity;
        var photo = place.photos[0].getUrl({'maxWidth': 350, 'maxHeight': 350});

        var toPrint = document.getElementById("restaurant");
        var modalPhoto = document.getElementById("modalPhoto");

        toPrint.innerHTML += `<img src='${photo}'></img>`;
        modalPhoto.innerHTML += `<h4>${name}</h4><p>${address}/p>`
    }
    
}

