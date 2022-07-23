import navbarFun from "./navbar.js";
import footerFun from "./footer.js";
let productData = JSON.parse(localStorage.getItem("newArrival"));

displayData(productData);
function displayData(productData) {
  document.querySelector("#products").innerHTML = "";
  productData.map(function (el, i, arr) {
    let perentDiv = document.createElement("div");
    perentDiv.addEventListener("click", function () {
      detailProductFun(i);
    });

    //Image container-->
    let imgDiv = document.createElement("div");
    imgDiv.style.backgroundImage = "url" + "(" + el.image + ")";
    imgDiv.style.height = "200px";
    imgDiv.style.width = "100%";
    imgDiv.setAttribute("id", "perentImg");

    // let img = document.createElement("img");
    // img.setAttribute("src", el.image_url);
    // img.style.width = "100%";

    let newImg = document.createElement("img");
    newImg.setAttribute(
      "src",
      "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220111"
    );

    newImg.setAttribute("id", "newImg");
    imgDiv.append(newImg);

    // <---Img container ends
    let div = document.createElement("div");
    div.setAttribute("id", "product-details-con");
    let title = document.createElement("p");
    title.innerText = el.name;
    title.setAttribute("id", "title");

    //Price
    let price = document.createElement("p");
    price.setAttribute("id", "price");

    price.innerText = el.price;

    //
    let strikePrice = document.createElement("p");
    strikePrice.setAttribute("id", "sPrice");
    let sPrice = el.strikePrice;
    if (sPrice != undefined) {
      strikePrice.innerText = sPrice;
    } else {
      strikePrice.innerText = "";
    }

    div.append(title, price, strikePrice);

    let wishlishDiv = document.createElement("div");
    wishlishDiv.setAttribute("id", "wishlistCon");

    //icon and free shipping
    let span = document.createElement("span");
    span.innerHTML = "<i class='fa-regular fa-heart'></i>";
    span.setAttribute("id", "icon");

    let freeship = document.createElement("p");
    freeship.innerText = "Free shipping";

    wishlishDiv.append(span, freeship);

    perentDiv.append(imgDiv, imgDiv, div, wishlishDiv);
    // console.log(perentDiv);

    document.querySelector("#products").append(perentDiv);
  });
}

function priceSortFun() {
  var priceSort = document.querySelector("#sortByPrice").value;
  // console.log(priceSort);

  var minprice = document.querySelectorAll(".minmax")[0].value;
  var maxprice = document.querySelectorAll(".minmax")[1].value;
  console.log(minprice, maxprice);
  if (minprice.length > 0 && maxprice.length > 0) {
    if (minprice.length > 0 && maxprice.length == 0) {
      var filterPriceData = productData.filter(function (el) {
        return el.price.substring(1) > Number(minprice);
      });
    } else {
      var filterPriceData = productData.filter(function (el) {
        return (
          el.price.substring(1) < Number(maxprice) &&
          el.price.substring(1) > Number(minprice)
        );
      });
    }
    if (priceSort == "phl") {
      filterPriceData.sort(function (a, b) {
        return b.price.substring(1) - a.price.substring(1);
      });
      displayData(filterPriceData);
    } else if ((priceSort = "plh")) {
      filterPriceData.sort(function (a, b) {
        return a.price.substring(1) - b.price.substring(1);
      });
      displayData(filterPriceData);
    }
  } else {
    if (priceSort == "phl") {
      productData.sort(function (a, b) {
        return b.price.substring(1) - a.price.substring(1);
      });
      displayData(productData);
    } else if ((priceSort = "plh")) {
      productData.sort(function (a, b) {
        return a.price.substring(1) - b.price.substring(1);
      });
      displayData(productData);
    }
  }
}

function sortByName() {
  var minprice = document.querySelectorAll(".minmax")[0].value;
  var maxprice = document.querySelectorAll(".minmax")[1].value;
  if (minprice.length > 0 && maxprice.length > 0) {
    if (minprice.length > 0 && maxprice.length == 0) {
      var filterPriceData = productData.filter(function (el) {
        return el.price.substring(1) > Number(minprice);
      });
    } else {
      var filterPriceData = productData.filter(function (el) {
        return (
          el.price.substring(1) < Number(maxprice) &&
          el.price.substring(1) > Number(minprice)
        );
      });
    }
    filterPriceData.sort((a, b) => {
      let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();
      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    displayData(filterPriceData);
  } else {
    productData.sort((a, b) => {
      let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();
      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    displayData(productData);
  }
}

document
  .querySelector(".minmax+button")
  .addEventListener("click", priceRangeFun);

function priceRangeFun(event) {
  var minprice = document.querySelectorAll(".minmax")[0].value;
  var maxprice = document.querySelectorAll(".minmax")[1].value;
  console.log(typeof minprice, maxprice);
  if (minprice.length > 0 && maxprice.length == 0) {
    var filterPriceData = productData.filter(function (el) {
      return el.price.substring(1) > Number(minprice);
    });
  } else {
    var filterPriceData = productData.filter(function (el) {
      return (
        el.price.substring(1) < Number(maxprice) &&
        el.price.substring(1) > Number(minprice)
      );
    });
  }
  // filterPriceData =filterPriceData1 || filterPriceData2;
  displayData(filterPriceData);
}

function pageReloadFun() {
  window.location.reload();
}

function detailProductFun(index) {
  console.log(productData[index]);
  localStorage.setItem("clickedProduct", JSON.stringify(productData[index]));
  window.location.href = "productpage.html";
}

//----------------------------------Search

// document.querySelector("#searchProduct").addEventListener("keyup", search);

// function search() {
//   let value = document.querySelector("#searchProduct").value;
//   console.log(value);

//   let filterData = productData.filter(function (el) {
//     return el.name.includes(value);
//   });
//   displayData(filterData);
// }

//////////////////////////////navbar

let navbar = document.querySelector("#navbar");
navbar.innerHTML = navbarFun();

let navbarFlag = document.querySelector("#navbarFlag");
navbarFlag.src = "../img/flag.png";

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

//////////////////////////////////////footer
let footer = document.querySelector("#footer");

footer.innerHTML = footerFun();

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
