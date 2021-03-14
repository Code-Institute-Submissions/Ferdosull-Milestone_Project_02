// Modal Js //

function showModal() { // modal loaded from the icon in the footer //
    $("#myModal").modal('show');
}

showModal(); // automatic loading once landed at the website and at refresh //


// Declared Global const campsite object //
const campsites = {
    vwcc: {
        name: 'VWCC Choice Camping',
        description: 'VWCC offers 5 of Irelands finest campsites. Each with its own unique characteristics and atmosphere. Locally, there’s a large range of restaurants too. These locations offer large and luxurious mobile homes or, arrive in your own campervan.',
        coordinates: [53.42830696507892, -7.939229895133652],
        zoom: 10,
        weatherUrls: ['https://www.booked.net/weather/dublin-18082', 'https://w.bookcdn.com/weather/picture/32_18082_1_1_3498db_250_2980b9_ffffff_ffffff_1_2071c9_ffffff_0_6.png?scode=124&domid=w209&anc_id=64575'],
        heroImageSrc: 'assets/images/VWCC1.jpg',
        campsiteDetails: ['', '', '', '', '']
    },
    lakeside: {
        name: 'Lakeside Caravan & Camping',
        description: 'Welcome to Lakeside where you will find a unique campsite on the shores of the beautiful Lough Derg. We welcome you to a place where one can escape the stresses and strains of everyday life. We are a large, nature orientated campsite set in the forest and open green spaces, there is something here for everyone.',
        coordinates: [52.9277403958966, -8.420661941089131],
        zoom: 10,
        weatherUrls: ['https://www.booked.net/weather/limerick-18701', 'https://w.bookcdn.com/weather/picture/32_18701_1_1_3498db_250_2980b9_ffffff_ffffff_1_2071c9_ffffff_0_6.png?scode=124&domid=w209&anc_id=64575'],
        heroImageSrc: 'assets/images/lakeside.jpg',
        campsiteDetails: ['22', '100', '50', '55', '1']
    },
    glenaherlow: {
        name: 'Glen of Aherlow C&C Park',
        description: 'Spectacular scenery, top class amenities and a warm welcome await you here at The Glen of Aherlow Caravan & Camping Park. This Park is situated right in the heart of one of the most picturesque valleys in Ireland. Surrounded by woodland and farmland the Park offers a quiet and relaxing holiday in the countryside.',
        coordinates: [52.419866625338784, -8.187759105906318],
        zoom: 10,
        weatherUrls: ['https://www.booked.net/weather/tipperary-26309', 'https://w.bookcdn.com/weather/picture/32_26309_1_1_3498db_250_2980b9_ffffff_ffffff_1_2071c9_ffffff_0_6.png?scode=124&domid=w209&anc_id=64575'],
        heroImageSrc: 'assets/images/glenaherlow.jpg',
        campsiteDetails: ['20', '95', '50', '25', '5']
    },
    goosey: {
        name: 'Goosey Island C&C Park',
        description: 'Cast a line from the river bank, stroll to the local pubs and Cafes. Explore the Kerry Way and Sneems National Award Winning Sculpture Parks. All from this from Gossey Islands uniquely located Park in the heart of Irelands Tidiest Village (1987). Golf, Fishing, Tennis, Pitch & Putt and Hiking available locally.',
        coordinates: [51.83744663817569, -9.900147501388021],
        zoom: 10,
        weatherUrls: ['https://www.booked.net/weather/county-kerry-47139', 'https://w.bookcdn.com/weather/picture/32_47139_1_1_3498db_250_2980b9_ffffff_ffffff_1_2071c9_ffffff_0_6.png?scode=124&domid=w209&anc_id=64575'],
        heroImageSrc: 'assets/images/goosey.jpg',
        campsiteDetails: ['16', '75', '40', '12', '5']
    },
    wavecrest: {
        name: 'Wave Crest C&C Park',
        description: 'Wave Crest caravan and camping site is a 4 star, friendly, informal and family-run camp site in Caherdaniel on the Ring of Kerry, Ireland. This picturesque waterfront site with unique panoramic sea views offers the perfect base for a relaxing camping holiday in Ireland with friendly and helpful staff.',
        coordinates: [51.758844440963365, -10.091116730629471],
        zoom: 10,
        weatherUrls: ['https://www.booked.net/weather/county-kerry-47139', 'https://w.bookcdn.com/weather/picture/32_47139_1_1_3498db_250_2980b9_ffffff_ffffff_1_2071c9_ffffff_0_6.png?scode=124&domid=w209&anc_id=64575'],
        heroImageSrc: 'assets/images/wavecrest.jpg',
        campsiteDetails: ['15', '70', '40', '35', '10']
    },
    knockalla: {
        name: 'Knockalla C&C Park',
        description: 'Nestled between the slopes of the Knockalla Mountains and the golden sands of Ballymastocker Bay in Portsalon, Co. Donegal, Knockalla Caravan & Camping Park is the perfect location to escape to. Soak up the stunning Knockalla landscape and feel the sand beneath your feet. Donegal has so much to offer.',
        coordinates: [55.18304735750677, -7.61241954377543],
        zoom: 10,
        weatherUrls: ['https://www.booked.net/weather/county-donegal-47201', 'https://w.bookcdn.com/weather/picture/32_47201_1_1_3498db_250_2980b9_ffffff_ffffff_1_2071c9_ffffff_0_6.png?scode=124&domid=w209&anc_id=64575'],
        heroImageSrc: 'assets/images/knockalla.jpg',
        campsiteDetails: ['18', '85', '45', '22', '1']
    },
}

