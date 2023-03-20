function navBarToggle() {
  var x = document.getElementById("mobile-navbar");
  var element = document.getElementById("nav-icon2");
  element.classList.toggle("open");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
