// const mobile_nav = document.querySelector(".navbar-btn");
// const nav_header = document.querySelector(" .active .navbar");

// const toggleNavbar = () => { 
//     // alert("welcome");
//     nav_header.classList.toggle("active");
// };


// mobile_nav.addEventListener("click",() =>toggleNavbar());



<button onclick="myFunction()">
Call
</button>

function myFunction(){
var a = document.getElementById('input').value;
window.location.href = 'tel:' + a;
}