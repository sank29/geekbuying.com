  

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
        img8.setAttribute('id','mouse');

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

    document.getElementById('sorting_result').append(img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14);

    /*---------------------A to Z data----------------------*/
    import {default_data, a_data,b_data, c_data, d_data, e_data, other_data} from "./export.js";

    let result = document.getElementById('sorting_result');

      // onMouseOver Function..
     result.addEventListener('mouseover',mouseOver);
     
     function mouseOver() {
            
     }

     // OnMouseOut Function..
     result.addEventListener('mouseover',mouseOut);
    function mouseOut() {

    }

    /*------------------Default Sorting part-----------------*/
        document.getElementById('hot').addEventListener("click",defaultStyle);
        function defaultStyle () {
            result.innerHTML = null
            result.innerHTML = default_data
        }
    let a = document.getElementById('a')
    a.addEventListener("click",a_sort);
    function a_sort() {
        result.innerHTML = null;
        result.innerHTML = a_data
        a.style.textDecoration = "underline"
    }

    let b = document.getElementById('b')
    b.addEventListener("click",b_sort);
    function b_sort() {
        result.innerHTML = null;
        result.innerHTML = b_data
    }

    let c = document.getElementById('c')
    c.addEventListener("click",c_sort);
    function c_sort() {
        result.innerHTML = null;
        result.innerHTML = c_data
    }

    let d = document.getElementById('d')
    d.addEventListener("click",d_sort);
    function d_sort() {
        result.innerHTML = null;
        result.innerHTML = d_data
    }

    let e = document.getElementById('e')
    e.addEventListener("click",e_sort);
    function e_sort() {
        result.innerHTML = null;
        result.innerHTML = e_data
    }

    let other = document.getElementById('other');
    other.addEventListener("click",other_options);
    function other_options() {
        result.innerHTML = null;
        result.innerHTML = other_data;
    }

    