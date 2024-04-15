document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("carRentalForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form data
    const formData = new FormData(form);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    // Send form data to your API endpoint
    fetch("http://localhost:3001/api/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataObject),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle API response as needed
        console.log(data);
        alert("Car rental request submitted successfully!");
        // You can redirect the user to another page or perform any other action here
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while submitting the car rental request.");
      });
  });
});
