

/*Default Page logos */
let img1 = document.createElement('img');
img1.src = "https://img.gkbcdn.com/s3/b/eleglide.jpg";

let img2 = document.createElement('img');
img2.src = "https://img.gkbcdn.com/s3/b/Logo/roborock.jpg";

let img3 = document.createElement('img');
img3.src = "https://img.gkbcdn.com/s3/b/Logo/Viomi.jpg";

let img4 = document.createElement('img');
img4.src = "https://img.gkbcdn.com/s3/b/2006/fiido.jpg";

let img5 = document.createElement('img');
img5.src = "https://img.gkbcdn.com/s3/b/Logo/tronsmart.jpg";

let img6 = document.createElement('img');
img6.src = "https://img.gkbcdn.com/s3/b/Logo/one-netbook.jpg";

let img7 = document.createElement('img');
img7.src = "https://img.gkbcdn.com/s3/b/ado.jpg";

let img8 = document.createElement('img');
img8.src = "https://img.gkbcdn.com/s3/b/Logo/himo.jpg";
img8.setAttribute('id', 'mouse');

let img9 = document.createElement('img');
img9.src = "https://img.gkbcdn.com/s3/b/Logo/jimmy.jpg";

let img10 = document.createElement('img');
img10.src = "https://img.gkbcdn.com/s3/b/artillery.jpg";

let img11 = document.createElement('img');
img11.src = "https://img.gkbcdn.com/s3/b/proscenic-6HykTHuh.jpg";

let img12 = document.createElement('img');
img12.src = "https://img.gkbcdn.com/s3/b/bezior.jpg";

let img13 = document.createElement('img');
img13.src = "https://img.gkbcdn.com/s3/b/engwe.jpg";

let img14 = document.createElement('img');
img14.src = "https://img.gkbcdn.com/s3/b/kugookirin-6TbAI6pr.jpg";

document.getElementById('sorting_result').append(img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14);

/*---------------------A to Z data----------------------*/
import { default_data, a_data, b_data, c_data, d_data, e_data, other_data,featured_brands} from "./export.js";

let result = document.getElementById('sorting_result');

// onMouseOver Function..
result.addEventListener('mouseover', mouseOver);

function mouseOver() {

}

// OnMouseOut Function..
result.addEventListener('mouseover', mouseOut);
function mouseOut() {

}

/*------------------Default Sorting part-----------------*/

document.getElementById('hot').addEventListener("click", defaultStyle);

function defaultStyle() {
    result.innerHTML = null
    result.innerHTML = default_data
}
let a = document.getElementById('a');
a.addEventListener("click", a_sort);
function a_sort() {
    result.innerHTML = [];
    result.innerHTML = a_data;
    a.style.textDecoration = "underline";
}

let b = document.getElementById('b');
b.addEventListener("click", b_sort);
function b_sort() {
    result.innerHTML = null;
    result.innerHTML = b_data
}

let c = document.getElementById('c');
c.addEventListener("click", c_sort);
function c_sort() {
    result.innerHTML = null;
    result.innerHTML = c_data
}

let d = document.getElementById('d');
d.addEventListener("click", d_sort);
function d_sort() {
    result.innerHTML = null;
    result.innerHTML = d_data;
}

let e = document.getElementById('e')
e.addEventListener("click", e_sort);
function e_sort() {
    result.innerHTML = null;
    result.innerHTML = e_data
}

let other = document.getElementById('other');
other.addEventListener("click", other_options);
function other_options() {
    result.innerHTML = null;
    result.innerHTML = other_data;
}
/* Day 3 Works */

let image1 = document.getElementById('first_image');
image1.addEventListener('mouseover', mouseOverfist);
image1.addEventListener('mouseout', mouseOutfist);
function mouseOverfist() {
    image1.src = "https://img.gkbcdn.com/p/2022-04-24/eleglide-m1-plus-upgraded-version-electric-bike-12-5ah-250w-black-258649-1650765309927._w200_.jpg"
}
function mouseOutfist() {
    image1.src = "https://img.gkbcdn.com/s3/bb/eleglide-20220531151324673.jpg";
}

let image2 = document.getElementById('second_image');
image2.addEventListener('mouseover', mouseOver2);
image2.addEventListener('mouseout', mouseOut2);
function mouseOver2() {
    image2.src = "https://img.gkbcdn.com/p/2022-06-25/Roborock-S7-Pro-Ultra-Robot-Vacuum-Cleaner-White-506889-2._w200_.jpg";
}
function mouseOut2() {
    image2.src = "https://img.gkbcdn.com/s3/bb/roborock-20211111211035580.jpg";
}

let image3 = document.getElementById('third_image');
image3.addEventListener('mouseover', mouseOver3);
image3.addEventListener('mouseout', mouseOut3);
function mouseOver3() {
    image3.src = "https://img.gkbcdn.com/p/2021-07-26/addfa8a148b04f68bf9111767910e068-462123-2._w200_.jpg";
}
function mouseOut3() {
    image3.src = "https://img.gkbcdn.com/s3/bb/tronsmart-20210123120544453.jpg";
}

let image4 = document.getElementById('fourth_image');
image4.addEventListener('mouseover', mouseOver4);
image4.addEventListener('mouseout', mouseOut4);
function mouseOver4() {
    image4.src = "https://img.gkbcdn.com/p/2022-03-24/Jimmy-BX7-Pro-Handheld-Anti-mite-Vacuum-Cleaner-498211-0._w200_.jpg";
}
function mouseOut4() {
    image4.src = "https://img.gkbcdn.com/s3/bb/jimmy-20200910094916929.jpg";
}

let image5 = document.getElementById('fifth_image');
image5.addEventListener('mouseover', mouseOver5);
image5.addEventListener('mouseout', mouseOut5);

