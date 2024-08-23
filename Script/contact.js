function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(35.130260680632404, -106.53242464698562),
      zoom:17,
    };    

var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

var marker = new google.maps.Marker({
    position: {lat: 35.130260680632404, lng: -106.53242464698562},
    map: map
});

}

function showPopup(){
  alert("Message sent successfully! We will contact you soon!");
  document.getElementById("contact-form").reset();
}
