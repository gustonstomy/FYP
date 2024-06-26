 /*==================Slider Selector=================*/
    const slider = document.querySelectorAll('.slider');
    const sliderBtn = document.querySelectorAll('.slider-btn');
    let currentSlide = 1;
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



// OPEN AND CLOSS CART

const cartAndIcon = document.querySelector('#cart-btn')
const cart = document.querySelector('.cart')
const closeCart = document.querySelector('#cart-close')

cartAndIcon.addEventListener("click", (event) => {
    event.preventDefault();
    cart.classList.add("active");
});

closeCart.addEventListener("click", () => {
    cart.classList.remove("active");
});


//START WHEN THE DOCUMENT IS READY

if (document.readyState == "loading"){
    document.addEventListener('DOMContentLoaded', start);
}else{
    start();
}

//===============START============================
function start(){
    addEvents()
    updateTotal();
}

//===============UPDATE AND RERENDER============================
function update(){
    addEvents()
    updateTotal();
}

//===============ADD EVENTS============================
function addEvents(){
    // REMOVE ITEMS FROM CART
    let cartRemove_btns = document.querySelectorAll(".btn-remove");
    console.log(cartRemove_btns);
    cartRemove_btns.forEach((btn) => {
        btn.addEventListener("click", handle_removeCartItem);
    });

    // CHNANGE ITEM QUANTITY

    let cartQuantity_inputs = document.querySelectorAll('.cart-quantity');
    cartQuantity_inputs.forEach(input => {
        input.addEventListener("change", handle_changeItemQuantity);
    });

// ADD ITEM TO CART
    let addCart_btn = document.querySelectorAll(".cart2");
    addCart_btn.forEach(btn => {
        btn.addEventListener("click", handle_addCartItems);
    });

    //Buy Order
    const buy_btn = document.querySelector(".btn-buy");
    buy_btn.addEventListener("click", handle_buyOrder);
}

// =========HANDLE EVENTS FUNCTIONS===========
let itemsAdded = []
 
function handle_addCartItems(){
    let product = this.parentElement;
    let title = product.querySelector(".main-title").innerHTML;
    let price = product.querySelector(".product-price").innerHTML;
    let imgSrc = product.querySelector(".img-2").src;

   

    let newToAdd = {
        title,
        price,
        imgSrc,
    };

    // handle item aleready exist
    if(itemsAdded.find((el) => el.title == newToAdd.title)){
        alert("This Item Already Exist");
        return;
    }else{
        itemsAdded.push(newToAdd);
    }

    // add products to cart
    let cartBoxElement = cartBoxComponet(title, price, imgSrc); 
    let newNode =  document.createElement("div");
    newNode.innerHTML = cartBoxElement;
    const cartContent = cart.querySelector(".cart-content");
    cartContent.appendChild(newNode);

    update();
}

function handle_removeCartItem (){
    this.parentElement.remove();
    itemsAdded = itemsAdded.filter(
        (el) => 
        el.title != 
        this.parentElement.querySelector(".cart-product-title").innerHTML
        );

    update();
}

function handle_changeItemQuantity(){
    if (isNaN(this.value) || this.value < 1){
        this.value = 1;
    }
    this.value = Math.floor(this.value); // to keep it as an integer

    update();
}

function handle_buyOrder(){
    if (itemsAdded.length <= 0){
        alert("There is No Order to Place Yet! \nPlease Make an Order First.");
        return;
    }
    const cartContent = cart.querySelector(".cart-content");
    cartContent.innerHTML = "";
    alert("Your Order is Placed Successfully :)");
    itemsAdded = [];
    update();
}

// ======UPDATE & RERENDER FUNCTIONS===========
function updateTotal(){
    let cartBoxes = document.querySelectorAll('.cart-box');
    const totalElement = cart.querySelector('.total-price');
    let total = 0;
    cartBoxes.forEach((cartBoxes) => {
        let priceElement = cartBoxes.querySelector(".cart-price");
        let price = parseFloat(priceElement.innerHTML.replace("₵", ""));
        let quantity = cartBoxes.querySelector(".cart-quantity").value;
        total += price * quantity;
    });

    total = total.toFixed(2);
    totalElement.innerHTML = "₵" + total;
};

function cartBoxComponet(title, price, imgSrc){
return`
<div class="cart-content">
            <!-- TEXT-BOX -->
            <div class="cart-box">
                <img src=${imgSrc} alt="#" class="cart-img">
                <div class="detail-box">
                    <div class="cart-product-title">${title}</div>
                    <div class="cart-price">${price}</div>
                    <input type="number" value="1" class="cart-quantity">
                </div>
            <!-- REMOVE CART -->
            <i class="fa-solid fa-trash btn-remove"></i>
        </div>`;

};


/*==========REGISTER AS FUNTIONALITY=========================*/
