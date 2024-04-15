// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get a reference to the image element
    const imgAllan = document.querySelector('.img-allan');

    // Get a reference to the toggle button
    const toggleButton = document.getElementById('toggle-image');

    // Add a click event listener to the toggle button
    toggleButton.addEventListener('click', function () {
        // Toggle the visibility of the image
        imgAllan.style.display = (imgAllan.style.display === 'none') ? 'block' : 'none';
    });
});

// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get a reference to the additional contact details div
    const additionalContactDetails = document.querySelector('.additional-contact-details');

    // Get a reference to the toggle button
    const toggleButton = document.getElementById('toggle-contact-details');

    // Add a click event listener to the toggle button
    toggleButton.addEventListener('click', function () {
        // Toggle the visibility of the additional contact details
        additionalContactDetails.style.display = (additionalContactDetails.style.display === 'none') ? 'block' : 'none';
    });
});