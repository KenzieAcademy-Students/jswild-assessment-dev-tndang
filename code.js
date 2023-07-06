// To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"

// Your Code Here.
function userLocation(location) {
    let latitude = location.coords.latitude;
    let longitude = location.coords.longitude;

    document.write(`Latitude: ${latitude} Longitude: ${longitude}`)
}

function constructImageURL (photoObj) {
    return "https://farm" + photoObj.farm +
            ".staticflickr.com/" + photoObj.server +
            "/" + photoObj.id + "_" + photoObj.secret + ".jpg";
}
const imageUrl = constructImageURL(response.photos.photo[0]);

if (navigator.geolocation) {
    navigator.geolocation.watchPosition(userLocation);
} else {
    document.write(`Sorry we are unable to detect your location... Did you know the Latitude and Longitude of Tokyo, Japan is 35.6762° N, 139.6503° E?`)
}

// Constructing the query URL: https://flickr.com/services/rest/?api_key=437662e6f4e7a651726c9ca1aa27b022&format=json&nojsoncallback=1&method=flickr.photos.search&safe_search=1&per_page=5&lat=39.76574&lon=-86.1579024&text=dog


let imageSearchBar = document.getElementById("imageSearchBar");
let searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", () => {
    fetch(`https://api.flickr.com`, () => {
        fetch(`https://flickr.com/services/rest/?api_key=437662e6f4e7a651726c9ca1aa27b022&format=json&nojsoncallback=1&method=flickr.photos.search&safe_search=1&per_page=5&lat=${latitude}&lon=${longitude}.1579024&text=${imageSearchBar.value}`, (response) => {
            return imageUrl;
        })
    }
)
})



