let landingSec = document.querySelector(".landing");
let landingUl = document.querySelector(".landing-bullets");
let swapLeft = document.querySelector(".swap-left");
let swapRight = document.querySelector(".swap-right");
let bgImages =["landing-1","landing-2","landing-3","landing-4"];
currentBullet = 0;

let portfolioLis = document.querySelectorAll(".portfolio .shuffle li");
let portfolioBoxs = document.querySelectorAll(".portfolio .box");

let statSection = document.querySelector(".stats");
let statsBoxs = document.querySelectorAll(".stats .number");
started = false ;

let skillSection = document.querySelector(".skills .prog-col");
let spans = document.querySelectorAll(".skills .prog-col span");

let headerlis = document.querySelectorAll('header li a');



// header ul ///////////////////
headerlis.forEach((li) => {
    li.onclick = function() {
        removeActive(headerlis);
        addActive(this);
    }
})

window.addEventListener("scroll", function(){
    if(this.window.scrollY === 0){
        removeActive(headerlis);
        addActive(headerlis[0])
    }
})







//Enabling landing background slider : bullets & Arrows left/right

for (let i=0 ; i<bgImages.length;i++){
    let bullet = document.createElement("li");
    landingUl.appendChild(bullet)
}

let bullets = document.querySelectorAll(".landing-bullets li")

for (let i=0 ; i<bullets.length;i++){
    bullets[currentBullet].classList.add("active");
    bullets[i].onclick = function(){
        removeActive(bullets);
        addActive(bullets[i]);
        currentBullet = i;
        landingSec.style.backgroundImage = `url(images/${bgImages[currentBullet]}.jpg)`;
    }
}

swapLeft.onclick = function(){
    if(currentBullet === 0) currentBullet = bgImages.length;
    currentBullet-=1;
    landingSec.style.backgroundImage = `url(images/${bgImages[currentBullet]}.jpg)`;
    removeActive(bullets);
    addActive(bullets[currentBullet]);
}

swapRight.onclick = function(){
    currentBullet+=1;
    if(currentBullet === bgImages.length) currentBullet = 0;
    landingSec.style.backgroundImage = `url(images/${bgImages[currentBullet]}.jpg)`;
    removeActive(bullets);
    addActive(bullets[currentBullet]);
}


//enhacements for portfolio section 

for (let i=0 ; i<portfolioLis.length;i++){
    portfolioLis[i].onclick = function(){
        removeActive(portfolioLis);
        addActive(this);
        removeActive(portfolioBoxs);
        portfolioBoxs.forEach((box) => {
            if(box.classList.contains(portfolioLis[i].dataset.category)){
                box.classList.add("active");
            }
        })
    }
}


// /////////stats section //////////////
window.addEventListener("scroll", function(){
    if(window.scrollY >= statSection.offsetTop - 150){
        if (!started){
        statsBoxs.forEach((box) => {
            startCount(box);
        })
        started = true;
        }
    }
})



function startCount(el) {
let goal = el.dataset.value;
let count = setInterval(() => {
    el.textContent++
    if (el.textContent == goal) {
    clearInterval(count);
    }
}, 3000 / goal);
}


// ///////// skills section //////////////

window.addEventListener("scroll", function(){
    if (window.scrollY >= skillSection.offsetTop - 150){
        spans.forEach((span) => {
            span.style.width = span.dataset.progress;
        })
    }
})


// ///////////////////// All Functions ////////////////////////////
function addActive(el){
    el.classList.add("active");
}
function removeActive(els){
    els.forEach((el) => el.classList.remove("active")
    )
}