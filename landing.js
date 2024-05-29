document.addEventListener("DOMContentLoaded", function () {
    /*==================Login and Register Selector=================*/
    const btnlogin1 = document.querySelector("#btnlogin1");
    const btnlogin2 = document.querySelector("#btnlogin2");

    /*==================Slider Selector=================*/
    const slider = document.querySelectorAll('.slider');
    const sliderBtn = document.querySelectorAll('.slider-btn');
    let currentSlide = 1;


     /*=============Login and Register function=====================*/
    btnlogin1.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "login.html";
});


    btnlogin2.addEventListener("click", (event) => {
        event.preventDefault();
        window.location.href = "register-as.html";
    });
 /*====================Slider function===============================*/
    var manualNav = function(manual){
        slider.forEach((slide)=> {
            slide.classList.remove('active');

            sliderBtn.forEach((btn)=> {
            btn.classList.remove('active');
            });
        });
        

        slider[manual].classList.add('active');
        sliderBtn[manual].classList.add('active');
    }

    sliderBtn.forEach((btn, i) => {
        btn.addEventListener("click", ()=>{
            manualNav(i);
            currentSlide = 1;
        });
    });

    var repeat = function(activeClass){
        let active = document.getElementsByClassName('active');
        let i = 1;

        var repeater = ()=>{
            
            setTimeout(function(){
                slider.forEach((slide)=> {
            slide.classList.remove('active');

            sliderBtn.forEach((btn)=> {
            btn.classList.remove('active');
            });
        });
                slider[i].classList.add('active');
                sliderBtn[i].classList.add('active');
                i++;

                if(slider.length == i){
                    i = 0;
                }
                if(i >= slider.length){
                    return;
                }
                repeater();
            }, 3000);
             
        }
        repeater();
    }
    repeat();
});

