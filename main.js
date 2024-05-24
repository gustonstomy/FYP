document.addEventListener("DOMContentLoaded", function () {
    const btn1 = document.querySelector("#regis-as-btn1");
    const btn2 = document.querySelector("#regis-as-btn2");
    const btn3 = document.querySelector("#regis-as-btn3");

    btn1.addEventListener("click", (event) => {
    console.log("Button 1 clicked"); // Check if this message appears in the console
    event.preventDefault();
    window.location.href = "farmer-regi.html";
});


    btn2.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent form submission
        window.location.href = "retailer-regi.html";
    });

    btn3.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent form submission
        window.location.href = "lab-regi.html";
    });
});
