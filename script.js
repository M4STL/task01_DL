let navbar = document.querySelector('.navbar-links');
document.querySelector('#menu-icon').onclick=() => {
    navbar.classList.toggle('active');
}
window.onscroll=()=>{
    navbar.classList.remove('active');
}