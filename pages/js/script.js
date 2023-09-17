const burgerIcon = document.querySelector('.burgerIcon')
const who = document.querySelector('#Who')
const history = document.querySelector('#History')
const Fact = document.querySelector('#Fact')
const Achievement = document.querySelector('#Achievement')
const Hobbies = document.querySelector('#Hobbies')
const Roland = document.querySelector('#Roland')
const arrowsIcon = document.querySelector('.arrowsIcon')

burgerIcon.addEventListener('click', ()=>{
    who.style.display = "block";
    history.style.display = "block";
    Fact.style.display = "block";
    Achievement.style.display = "block";
    Hobbies.style.display = "block";
    Roland.style.display = "block";
    burgerIcon.style.display = "none";
    arrowsIcon.style.display = "block";
})

arrowsIcon.addEventListener('click', ()=>{
    who.style.display = "none";
    history.style.display = "none";
    Fact.style.display = "none";
    Achievement.style.display = "none";
    Hobbies.style.display = "none";
    Roland.style.display = "none";
    burgerIcon.style.display = "block";
    arrowsIcon.style.display = "none";
})