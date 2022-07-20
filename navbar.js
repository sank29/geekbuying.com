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
  p7.innerText = "sports & Outdoors";

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
