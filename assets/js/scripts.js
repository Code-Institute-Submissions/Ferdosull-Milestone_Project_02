// Initial Loading of the GoogleMaps API Visuals and locations //

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6.7,
        center: {
            lat: 53.42830696507892, 
            lng: -7.939229895133652
        }
    });

    var labels = "ABCDE";

    var locations = [
        { lat: 52.9277403958966, lng: -8.420661941089131 }, // #1 //
        { lat: 52.419866625338784, lng: -8.187759105906318 }, // #2 //
        { lat: 51.83744663817569,  lng: -9.900147501388021 }, // #3 //
        { lat: 51.758844440963365, lng: -10.091116730629471 }, // #4 //
        { lat: 55.18304735750677, lng: -7.61241954377543 } // #5 //
    ];

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m", });
}

// Modal Js //

$(document).ready(function () {
    $("#myModal").modal('show');
});

// Ranked Number 1 C&C location Lakeside //

function myFunction1() {
    $("#image-change img").removeClass("opaque");
    $("#image-change img").eq(1).addClass("opaque");
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: {
            lat: 52.9277403958966, 
            lng: -8.420661941089131
        }
    });

    var locations = [
        { lat: 52.9277403958966, lng: -8.420661941089131 } // #1 //
    ];

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: "Lakeside C&C Park"
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m", });
    var elem = document.getElementById("change-text");
    elem.classList.remove('show_yourself');
    elem.classList.add('hide');
    elem.classList.add('hide1');
    setTimeout(() => { elem.innerHTML = "Lakeside Caravan & Camping"; elem.classList.remove('hide1'); elem.classList.add('show_yourself');}, 1 * 1000);   
}

// Ranked Number 2 C&C location Glen of Aherlow //

function myFunction2() {
    $("#image-change img").removeClass("opaque");
    $("#image-change img").eq(2).addClass("opaque");
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: {
            lat: 52.419866625338784, 
            lng: -8.187759105906318
        }
    });

    var locations = [
        { lat: 52.419866625338784, lng: -8.187759105906318 }, // #2 //
    ];

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: "Glen of Aherlow C&C Park"
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m", });
    var elem = document.getElementById("change-text");
    elem.classList.remove('show_yourself');
    elem.classList.add('hide');
    elem.classList.add('hide1');
    setTimeout(() => { elem.innerHTML = "The Glen of Aherlow Camping"; elem.classList.remove('hide1'); elem.classList.add('show_yourself');}, 1 * 1000); 
}

// Ranked Number 3 C&C location Goosey Island //

function myFunction3() {
    $("#image-change img").removeClass("opaque");
    $("#image-change img").eq(3).addClass("opaque");
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: {
            lat: 51.83744663817569, 
            lng: -9.900147501388021
        }
    });

    var locations = [
        { lat: 51.83744663817569,  lng: -9.900147501388021 }, // #3 //
    ];

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: "Goosey Island C&C Park"
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m", });
    var elem = document.getElementById("change-text");
    elem.classList.remove('show_yourself');
    elem.classList.add('hide');
    elem.classList.add('hide1');
    setTimeout(() => { elem.innerHTML = "Goosey Isle Caravan & Camping"; elem.classList.remove('hide1'); elem.classList.add('show_yourself');}, 1 * 1000); 
}

// Ranked Number 4 C&C location Wavecrest //

function myFunction4() {
    $("#image-change img").removeClass("opaque");
    $("#image-change img").eq(4).addClass("opaque");
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: {
            lat: 51.758844440963365, 
            lng: -10.091116730629471
        }
    });

    var locations = [
        { lat: 51.758844440963365, lng: -10.091116730629471 }, // #4 //
    ];

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: "Wave Crest C&C Park"
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m", });
    var elem = document.getElementById("change-text");
    elem.classList.remove('show_yourself');
    elem.classList.add('hide');
    elem.classList.add('hide1');
    setTimeout(() => { elem.innerHTML = "Wavecrest Caravan & Camping"; elem.classList.remove('hide1'); elem.classList.add('show_yourself');}, 1 * 1000); 
}

// Ranked Number 5 C&C location Knockalla //

function myFunction5() {
    $("#image-change img").removeClass("opaque");
    $("#image-change img").eq(5).addClass("opaque");
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: {
            lat: 55.18304735750677, 
            lng: -7.61241954377543
        }
    });

    var locations = [
        { lat: 55.18304735750677, lng: -7.61241954377543 } // #5 //
    ];

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: "Knockalla C&C Park"
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m", });
    var elem = document.getElementById("change-text");
    elem.classList.remove('show_yourself');
    elem.classList.add('hide');
    elem.classList.add('hide1');
    setTimeout(() => { elem.innerHTML = "Knockalla Caravan & Camping"; elem.classList.remove('hide1'); elem.classList.add('show_yourself');}, 1 * 1000); 
}
