let cartTbody = document.querySelector("#cartTbody");
let table = document.querySelector("table");
let cartBottomPartDiv = document.querySelector("#cartBottomPart");
let data = JSON.parse(localStorage.getItem("cart-item"));

// let data = [
//   {
//     image:
//       "https://img.gkbcdn.com/p/2019-07-12/haylou-gt1-tws-earphones-bluetooth-5-0-black-1571987624380._w280_p1_.jpg",
//     detail: "Mifo O7 Bluetooth 5.0 Qualcomm QCC3020 TWS Earphones Carbon",
//     original: 2034.53,
//   },
//   {
//     image:
//       "https://img.gkbcdn.com/p/2021-07-06/2-4g-controller-gamepad-1625560641219._w280_p1_.jpg",
//     detail: "Mifo O7 Bluetooth 5.0 Qualcomm QCC3020 TWS Earphones Carbon",
//     original: 1012.53,
//   },
// ];

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
    minusSpan.innerText = "-";
    minusSpan.setAttribute("class", "minusSpan");
    let quntitySpan = document.createElement("span");
    quntitySpan.innerText = "1";
    quntitySpan.setAttribute("class", "quntitySpan");
    let plusSpan = document.createElement("span");
    plusSpan.innerText = "+";
    plusSpan.setAttribute("class", "plusSpan");
    tdQuntity.append(minusSpan, quntitySpan, plusSpan);

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

    let tdWishList = document.createElement("td");
    tdWishList.innerText = "Delete";

    tr.append(tdDetails, tdPrice, tdQuntity, tdTotalPrice, tdWishList);
    cartTbody.append(tr);
    totalPrice += data.original;
  });

  let subtotalDiv = document.createElement("div");
  subtotalDiv.setAttribute("id", "subtotalDiv");
  let deleteAll = document.createElement("p");
  deleteAll.innerText = "Delete";
  deleteAll.style.color = "red";
  deleteAll.style.cursor = "pointer";
  let subtotalText = document.createElement("p");
  subtotalText.innerText = `Your subtotal: ₹ ${totalPrice}`;
  subtotalText.style.color = "#ff4548";
  subtotalText.setAttribute("id", "subtotalText");
  subtotalDiv.append(deleteAll, subtotalText);
  table.after(subtotalDiv);
};

displayCartData(data);

let quntitySpan = document.querySelectorAll(".quntitySpan");
let minusSpan = document.querySelectorAll(".minusSpan");
let priceSpan = document.querySelectorAll(".price");
let totalPriceSpan = document.querySelectorAll(".totalPrice");

const minusSpanFunctionality = (minusSpan) => {
  minusSpan.forEach((minusSpan, index) => {
    minusSpan.addEventListener("click", (event) => {
      if (quntitySpan[index].innerText > 1) {
        quntitySpan[index].innerText--;
        let multiple = +quntitySpan[index].innerText;
        let unitPrice = +priceSpan[index].innerText;
        totalPriceSpan[index].innerText = multiple * unitPrice;
        subtotalPriceFun(totalPriceSpan);
        displayCartBottomPartDiv(cartBottomPartDiv);
        setData[index].quntity = +quntitySpan[index].innerText;
      }
    });
  });
};
minusSpanFunctionality(minusSpan);

let plusSpan = document.querySelectorAll(".plusSpan");

const plusSpanFunctionality = (plusSpan) => {
  plusSpan.forEach((plusSpan, index) => {
    plusSpan.addEventListener("click", (event) => {
      quntitySpan[index].innerText++;
      let multiple = +quntitySpan[index].innerText;
      let unitPrice = +priceSpan[index].innerText;
      totalPriceSpan[index].innerText = multiple * unitPrice;
      subtotalPriceFun(totalPriceSpan);
      displayCartBottomPartDiv(cartBottomPartDiv);
    });
  });
};
plusSpanFunctionality(plusSpan);

let subtotalText = document.querySelector("#subtotalText");

let totalPrices;
const subtotalPriceFun = (totalPriceSpan) => {
  let price = 0;
  totalPrices = 0;
  totalPriceSpan.forEach((totalPrice) => {
    price += +totalPrice.innerText;
    totalPrices += price;
  });
  subtotalText.innerText = `Your Subtotal: ${totalPrices.toFixed(2)}`;
};
subtotalPriceFun(totalPriceSpan);

// let cartBottomPartDiv = document.querySelector("#cartBottomPart");

let displayCartBottomPartDiv = (cartBottomPartDiv) => {
  cartBottomPartDiv.innerHTML = "";
  let allLastDiv = document.createElement("div");
  let continueShopping = document.createElement("div");
  let continueShoppingPTag = document.createElement("p");
  continueShoppingPTag.innerText = "Continue Shopping";
  continueShopping.append(continueShoppingPTag);

  let totalItems = document.createElement("div");
  let totalItemsCal = data.length;
  let totalItemsPTag = document.createElement("p");
  totalItemsPTag.innerText = `You choose ${totalItemsCal} Item(s)`;
  totalItems.append(totalItemsPTag);

  let totalPrice = document.createElement("div");
  let totalPriceTag = document.createElement("p");
  totalPriceTag.innerText = `Total: ${totalPrices.toFixed(2)}`;
  totalPrice.append(totalPriceTag);

  let payPalDiv = document.createElement("div");
  let payPalButtom = document.createElement("button");
  payPalButtom.setAttribute("id", "payPalButtom");
  payPalButtom.innerText = `Pay with PayPal`;
  payPalDiv.append(payPalButtom);

  let checkoutDiv = document.createElement("div");
  let checkoutButtom = document.createElement("button");
  checkoutButtom.setAttribute("id", "checkoutButtom");
  checkoutButtom.innerText = `Proceed to checkout`;
  checkoutDiv.append(checkoutButtom);

  allLastDiv.append(
    continueShopping,
    totalItems,
    totalPrice,
    payPalDiv,
    checkoutDiv
  );
  cartBottomPartDiv.append(allLastDiv);
};
displayCartBottomPartDiv(cartBottomPartDiv);

///////////////////checkoutButtom

// let checkoutButtom = document.querySelector("#checkoutButtom");

// let setData = JSON.parse(localStorage.getItem("cartData")) || [];

// checkoutButtom.addEventListener("click", (event) => {
//   console.log("click");
//   setData.forEach((data, index) => {
//     console.log(quntitySpan[index].innerText);
//     data.quantity = quntitySpan[index].innerText;
//     localStorage.setItem("cartData", JSON.stringify(setData));
//   });
// });
