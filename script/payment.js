let paymentbody = document.querySelector("#paymentbody");
let table = document.querySelector("table");
let paymentBottomPartDiv = document.querySelector("#paymentBottomPart");
let data = [
  {
    image:
      "https://img.gkbcdn.com/p/2019-07-12/haylou-gt1-tws-earphones-bluetooth-5-0-black-1571987624380._w280_p1_.jpg",
    detail: "Mifo O7 Bluetooth 5.0 Qualcomm QCC3020 TWS Earphones Carbon",
    original: 2034.53,
  },
  {
    image:
      "https://img.gkbcdn.com/p/2021-07-06/2-4g-controller-gamepad-1625560641219._w280_p1_.jpg",
    detail: "Mifo O7 Bluetooth 5.0 Qualcomm QCC3020 TWS Earphones Carbon",
    original: 1012.53,
  },
];

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

  //   let subtotalDiv = document.createElement("div");
  //   subtotalDiv.setAttribute("id", "subtotalDiv");
  //   let subtotalText = document.createElement("p");
  //   subtotalText.innerText = `Your subtotal: ₹ ${totalPrice}`;
  //   subtotalText.style.color = "#ff4548";
  //   subtotalText.setAttribute("id", "subtotalText");
  //   subtotalDiv.append(subtotalText);
  //   table.after(subtotalDiv);
};

displayCartData(data);