function mouseOver5() {
    image5.src = "https://img.gkbcdn.com/p/2021-07-07/ezior-x1500-26-inch-fat-tire-10-4ah-500w-folding-electric-bike-1625646171569._w200_.jpg";
}
function mouseOut5() {
    image5.src = "https://img.gkbcdn.com/s3/bb/bezior-20211111210912370.jpg";
}

let image6 = document.getElementById('sixth_image');
image6.addEventListener('mouseover', mouseOver6);
image6.addEventListener('mouseout', mouseOut6);

function mouseOver6() {
    image6.src = "https://img.gkbcdn.com/p/2021-12-22/SCULPFUN-S9-Laser-Engraver-481991-0._w200_.jpg";
}
function mouseOut6() {
    image6.src = "https://img.gkbcdn.com/s3/bb/sculpfun-20220617114417913.jpg";
}

let view_all = document.getElementById('view_all');
view_all.addEventListener("click", allOptions);
function allOptions() {
   
    let featured_brands = document.getElementById('sports_outdoor');
    featured_brands.innerHTML = [];
    viewLess();
    let image1 = document.createElement('img');
    image1.src = "https://img.gkbcdn.com/s3/b/Logo/Imortor.jpg";
    let image2 = document.createElement('img');
    image2.src = "https://img.gkbcdn.com/s3/b/Logo/SYL.jpg";
    let image3 = document.createElement('img');
    image3.src = "https://img.gkbcdn.com/s3/b/Logo/Merax.jpg";
    let image4 = document.createElement('img');
    image4.src = "https://img.gkbcdn.com/s3/b/Logo/youpin.jpg";
    let image5 = document.createElement('img');
    image5.src = "https://img.gkbcdn.com/s3/b/Logo/AreoX.jpg";
    let image6 = document.createElement('img');
    image6.src = "https://img.gkbcdn.com/s3/b/Logo/Lamtwheel.jpg";
    let image7 = document.createElement('img');
    image7.src = "https://img.gkbcdn.com/s3/b/Logo/UREVO.jpg";
    let image8 = document.createElement('img');
    image8.src = "https://img.gkbcdn.com/s3/b/nanrobot-6n94HBEW.jpg";
    let image9 = document.createElement('img');
    image9.src = "https://img.gkbcdn.com/s3/b/avaka-6TQm4QEo.jpg";
    let image10 = document.createElement('img');
    image10.src = "https://img.gkbcdn.com/s3/b/trekpow-6TQm4w99.jpg";
    let image11 = document.createElement('img');
    image11.src = "https://img.gkbcdn.com/s3/b/oolactive-6TQmKgkG.jpg";
    let image12 = document.createElement('img');
    image12.src = "https://img.gkbcdn.com/s3/b/bluetti.jpg";
    let image13 = document.createElement('img');
    image13.src = "https://img.gkbcdn.com/s3/b/fifish-6TQn4rOd.jpg";
    let image14 = document.createElement('img');
    image14.src = "https://img.gkbcdn.com/s3/b/novoo-6GkqIXbw.jpg";
    let image15 = document.createElement('img');
    image15.src = "https://img.gkbcdn.com/s3/b/cysum-6TQmTb1I.jpg";
    let image16 = document.createElement('img');
    image16.src = "https://img.gkbcdn.com/s3/b/minal-6UqQvPaI.jpg";
    let image17 = document.createElement('img');
    image17.src = "https://img.gkbcdn.com/s3/b/janobike.jpg";
    let image18 = document.createElement('img');
    image18.src = "https://img.gkbcdn.com/s3/b/kaisda.jpg";
    let image19 = document.createElement('img');
    image19.src = "https://img.gkbcdn.com/s3/b/haniwinner.jpg";
    let image20 = document.createElement('img');
    image20.src = "https://img.gkbcdn.com/s3/b/kingboss-6TQnVsXw.jpg";
    let image21 = document.createElement('img');
    image21.src = "https://img.gkbcdn.com/s3/b/mankeel-6n90SUIe.jpg";
    let image22 = document.createElement('img');
    image22.src = "https://img.gkbcdn.com/s3/b/aostirmotor-6n9KpfiP.jpg";
    let image23 = document.createElement('img');
    image23.src = "https://img.gkbcdn.com/s3/b/zendure-6eh27neh.jpg";
    let image24 = document.createElement('img');
    image24.src = "https://img.gkbcdn.com/s3/b/lefeet-6gctjM0s.jpg";
    let image25 = document.createElement('img');
    image25.src = "https://img.gkbcdn.com/s3/b/welkin-6hAizuEO.jpg";
    let image26 = document.createElement('img');
    image26.src = "https://img.gkbcdn.com/s3/b/spetime-6iDK5Qjo.jpg";
    let image27 = document.createElement('img');
    image27.src = "https://img.gkbcdn.com/s3/b/cmsbike-6mGqSGO5.jpg";
    let image28 = document.createElement('img');
    image28.src = "https://img.gkbcdn.com/s3/b/iscooter-6mGqn5WN.jpg";
    let image29 = document.createElement('img');
    image29.src = "https://img.gkbcdn.com/s3/b/philodo-bikes-6kKJvC2J.jpg";
    view_all.innerText = "View Less";
    view_all.addEventListener('click',viewLess)
    featured_brands.append(image1, image2, image3, image4, image5, image6, image7, image8, image9,
        image10, image11, image12, image13, image14, image15, image16, image17, image18, image19,
        image20, image21, image22, image23, image24, image25, image26, image27, image28, image29);
}
function viewLess() {
    let featured_brand = document.getElementById('sports_outdoor');
    featured_brand.innerHTML = [];
    featured_brand.innerHTML = featured_brands
    let view_all = document.getElementById('view_all');
    view_all.innerText = "View All"
    
}
