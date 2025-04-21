document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.querySelector(".btn");

    submitBtn.addEventListener("click", function () {
        const firstName = document.querySelector('input[placeholder="first name"]').value;
        const secondName = document.querySelector('input[placeholder="Second name"]').value;
        const note = document.querySelector('input[placeholder="write a short note.."]').value;

        // Basic validation (optional)
        if (!firstName || !secondName || !note) {
            alert("Please fill in all the fields before submitting.");
            return;
        }

        // Display in console
        console.log("First Name:", firstName);
        console.log("Second Name:", secondName);
        console.log("Note:", note);

        // Simulate form submission
        alert("Thank you for reaching out, " + firstName + "! Your message has been submitted.");

        // Clear form (optional)
        document.querySelector('input[placeholder="first name"]').value = "";
        document.querySelector('input[placeholder="Second name"]').value = "";
        document.querySelector('input[placeholder="write a short note.."]').value = "";
    });
});