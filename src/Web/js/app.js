const button_bars = document.getElementById("button-bars");
const sex_active = document.getElementById("sex-active");
const sex_pass = document.getElementById("sex");


button_bars.addEventListener("click", function(){
    sex_pass.style.visibility = "hidden";
    sex_active.style.visibility = "visible";
});


const button_bars_vert = document.getElementById("button-bars-vert");

button_bars_vert.addEventListener("click", function(){
    sex_pass.style.visibility = "visible";
    sex_active.style.visibility = "hidden";
});

const bag_shopping_button = document.getElementsByClassName("bag-shopping")[0];
const bag_container = document.getElementsByClassName("bag-container") [0];

bag_shopping_button.addEventListener("click", function(){
    bag_container.style.visibility = "visible";
});

const xmark_button = document.getElementById("xmark-button");

xmark_button.addEventListener("click", function(){
    bag_container.style.visibility = "hidden";
});

const minus_button1 = document.getElementsByClassName("minus-button")[0];
const plus_button1 = document.getElementsByClassName("plus-button")[0];
const quantity = document.getElementsByClassName("quantity")[0];

plus_button1.addEventListener("click", function(){
    let currentQuantity = parseInt(quantity.innerText);
    quantity.innerText = currentQuantity + 1;  
});

minus_button1.addEventListener("click", function(){
    let currentQuantity = parseInt(quantity.innerText);
    if (currentQuantity > 0) {
        quantity.innerText = currentQuantity - 1;
    }
});

const minus_button2 = document.getElementsByClassName("minus-button")[1];
const plus_button2 = document.getElementsByClassName("plus-button")[1];
const quantity2 = document.getElementsByClassName("quantity")[1];

plus_button2.addEventListener("click", function(){
    let currentQuantity2 = parseInt(quantity2.innerText);
    quantity2.innerText = currentQuantity2 + 1;
});

minus_button2.addEventListener("click", function(){
    let currentQuantity2 = parseInt(quantity2.innerText);
    if (currentQuantity2 > 0) {
        quantity2.innerText = currentQuantity2 - 1;
    }
});
