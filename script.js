// Function to display an alert when a button is clicked
function showMessage() {
    alert('Button clicked!');
}

// Adding event listener to the button after DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#myButton');
    if (button) {
        button.addEventListener('click', showMessage);
    }
});
