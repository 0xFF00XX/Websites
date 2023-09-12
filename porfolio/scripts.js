// Add active class to the clicked menu item
var navbar = document.getElementById("navbar");
var navItems = navbar.getElementsByTagName("a");

for (var i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
