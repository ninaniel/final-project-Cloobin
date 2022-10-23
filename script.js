document.getElementById('subscribe-js').addEventListener('click', function(){
    alert('We will be in touch!')
});

document.getElementById('SeeAllEvents').addEventListener('mouseover', function(){
    SeeAllEvents.style.scale ='1.2';
})
document.getElementById('SeeAllEvents').addEventListener('mouseout', function(){
    SeeAllEvents.style.scale ='1';
})

let navBar = document.getElementById('navBar');
let burgerBar = document.getElementById('burgerBar');

burgerBar.addEventListener('click', function(){
    navBar.classList.toggle('navActive');
})
