const worldOffices = {
    "London": [51.510165, -0, 135173],
    "New York": [40.760375, -73.972754],
    "Paris": [48.873327, 2.297117],
    "Moscow": [55.769469, 37.597066],
    "Singapore": [1.301155, 103.854528],
}

google.maps.event.addDomListener(window, 'load', init);

function init() {
    var mapOptions = {
        zoom: 3,
        center: new google.maps.LatLng(30, 20),
        styles: [{ "featureType": "all", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }] }, { "featureType": "administrative", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] }, { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#686868" }, { "visibility": "on" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.park", "elementType": "all", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.park", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "lightness": "-22" }, { "visibility": "on" }, { "color": "#b4b4b4" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "saturation": "-51" }, { "lightness": "11" }] }, { "featureType": "road.highway", "elementType": "labels.text", "stylers": [{ "saturation": "3" }, { "lightness": "-56" }, { "visibility": "simplified" }] }, { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{ "lightness": "-52" }, { "color": "#9094a0" }, { "visibility": "simplified" }] }, { "featureType": "road.highway", "elementType": "labels.text.stroke", "stylers": [{ "weight": "6.13" }] }, { "featureType": "road.highway", "elementType": "labels.icon", "stylers": [{ "weight": "1.24" }, { "saturation": "-100" }, { "lightness": "-10" }, { "gamma": "0.94" }, { "visibility": "off" }] }, { "featureType": "road.highway.controlled_access", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#b4b4b4" }, { "weight": "5.40" }, { "lightness": "7" }] }, { "featureType": "road.highway.controlled_access", "elementType": "labels.text", "stylers": [{ "visibility": "simplified" }, { "color": "#231f1f" }] }, { "featureType": "road.highway.controlled_access", "elementType": "labels.text.fill", "stylers": [{ "visibility": "simplified" }, { "color": "#595151" }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "lightness": "-16" }] }, { "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#d7d7d7" }] }, { "featureType": "road.arterial", "elementType": "labels.text", "stylers": [{ "color": "#282626" }, { "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "labels.text.fill", "stylers": [{ "saturation": "-41" }, { "lightness": "-41" }, { "color": "#2a4592" }, { "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "labels.text.stroke", "stylers": [{ "weight": "1.10" }, { "color": "#ffffff" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "on" }] }, { "featureType": "road.local", "elementType": "geometry.fill", "stylers": [{ "lightness": "-16" }, { "weight": "0.72" }] }, { "featureType": "road.local", "elementType": "labels.text.fill", "stylers": [{ "lightness": "-37" }, { "color": "#2a4592" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit.line", "elementType": "geometry.fill", "stylers": [{ "visibility": "off" }, { "color": "#eeed6a" }] }, { "featureType": "transit.line", "elementType": "geometry.stroke", "stylers": [{ "visibility": "off" }, { "color": "#0a0808" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#b7e4f4" }, { "visibility": "on" }] }]
    };
    var mapElement = document.getElementById('map-canvas');

    var map = new google.maps.Map(mapElement, mapOptions);

    var markerImage = new google.maps.MarkerImage(
        'images/iconMarker.png',
        new google.maps.Size(50, 50),
        new google.maps.Point(0, 0)
    );

    var dragImage = new google.maps.MarkerImage(
        'images/iconDrag.png',
        new google.maps.Size(50, 50),
        new google.maps.Point(0, 0)
    );

    var markerImageHover = new google.maps.MarkerImage(
        'images/iconMarker.png',
        new google.maps.Size(50, 60),
        new google.maps.Point(0, 0)
    );

    var markers = [];

    for (let i in worldOffices) {
        markers.push(new google.maps.Marker({
            position: new google.maps.LatLng(worldOffices[i][0], worldOffices[i][1]),
            map: map,
            title: i,
            icon: markerImage,
            optimized: false
        }));
    }

    let dragMarker = new google.maps.Marker({
        position: new google.maps.LatLng(34, -41),
        map: map,
        title: "The Next Parallax Global Office",
        icon: dragImage,
        optimized: false,
        draggable: true,
    });
}