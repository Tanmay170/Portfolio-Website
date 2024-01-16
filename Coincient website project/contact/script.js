function initMap() {
    var headOfficeLocation = { lat: 37.7749, lng: -122.4194 }; 

    var map = new google.maps.Map(document.getElementById('map'), {
        center: headOfficeLocation,
        zoom: 15
    });

    var marker = new google.maps.Marker({
        position: headOfficeLocation,
        map: map,
        title: 'Head Office'
    });
}

function submitForm() {
    var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    google.script.run.withSuccessHandler(showSuccessMessage).submitForm(formData);
}

function showSuccessMessage(Submitted) {
    alert(Submitted);
}
