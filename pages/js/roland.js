// navbar mobile ver
const header = document.getElementById('header')
const body = document.querySelector('body')

const display = () =>{
    if (header.style.transform == "translateX(0%)"){
        header.style.transform = "translateX(-100%)"
        body.style.overflow = "visible"
    } else{
        body.style.overflow = "hidden"
        header.style.transform = "translateX(0%)"
    }
}

// parallax effect
const title = document.getElementById('title')
const bg = document.getElementById('bg-intro')

window.addEventListener('scroll', () =>{
    let scroll = window.scrollY

    title.style.top = scroll * 0.40 + "px"
    bg.style.bottom = scroll * 0.25 + "px"
})