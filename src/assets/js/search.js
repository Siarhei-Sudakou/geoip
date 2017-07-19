let map = null;
let latitude = parseFloat(document.currentScript.getAttribute('latitude'));
let longitude = parseFloat(document.currentScript.getAttribute('longitude'));
let accuracy_radius = parseInt(document.currentScript.getAttribute('radius'));
function initMap() {
    let title = document.currentScript.getAttribute('title');

    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: latitude, lng: longitude},
        zoom: 11,
        mapTypeId: 'hybrid',
        disableDefaultUI: true
    });
    let marker = new google.maps.Marker({
        position: {lat: latitude, lng: longitude},
        map: map,
        title: title
    });
    let cityCircle = new google.maps.Circle({
        strokeColor: '#00ff00',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#00ff00',
        fillOpacity: 0.35,
        map: map,
        center: {lat: latitude, lng: longitude},
        radius: accuracy_radius
    });
}
window.initMap = initMap;