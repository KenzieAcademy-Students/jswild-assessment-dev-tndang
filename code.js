// To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"

// Your Code Here.
function userLocation(location) {
    let latitude = location.coords.latitude;
    let longitude = location.coords.longitude;

    document.write(`Latitude: ${latitude} Longitude: ${longitude}`)
}

if (navigator.geolocation) {
    navigator.geolocation.watchPosition(userLocation);
} else {
    document.write(`Sorry we are unable to detect your location... Did you know the Latitude and Longitude of Tokyo, Japan is 35.6762° N, 139.6503° E?`)
}

