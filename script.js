
let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

document.querySelector("#login-btn").onclick = () => {
  document.querySelector(".login-form-container").classList.toggle("active");
};

document.querySelector("#close-login-form").onclick = () => {
  document.querySelector(".login-form-container").classList.remove("active");
};

window.onscroll = () => {
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

window.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

document.querySelector(".home").onmousemove = (e) => {
  document.querySelectorAll(".home-parralax").forEach((elm) => {
    let speed = elm.getAttribute("data-speed");
    let x = (window.innerWidth - e.pageX * speed) / 90;
    let y = (window.innerHeight - e.pageY * speed) / 90;

    elm.style.transform = `translateX(${y}px) translateY(${x}px)`;
  });
};

document.querySelector(".home").onmouseleave = () => {
  document.querySelectorAll(".home-parralax").forEach((elm) => {
    elm.style.transform = `translateX(0px) translateY(0px)`;
  });
};

const form = document.getElementById("carRentalForm");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  // Collect form data
  const formData = new FormData(form);

  // Send a POST request to your API route
  fetch("/api/cars", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Car created successfully:", data);
      // Handle successful response, e.g., display a success message
    })
    .catch((error) => {
      console.error("Error creating car:", error);
      // Handle error, e.g., display an error message
    });
});


