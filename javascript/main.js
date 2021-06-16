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



