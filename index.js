let body =document.querySelector("body")
let input = document.querySelector("input")
let reg = document.getElementById("main")
let second_page = document.getElementById("success_page")
// second_page.style.display = none
body = second_page.style.display = "none"
// body = document.querySelector(".success_page").style.display = "none"



let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


function myFunction(){

    if((input.value.match(pattern))){
        second_page.style.display = "block"
        reg.style.display = "none"
    }
    else{
        document.getElementById("validation").innerHTML = "Valid email required!";
        input.style.backgroundColor = "color-mix( in srgb, red, transparent 85%)"
    }
}
