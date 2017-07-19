var map = null;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -25.363, lng: 131.044},
        zoom: 5
    });
    let marker = new google.maps.Marker({
        position: {lat: -25.363, lng: 131.044},
        map: map,
        title: 'Hello World!'
    });
}
window.initMap = initMap;