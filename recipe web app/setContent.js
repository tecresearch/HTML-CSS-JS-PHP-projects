// Setting the content from JSON

(async function () {
    try {
        // Fetch the JSON data from the file
        const response = await fetch('data.json');

        // Check if the response is ok (status is 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON data
        const data = await response.json();

        // Get the elements by their IDs or class names
        const navId = document.getElementById('navBarId');
        const sideBarId = document.getElementById('sideBarId'); // Corrected to singular 'getElementById'
        const headingClass = document.getElementsByClassName('headingClass');
        const paragraphClass = document.getElementsByClassName('paragraphClass');
        const footerId = document.getElementById('footerId');

        // Set content for nav element
        if (navId) {
            navId.textContent = data.navbar;
        } else {
            console.error("Element with ID 'navBarId' not found.");
        }

        // Set content for sidebar element
        if (sideBarId) {
            sideBarId.textContent = data.sidebar; // Corrected to use 'sideBarId' variable
        } else {
            console.error("Element with ID 'sideBarId' not found.");
        }

        // Set content for heading elements
        if (headingClass.length > 0) {
            for (let i = 0; i < headingClass.length; i++) {
                headingClass[i].textContent = data.main;
            }
        } else {
            console.error("Elements with class 'headingClass' not found.");
        }

        // Set content for paragraph elements
        if (paragraphClass.length > 0) {
            for (let i = 0; i < paragraphClass.length; i++) {
                paragraphClass[i].textContent = data.text;
            }
        } else {
            console.error("Elements with class 'paragraphClass' not found.");
        }

        // Set content for footer element
        if (footerId) {
            footerId.textContent = data.footer;
        } else {
            console.error("Element with ID 'footerId' not found.");
        }

        // Log the data for debugging
        console.log(data);

    } catch (error) {
        // Handle any errors that occur during fetch
        console.error("Error fetching or processing data:", error);
    }
})();
