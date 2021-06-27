window.addEventListener("scroll", function () {
  var header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 1);
});

var typed = new Typed('.type', {
  // Waits 1000ms after typing "First"
  strings: ['real value', 'real profit'],
  loop: true,
  typeSpeed: 150
});


$("#plus").click(function () {
  $("#effect").addClass("plus")
});



function myMap() {
  var mapProp = {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  }



