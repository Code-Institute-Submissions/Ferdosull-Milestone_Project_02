function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: {
            lat: 53.42830696507892, 
            lng: -7.939229895133652
        }
    });

    var labels = "ABCDEFGHIJ";

    var locations = [
        { lat: 52.9277403958966, lng: -8.420661941089131 },
        { lat: 52.419866625338784, lng: -8.187759105906318 },
        { lat: 51.83744663817569,  lng: -9.900147501388021 }
    ];

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m", });
}