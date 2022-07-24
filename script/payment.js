import navbarFun from "./navbar.js";
import footerFun from "./footer.js";

let paymentbody = document.querySelector("#paymentbody");
let table = document.querySelector("table");
let paymentBottomPartDiv = document.querySelector("#paymentBottomPart");
let data = JSON.parse(localStorage.getItem("cart-item"));

let totalPrice = 0;

const displayCartData = (data) => {
  data.forEach((data) => {
    let tr = document.createElement("tr");
    let tdDetails = document.createElement("td");
    let detailsDiv = document.createElement("div");
    detailsDiv.setAttribute("class", "detailsDiv");
    let img = document.createElement("img");
    img.src = data.image;
    img.setAttribute("class", "cartAppendedImg");
    let details = document.createElement("p");
    details.innerText = `${data.detail}`;
    detailsDiv.append(img, details);
    tdDetails.append(detailsDiv);

    let tdQuntity = document.createElement("td");
    tdQuntity.setAttribute("id", "tdQuntity");
    let minusSpan = document.createElement("span");
    minusSpan.innerText = "x";
    minusSpan.setAttribute("class", "minusSpan");
    let quntitySpan = document.createElement("span");
    quntitySpan.innerText = "1";
    quntitySpan.setAttribute("class", "quntitySpan");

    tdQuntity.append(minusSpan, quntitySpan);

    let tdPrice = document.createElement("td");
    let price = document.createElement("p");
    price.setAttribute("class", "price");
    price.innerHTML = `${data.original}`;
    tdPrice.append(price);

    let tdTotalPrice = document.createElement("td");
    let totalPrice = document.createElement("p");
    totalPrice.setAttribute("class", "totalPrice");
    totalPrice.innerHTML = `${data.original}`;
    tdTotalPrice.append(totalPrice);

    tr.append(tdDetails, tdPrice, tdQuntity, tdTotalPrice);
    paymentbody.append(tr);
    totalPrice += data.original;
  });
};

displayCartData(data);

const paymentPlace = document.querySelector("#paymentPlace");
paymentPlace.addEventListener("click", (event) => {
  alert("Payment Successful");
  window.location.href = "./index.html";
});

// let navbarDiv = document.querySelector("#navbar");
// navbarDiv.innerHTML = navbarFun();

//////////////////////nabar

let navbarDiv = document.querySelector("#navbar");

navbarDiv.innerHTML = navbarFun();

const navbarAllCategories = document.querySelector("#navbarAllCategories");
const navbarMidlePart = document.querySelector("#navbarMidlePart");
let newDiv = document.createElement("div");
let arrOfFlex = [];

navbarAllCategories.addEventListener("click", (event) => {
  newDiv.setAttribute("id", "allCategoriesDropDown");
  newDiv.style.background = "white";
  newDiv.style.position = "absolute";
  newDiv.style.top = "110px";
  newDiv.style.left = "342px";
  newDiv.innerHTML = "";

  let firstSubDiv = document.createElement("div");
  let secondSubDiv = document.createElement("div");

  let p1 = document.createElement("p");
  p1.innerText = "All Categories";

  let p2 = document.createElement("p");
  p2.innerText = "Smart Home & Garden";

  let p3 = document.createElement("p");
  p3.innerText = "Phones & Accessories";

  let p4 = document.createElement("p");
  p4.innerText = "Computers, Tables & Accessories";

  let p5 = document.createElement("p");
  p5.innerText = "Wearable Devices";

  let p6 = document.createElement("p");
  p6.innerText = "Automobiles & Motorcycles";

  //////////////////////////////////////////////////

  let p7 = document.createElement("p");
  p7.innerText = "Sports & Outdoors";

  let p8 = document.createElement("p");
  p8.innerText = "Consumer Electronics";

  let p9 = document.createElement("p");
  p9.innerText = "TV Boxes & mini PCs";

  let p10 = document.createElement("p");
  p10.innerText = "Toys & Hobbies";

  let p11 = document.createElement("p");
  p11.innerText = "Security System";

  let p12 = document.createElement("p");
  p12.innerText = "Fashion";

  firstSubDiv.append(p1, p2, p3, p4, p5, p6);
  secondSubDiv.append(p7, p8, p9, p10, p11, p12);
  newDiv.append(firstSubDiv, secondSubDiv);
  navbarMidlePart.appendChild(newDiv);

  ////////style////////////////
  newDiv.style.display = "flex";
  firstSubDiv.style.marginLeft = "20px";

  secondSubDiv.style.marginLeft = "50px";
  secondSubDiv.style.marginRight = "100px";
  newDiv.style.newDiv;
  newDiv.style.boxShadow = "rgba(0, 0, 0, 0.1) 0px 4px 12px";

  arrOfFlex.push(newDiv.style.display);

  //   if (arrOfFlex.length === 2) {
  //     newDiv.style.display = "none";
  //   }
  arrOfFlex.forEach((flexs, index) => {
    if (index % 2 === 0) {
      newDiv.style.display = "flex";
    } else {
      newDiv.style.display = "none";
    }
  });
});

///// Categories part
let navbarCategories = document.querySelector("#navbarCategories");
let newDivSecond = document.createElement("div");
let arrOfFlexTwo = [];

