function navBarToggle() {
  var x = document.getElementById("mobile-navbar");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

$(document).ready(function(){
	$('#nav-icon2').click(function(){
		$(this).toggleClass('open');
	});
});

function navIconRotation() {
  var element = document.getElementById("nav-icon2");
  element.classList.toggle("open");
}
