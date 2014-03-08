function boom() {
	navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

// onSuccess Callback
// This method accepts a Position object, which contains the
// current GPS coordinates
//
var onSuccess = function(position) {
    var latElement = document.getElementById('lat');
    var lngElement = document.getElementById('lng');

    jQuery.get("http://six-gs.com/tourdedrupal/update-user-ping/" + position.coords.latitude + "/" + position.coords.longitude);	
    latElement.children[0].innerHTML = position.coords.latitude;
    lngElement.children[0].innerHTML = position.coords.longitude;
};

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}