// Declaring "null" ariables to be updated on button clicks //
var name; var latitude; var longitude; var zoomSize; var newHeroImage; var newWeather1; var newWeather2; var newAboutTxt;
var fadeEffect; var buttonIndex = 0; var dayRateP; var weekRateP; var weekendRateP; var pitchQuantity; var advancedNotice;

function initMod(buttonNum) { // using button clicks and respective numbers to update the function from the object //
    return (name = Object.keys(campsites).map((key) => campsites[key]['name'])[buttonNum],
        latitude = Object.keys(campsites).map((key) => campsites[key]['coordinates'])[buttonNum][0],
        longitude = Object.keys(campsites).map((key) => campsites[key]['coordinates'])[buttonNum][1],
        zoomSize = Object.keys(campsites).map((key) => campsites[key]['zoom'])[buttonNum],
        newHeroImage = Object.keys(campsites).map((key) => campsites[key]['heroImageSrc'])[buttonNum],
        newWeather1 = Object.keys(campsites).map((key) => campsites[key]['weatherUrls'])[buttonNum][0],
        newWeather2 = Object.keys(campsites).map((key) => campsites[key]['weatherUrls'])[buttonNum][1],
        newAboutTxt = Object.keys(campsites).map((key) => campsites[key]['description'])[buttonNum],
        dayRateP = Object.keys(campsites).map((key) => campsites[key]['campsiteDetails'])[buttonNum][0],
        weekRateP = Object.keys(campsites).map((key) => campsites[key]['campsiteDetails'])[buttonNum][1],
        weekendRateP = Object.keys(campsites).map((key) => campsites[key]['campsiteDetails'])[buttonNum][2],
        pitchQuantity = Object.keys(campsites).map((key) => campsites[key]['campsiteDetails'])[buttonNum][3],
        advancedNotice = Object.keys(campsites).map((key) => campsites[key]['campsiteDetails'])[buttonNum][4],
        buttonIndex = (buttonNum)),
        executeAll();
}

// Map and Scroll direction decide function //

function mapScrollDecide() {
    console.log(buttonIndex);
    if (buttonIndex == 0) {
        initMap(),
            scrollToAbout();
    } else {
        setMap();
    }
}

