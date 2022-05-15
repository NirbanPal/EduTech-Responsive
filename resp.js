burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navlist = document.querySelector('.navlist');
rightnav = document.querySelector('.rightnav');

burger.addEventListener('click',()=>{
    rightnav.classList.toggle('vclass-resp');
    navlist.classList.toggle('vclass-resp');
    navbar.classList.toggle('hnav-resp');
})
