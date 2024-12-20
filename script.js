$(document).ready(function() {
    $('#registrationForm').on('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the form data
        var formData = $(this).serializeArray();
        var responseHtml = '<h3>Form Data Submitted:</h3><ul>';

        // Loop through the form data and create a response string
        $.each(formData, function(index, field) {
            responseHtml += '<li>' + field.name + ': ' + field.value + '</li>';
        });
        responseHtml += '</ul>';

        // Display the response
        $('#response').html(responseHtml); // Display the response from the form
        $('#registrationForm')[0].reset(); // Reset the form
    });
});
