document.addEventListener("DOMContentLoaded", function () {
    const btn1 = document.querySelector("#regis-as-btn1");
    const btn2 = document.querySelector("#regis-as-btn2");
    const btn3 = document.querySelector("#regis-as-btn3");

    btn1.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "farmer-regi.html";
});


    btn2.addEventListener("click", (event) => {
        event.preventDefault();
        window.location.href = "retailer-regi.html";
    });

    btn3.addEventListener("click", (event) => {
        event.preventDefault(); 
        window.location.href = "lab-regi.html";
    });
});
