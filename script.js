let emailWall = document.querySelector(".email");
let contBtn = document.querySelector(".contBtn");
let choisBlocks = document.querySelector(".chois");
let header = document.querySelector("header");
let vector1 = document.querySelector(".vector1");
let vector2 = document.querySelector(".vector2");
let vector3 = document.querySelector(".vector3");
let vector4 = document.querySelector(".vector4");
let workWears = document.querySelector(".workwears");
let sweaters = document.querySelector(".sweaters")
let denim = document.querySelector(".denim-cloth");
let shoes = document.querySelector(".shoes");
let workwearsArrow = document.querySelector(".workwears-arrow");
let sweatersArrow = document.querySelector(".sweaters-arrow");
let denimArrow = document.querySelector(".denim-arrow");
let shoesArrow = document.querySelector(".shoes-arrow");
let denimCloth = document.querySelector(".denim-cloth");
let titBtn1 = document.querySelector(".tit-btn1");
let titBtn2 = document.querySelector(".tit-btn2");
let titBtn3 = document.querySelector(".tit-btn3");
let titBtn4 = document.querySelector(".tit-btn4");
let titBtn5 = document.querySelector(".tit-btn5");
let titBtn6 = document.querySelector(".tit-btn6");
let titBtn7 = document.querySelector(".tit-btn7");
let titBtn8 = document.querySelector(".tit-btn8");
let titBtn9 = document.querySelector(".tit-btn9");
let titBtn10 = document.querySelector(".tit-btn10");
let blockTxt = document.querySelector(".block-text");


let myWallet = document.querySelector(".my-wallet");
let money = document.querySelector(".money");
let cost = document.querySelectorAll(".cost");
let ask = + prompt("Add money") ;



titBtn2.addEventListener("click", () => {
   alert("Not enough money!")
})
titBtn3.addEventListener("click", () => {
   alert("Not enough money!")
})
titBtn4.addEventListener("click", () => {
   alert("Not enough money!")
})
titBtn5.addEventListener("click", () => {
   alert("Not enough money!")
})
titBtn6.addEventListener("click", () => {
   alert("Not enough money!")
})
titBtn7.addEventListener("click", () => {
   alert("Not enough money!")
})
titBtn8.addEventListener("click", () => {
   alert("Not enough money!")
})
titBtn9.addEventListener("click", () => {
   alert("Not enough money!")
})
titBtn10.addEventListener("click", () => {
   alert("Not enough money!")
})

vector1.addEventListener("click", () => {
   choisBlocks.style.display = "none";
   workWears.style.display = "flex";
})
vector2.addEventListener("click", () => {
    choisBlocks.style.display = "none";
    sweaters.style.display = "flex";
 })
 vector3.addEventListener("click", () => {
    choisBlocks.style.display = "none";
    denim.style.display = "flex";
 })
 vector4.addEventListener("click", () => {
    choisBlocks.style.display = "none";
    shoes.style.display = "flex";
 })
 workwearsArrow.addEventListener("click", () => {
    workWears.style.display = "none";
    choisBlocks.style.display = "flex";
 })
 sweatersArrow.addEventListener("click", () => {
   sweaters.style.display = "none";
    choisBlocks.style.display = "flex";
 })
 denimArrow.addEventListener("click", () => {
   denimCloth.style.display = "none";
    choisBlocks.style.display = "flex";
 })
 shoesArrow.addEventListener("click", () => {
    shoes.style.display = "none";
    choisBlocks.style.display = "flex";
 })
 


contBtn.addEventListener("click", () => {

   
   myWallet.style.display = "block";
    choisBlocks.style.display = "flex";
    header.style.display = "none";
})
cost[0].addEventListener("click", ()=> {
   if(ask >= 110) {
      ask = ask - 110;
      money.innerHTML = money;
      alert("congratulation");
   } else {
      alert("Not enough money!");
   }
})