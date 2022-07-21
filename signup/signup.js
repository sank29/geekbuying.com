const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#id_password');

  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') !== 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
}); 

(function(){
const fonts=["cursive","monospace","sans-serif","serif"]
 
let captchaValue="";

function genratecaptcha(){
    let value=btoa(Math.random()*1000000000);
    value=value.substr(0,5+Math.random()*5);
    captchaValue=value;  
}
function setcaptcha(){
  let html=  captchaValue.split(" ").map((char)=>{
        const rotate=20+math.trunc(Math.random()*30);
        const font =Math.trunc(Math.random()*fonts.length);
        return `<span>
        style="
        transform:rotate(${rotate}deg);
        font-family:${fonts[font]}   
        "
        >${char}</span>`;
    }).join("");
    document.querySelector(".preview").innerHTML=html;    
}
function initcaptcha(){
    document.querySelector(".captch-refresh").addEventListener("click",function(){
    genratecaptcha();
    setcaptcha();

    });
    genratecaptcha();
    setcaptcha();
}
 initcaptcha()
})();