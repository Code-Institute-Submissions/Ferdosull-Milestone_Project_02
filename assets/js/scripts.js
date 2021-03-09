// Declared Global Text Variables //

var vwcc = "VWCC offers 5 of Irelands finest campsites. Each with its own unique characteristics and atmosphere. Locally, there’s a large range of restaurants too. These locations offer large and luxurious mobile homes or, arrive in your own campervan.";
var lakeside = "Welcome to Lakeside where you will find a unique campsite on the shores of the beautiful Lough Derg. We welcome you to a place where one can escape the stresses and strains of everyday life. We are a large, nature orientated campsite set in the forest and open green spaces, there is something here for everyone.";
var glenaherlow = "Spectacular scenery, top class amenities and a warm welcome await you here at The Glen of Aherlow Caravan & Camping Park. This Park is situated right in the heart of one of the most picturesque valleys in Ireland. Surrounded by woodland and farmland the Park offers a quiet and relaxing holiday in the countryside.";
var goosey = "Cast a line from the river bank, stroll to the local pubs and Cafes. Explore the Kerry Way and Sneem's National Award Winning Sculpture Parks. All from this from Gossey Islands uniquely located Park in the heart of Irelands Tidiest Village (1987). Golf, Fishing, Tennis, Pitch & Putt and Hiking available locally.";
var wavecrest = "Wave Crest caravan and camping site is a 4 star, friendly, informal and family-run camp site in Caherdaniel on the Ring of Kerry, Ireland. This picturesque waterfront site with unique panoramic sea views offers the perfect base for a relaxing camping holiday in Ireland with friendly and helpful staff.";
var knockalla = "Nestled between the slopes of the Knockalla Mountains and the golden sands of Ballymastocker Bay in Portsalon, Co. Donegal, Knockalla Caravan & Camping Park is the perfect location to escape to. Soak up the stunning Knockalla landscape and feel the sand beneath your feet. Donegal has so much to offer.";
 
// Declared Global JSON Array for individual site information //

var sitesObj = "";

sitesObj = {"dayrate": [ "€22 per night", "€20 per night", "€16 per night", "€15 per night", "€18 per night" ] },
    { "weekdayrate": ["€100 per week", "€95 per week", "€75 per week", "€70 per week", "€85 per week" ] },
    { "weekendrate": ["€50 Sat & Sun", "€50 Sat & Sun", "€40 Sat & Sun", "€40 Sat & Sun", "€45 Sat & Sun" ] },
    { "capacity": [ "55 Pitches", "25 Pitches", "12 Pitches", "35 Pitches", "22 Pitches" ] },
    { "advannot": [ "1 day", "1 week", "1 week", "2 week", "1 day" ] };

// Declared Global Weather links to be swapped out by js //

var donegalWeather1 = "https://www.booked.net/weather/donegal-town-19234";
var donegalWeather2 = "https://w.bookcdn.com/weather/picture/32_19234_1_1_3498db_250_2980b9_ffffff_ffffff_1_2071c9_ffffff_0_6.png?scode=124&domid=w209&anc_id=31365";

// Loading of the GoogleMaps API Visuals and locations //

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

    var text = document.getElementById("change-text2");
    text.classList.remove('show_yourself');
    text.classList.add('hide');
    text.classList.add('hide1');
    setTimeout(() => { text.innerHTML = lakeside; text.classList.remove('hide1'); text.classList.add('show_yourself');}, 1 * 1000);
    
    setTimeout(() => { window.scrollTo({top: 0, behavior: 'smooth'});},1 * 800);

    var image = document.getElementById("weather1");
    image.setAttribute("href", donegalWeather1);

    var link = document.getElementById("weather2");
    link.setAttribute("src", donegalWeather2);

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
    
    var text = document.getElementById("change-text2");
    text.classList.remove('show_yourself');
    text.classList.add('hide');
    text.classList.add('hide1');
    setTimeout(() => { text.innerHTML = glenaherlow; text.classList.remove('hide1'); text.classList.add('show_yourself');}, 1 * 1000);
    
    setTimeout(() => { window.scrollTo({top: 0, behavior: 'smooth'});},1 * 800);
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
    
    var text = document.getElementById("change-text2");
    text.classList.remove('show_yourself');
    text.classList.add('hide');
    text.classList.add('hide1');
    setTimeout(() => { text.innerHTML = goosey; text.classList.remove('hide1'); text.classList.add('show_yourself');}, 1 * 1000);
    
    setTimeout(() => { window.scrollTo({top: 0, behavior: 'smooth'});},1 * 800);
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
    
    var text = document.getElementById("change-text2");
    text.classList.remove('show_yourself');
    text.classList.add('hide');
    text.classList.add('hide1');
    setTimeout(() => { text.innerHTML = wavecrest; text.classList.remove('hide1'); text.classList.add('show_yourself');}, 1 * 1000);
    
    setTimeout(() => { window.scrollTo({top: 0, behavior: 'smooth'});},1 * 800);
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
    
    var text = document.getElementById("change-text2");
    text.classList.remove('show_yourself');
    text.classList.add('hide');
    text.classList.add('hide1');
    setTimeout(() => { text.innerHTML = knockalla; text.classList.remove('hide1'); text.classList.add('show_yourself');}, 1 * 1000);
    
    setTimeout(() => { window.scrollTo({top: 0, behavior: 'smooth'});},1 * 800);
}