navbarCategories.addEventListener("click", (event) => {
  let subdiv = document.createElement("div");
  newDivSecond.innerHTML = "";
  newDivSecond.style.position = "absolute";
  newDivSecond.style.top = "153px";
  newDivSecond.style.left = "154px";
  newDivSecond.style.backgroundColor = "white";
  newDivSecond.style.boxShadow = "rgba(0, 0, 0, 0.1) 0px 4px 12px";

  let p1 = document.createElement("p");
  p1.innerText = "Local Warehouses";

  let p2 = document.createElement("p");
  p2.innerText = "Sports & Outdoors";

  let p3 = document.createElement("p");
  p3.innerText = "Smart Homes & Garden";

  let p4 = document.createElement("p");
  p4.innerText = "Consumer Electronics";

  let p5 = document.createElement("p");
  p5.innerText = "TV Boxes & Mini PCs";

  let p6 = document.createElement("p");
  p6.innerText = "Computers, Tablets & Accessories";

  let p7 = document.createElement("p");
  p7.innerText = "Toys & Hobbles";

  let p8 = document.createElement("p");
  p8.innerText = "Phones & Accessories";

  let p9 = document.createElement("p");
  p9.innerText = "Automobiles & Motorcycles";

  let p10 = document.createElement("p");
  p10.innerText = "Wearable Devices";

  let p11 = document.createElement("p");
  p11.innerText = "Security Systems";

  let p12 = document.createElement("p");
  p12.innerText = "Fashion";
  subdiv.append(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12);
  newDivSecond.append(subdiv);
  navbarCategories.appendChild(newDivSecond);
  subdiv.style.marginLeft = "15px";
  subdiv.style.marginRight = "15px";

  arrOfFlexTwo.push(newDivSecond.style.display);

  arrOfFlexTwo.forEach((flexs, index) => {
    if (index % 2 === 0) {
      newDivSecond.style.display = "flex";
    } else {
      newDivSecond.style.display = "none";
    }
  });
});
////////////////////////////////////////////////////////navbar all links

let navbarCart = document.querySelector("#navbarCart");
navbarCart.addEventListener("click", (event) => {
  window.location.href = "./cart.html";
});

let navbarSignIn = document.querySelector("#navbarSignIn");
navbarSignIn.addEventListener("click", (event) => {
  window.location.href = "./signup.html";
});

/////////////////////end of navbar

////////////////////////start of footer

let footerDiv = document.querySelector("#footer");

footerDiv.innerHTML = footerFun();

let footerFirstPartDiv = document.querySelector("#footerFirstPart");
let newDivFooter = document.createElement("div");
let footerPlus = document.querySelector("#footerPlus");

footerFirstPartDiv.addEventListener("click", (event) => {
  newDivFooter.setAttribute("id", "footerDropDown");

  let newDivFooterArr = document.querySelectorAll("#footerDropDown");
  console.log(newDivFooter.style.display);

  // if (newDivFooterArr.length === 1) {
  //   newDivFooter.style.display === "none"
  //     ? (newDivFooter.style.display = "flex")
  //     : (newDivFooter.style.display = "none");
  //   return false;
  // }

  if (newDivFooterArr.length === 1) {
    if (newDivFooter.style.display === "none") {
      newDivFooter.style.display = "flex";
      footerPlus.innerText = "-";
    } else {
      newDivFooter.style.display = "none";
      footerPlus.innerText = "+";
    }
    return false;
  }
  footerPlus.innerText = "-";

  let newSubDivfirst = document.createElement("div");
  let img1 = document.createElement("img");
  img1.src = "./img/percentage.png";

  let p1 = document.createElement("p");
  p1.innerText = "Amazing offers";

  let p2 = document.createElement("p");
  p2.innerText = "Find best offers for smart gadgets at one place.";

  newSubDivfirst.append(img1, p1, p2);

  let newSubDivSecond = document.createElement("div");
  let img2 = document.createElement("img");
  img2.src = "./img/wallet.png";

  let p3 = document.createElement("p");
  p3.innerText = "Easy & secure payments";

  let p4 = document.createElement("p");
  p4.innerText =
    "Pay directly via PayPal or Klarna among other payment options.";

  newSubDivSecond.append(img2, p3, p4);

  let newSubDivThird = document.createElement("div");
  let img3 = document.createElement("img");
  img3.src = "./img/truck.png";

  let p5 = document.createElement("p");
  p5.innerText = "Local stock & fast shipping";

  let p6 = document.createElement("p");
  p6.innerText = "Buy from local stock and ship within 48-hour.";

  newSubDivThird.append(img3, p5, p6);

  let newSubDivFourth = document.createElement("div");
  let img4 = document.createElement("img");
  img4.src = "./img/customer-support.png";

  let p7 = document.createElement("p");
  p7.innerText = "Customer support";

  let p8 = document.createElement("p");
  p8.innerText = "24-hour customer support for all your queries.";

  newSubDivFourth.append(img4, p7, p8);

  newDivFooter.append(
    newSubDivfirst,
    newSubDivSecond,
    newSubDivThird,
    newSubDivFourth
  );

  footerFirstPartDiv.after(newDivFooter);
});
