// To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"

// Your Code Here.
function userLocation(location) {
    let latitude = location.coords.latitude;
    let longitude = location.coords.longitude;

    document.write(`Latitude: ${latitude} Longitude: ${longitude}`)
}

navigator.geolocation.getCurrentPosition(userLocation);
