$(document).ready(function() {
    $('#registrationForm').on('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        $.ajax({
            url: 'process.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function(response) {
                $('#response').html(response); // Display the response from the PHP file
                $('#registrationForm')[0].reset(); // Reset the form
            },
            error: function() {
                $('#response').html('<p>An error occurred while processing your request.</p>');
            }
        });
    });
});