// Initial Loading of the GoogleMaps API Visuals and locations //
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6.0,
        center: { lat: 53.42830696507892, lng: -7.939229895133652 }
    });
    var labels = "ABCDE";
    var locations = [
        { lat: 52.9277403958966, lng: -8.420661941089131 }, // #1 //
        { lat: 52.419866625338784, lng: -8.187759105906318 }, // #2 //
        { lat: 51.83744663817569, lng: -9.900147501388021 }, // #3 //
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

// Set Map from buttons //
function setMap() { // function to change the map locations, name of location, coordinates and zoom value //
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: zoomSize,
        center: { lat: latitude, lng: longitude }
    });
    var labels = name;
    var locations = [
        { lat: latitude, lng: longitude }
    ];
    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels
        });
    });
    var markerCluster = new MarkerClusterer(map, markers, { imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m", });
}

// Change Hero Image with JS//
function changeHeroImage() { // function to change the background image at the top of the page //
    var heroDiv = document.getElementById("image-change"); // find the image by id //
    var heroImage = document.getElementById("heroImage");
    $('#image-change').addClass("hide")
    setTimeout(() => { $('#image-change').addClass("hide1") }, 1 * 450);
    setTimeout(() => { heroImage.src = newHeroImage }, 1 * 580);
    setTimeout(() => { $('#image-change').removeClass("hide"), $('#image-change').removeClass("hide1"), $('#image-change').addClass("show_yourself") }, 1 * 650);
    setTimeout(() => { $('#image-change').removeClass("show_yourself") }, 1 * 1200);
}

// Scroll back to top of page //
function scrollTop() { // this function ensures that the person viewing the page is brought back to the top to see the image change //
    setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, 1 * 1000);
}

// scroll to About Us Section //
function scrollToAbout() {
    setTimeout(() => { document.querySelector('#scroll1').scrollIntoView({ behavior: 'smooth' }); }, 1 * 1000);
}

// Weather set with JS //
function weatherSet() { // changing the weather status and location based on location //
    var image = document.getElementById("weather1");
    image.setAttribute("href", newWeather1); // changing the name and weather locality //
    var link = document.getElementById("weather2");
    link.setAttribute("src", newWeather2); // changing the images to suite the weather locality //
}

// Change Hero Image text //
function changeHeroImageText() {
    var heroText = document.getElementById("change-text"); // getting the header by id //
    heroText.classList.remove('show_yourself'); // removing the show yourself class //
    heroText.classList.add('hide'); // hiding the header element with opacity transition //
    heroText.classList.add('hide1'); // adding the opacity 0 !important //
    setTimeout(() => { heroText.innerHTML = name; heroText.classList.remove('hide1'); heroText.classList.add('show_yourself'); }, 1 * 1000); // setting a time interval before changing to the new header text //
}

// Change About Text //
function changeAboutText() {
    var newText = document.getElementById("change-text2"); // getting the about us text by id //
    newText.classList.remove('show_yourself'); // removing the show yourself class //
    newText.classList.add('hide'); // hiding the about us text with opacity transition //
    newText.classList.add('hide1'); // adding the opacity 0 !important //
    setTimeout(() => { newText.innerHTML = newAboutTxt; newText.classList.remove('hide1'); newText.classList.add('show_yourself'); }, 1 * 1000); // setting a time interval before changing to the new header text //
}

// Change Site Specific Info text //
function changeSSInfoText(a, b) {
    var heroText = document.getElementById(a); // getting the header by id //
    //heroText.classList.remove('show_yourself'); // removing the show yourself class //
    //heroText.classList.add('hide'); // hiding the header element with opacity transition //
    //heroText.classList.add('hide1'); // adding the opacity 0 !important //
    //setTimeout(() => { heroText.innerHTML = b; heroText.classList.remove('hide1'); heroText.classList.add('show_yourself'); }, 1 * 1000); // setting a time interval before changing to the new header text //
    heroText.innerHTML = b;
}

function executeAll() { // executing all functions required to update the page with respect to the button being pressed //
    changeHeroImage(); // changing the hero image //
    mapScrollDecide(); // setting the Map and Scroll direction based on which button is pressed //
    weatherSet(); // setting the weather depending on the new location //
    changeHeroImageText(); // changing the hero image text //
    changeAboutText(); // changing the about us text //
    changeSSInfoText('dayRates', dayRateP);
    changeSSInfoText('wkndRates', weekRateP);
    changeSSInfoText('weekRates', weekendRateP);
    changeSSInfoText('pQuant', pitchQuantity);
    changeSSInfoText('avanNotP', advancedNotice);
}
