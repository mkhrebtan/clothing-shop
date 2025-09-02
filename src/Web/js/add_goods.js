const xs_check = document.getElementById('xs-check');
const xs_button = document.getElementById('xs-button');

const s_check = document.getElementById('s-check');
const s_button = document.getElementById('s-button');

const m_check = document.getElementById('m-check');
const m_button = document.getElementById('m-button');

const l_check = document.getElementById('l-check');
const l_button = document.getElementById('l-button');

const xl_check = document.getElementById('xl-check');
const xl_button = document.getElementById('xl-button');

const xxl_check = document.getElementById('xxl-check');
const xxl_button = document.getElementById('xxl-button');

const xxxl_check = document.getElementById('xxxl-check');
const xxxl_button = document.getElementById('xxxl-button');

let activexs = false;
let actives = false;
let activem = false;
let activel = false;
let activexl = false;
let activexxl = false;
let activexxxl = false;

xs_button.addEventListener("click", function () {
    if (!activexs) {
        xs_check.style.visibility = "visible";
        xs_button.style.backgroundColor = "black";
        xs_button.style.color = "white";
        xs_button.style.borderRadius = "8px";
    } else {
        xs_check.style.visibility = "hidden";
        xs_button.style.backgroundColor = "white";
        xs_button.style.color = "black";
        xs_button.style.border = "none";
    }
    activexs = !activexs;
});

s_button.addEventListener("click", function () {
    if (!actives) {
        s_check.style.visibility = "visible";
        s_button.style.backgroundColor = "black";
        s_button.style.color = "white";
        s_button.style.borderRadius = "8px";
    } else {
        s_check.style.visibility = "hidden";
        s_button.style.backgroundColor = "white";
        s_button.style.color = "black";
        s_button.style.border = "none";
    }
    actives = !actives;
});

m_button.addEventListener("click", function () {
    if (!activem) {
        m_check.style.visibility = "visible";
        m_button.style.backgroundColor = "black";
        m_button.style.color = "white";
        m_button.style.borderRadius = "8px";
    } else {
        m_check.style.visibility = "hidden";
        m_button.style.backgroundColor = "white";
        m_button.style.color = "black";
        m_button.style.border = "none";
    }
    activem = !activem;
});

l_button.addEventListener("click", function () {
    if (!activel) {
        l_check.style.visibility = "visible";
        l_button.style.backgroundColor = "black";
        l_button.style.color = "white";
        l_button.style.borderRadius = "8px";
    } else {
        l_check.style.visibility = "hidden";
        l_button.style.backgroundColor = "white";
        l_button.style.color = "black";
        l_button.style.border = "none";
    }
    activel = !activel;
});

xl_button.addEventListener("click", function () {
    if (!activexl) {
        xl_check.style.visibility = "visible";
        xl_button.style.backgroundColor = "black";
        xl_button.style.color = "white";
        xl_button.style.borderRadius = "8px";
    } else {
        xl_check.style.visibility = "hidden";
        xl_button.style.backgroundColor = "white";
        xl_button.style.color = "black";
        xl_button.style.border = "none";
    }
    activexl = !activexl;
});

xxl_button.addEventListener("click", function () {
    if (!activexxl) {
        xxl_check.style.visibility = "visible";
        xxl_button.style.backgroundColor = "black";
        xxl_button.style.color = "white";
        xxl_button.style.borderRadius = "8px";
    } else {
        xxl_check.style.visibility = "hidden";
        xxl_button.style.backgroundColor = "white";
        xxl_button.style.color = "black";
        xxl_button.style.border = "none";
    }
    activexxl = !activexxl;
});

xxxl_button.addEventListener("click", function () {
    if (!activexxxl) {
        xxxl_check.style.visibility = "visible";
        xxxl_button.style.backgroundColor = "black";
        xxxl_button.style.color = "white";
        xxxl_button.style.borderRadius = "8px";
    } else {
        xxxl_check.style.visibility = "hidden";
        xxxl_button.style.backgroundColor = "white";
        xxxl_button.style.color = "black";
        xxxl_button.style.border = "none";
    }
    activexxxl = !activexxxl;
});


const plusBtn = document.getElementById("plus-img");
const fileInput = document.getElementById("file-input");

const smallImgs = [
  document.getElementById("small-img1"),
  document.getElementById("small-img2"),
  document.getElementById("small-img3"),
  document.getElementById("small-img4"),
  document.getElementById("small-img5"),
  document.getElementById("small-img6"),
  document.getElementById("small-img7"),
  document.getElementById("small-img8"),
  document.getElementById("small-img9"),
  document.getElementById("small-img10"),
];

const bigImg = document.getElementById("big-img");
const arrowRight = document.getElementById("arrow-right");
const arrowLeft = document.getElementById("arrow-left");

let images = [];      
let currentIndex = 0; 


plusBtn.addEventListener("click", () => {
  fileInput.click();
});


fileInput.addEventListener("change", (event) => {
  const files = event.target.files;
  if (!files.length) return;

  
  Array.from(files).slice(0, 10).forEach((file, index) => {
    const reader = new FileReader();
    reader.onload = function(e) {
      const url = e.target.result;

      if (images.length < 10) {
        images.push(url); 
        smallImgs[images.length - 1].style.backgroundImage = `url(${url})`;

        
        if (images.length === 1) {
          bigImg.style.backgroundImage = `url(${url})`;
          currentIndex = 0;
        }
      }
    }
    reader.readAsDataURL(file);
  });
});


function showImage(index) {
  if (images.length > 0) {
    bigImg.style.backgroundImage = `url(${images[index]})`;
  }
}


arrowRight.addEventListener("click", () => {
  if (images.length === 0) return;
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

arrowLeft.addEventListener("click", () => {
  if (images.length === 0) return;
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});
