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

paymentPlace = document.querySelector("#paymentPlace");
paymentPlace.addEventListener("click", (event) => {
  alert("Payment Successful");
});
