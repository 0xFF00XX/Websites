
$(document).ready(function() {
  var dropdown = $('.drop');
  var caret = $('.caret');

  // Toggle the dropdown and rotate caret on click
  dropdown.click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    dropdown.toggleClass('expanded');
  });



  // Close the dropdown when clicking outside of it
  $(document).click(function() {
    dropdown.removeClass('expanded');
  });

  $('#form').submit(function (d) {
           d.preventDefault(); // Prevent the default form submission

           // Get the selected option value
           var selectedOption = $('#select-option').val();

           // Make an AJAX request to the server
           $.ajax({
               type: 'POST',
               url: '/',
               data: { select: selectedOption }, // Send the selected option as data
               success: function (data) {
                   // Handle the response from the server
                   $('#res').text(data); // Display the result on the page
               }
           });
       });
});
