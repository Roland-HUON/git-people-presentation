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

//hover 

if (window.screen.width > 426) {
    const starcraft = document.getElementById('game-display-starcraft')
    const ST_text = document.getElementById('starcraft-p')
    const dokkan = document.getElementById('game-display-dokkan')
    const dokkan_text = document.getElementById('dokkan-p')
    const game_display = document.getElementById('game-display')
    
    starcraft.addEventListener('mouseover', () => {
        starcraft.style.width = "80%"
        starcraft.style.filter = "grayscale(0%)"
        ST_text.style.opacity = "1"
        dokkan.style.width = "20%"
        dokkan.style.filter = "grayscale(100%)"
        dokkan_text.style.opacity = "0"
    })
    
    dokkan.addEventListener('mouseover', () => {
        dokkan.style.width = "80%"
        dokkan.style.filter = "grayscale(10%)"
        dokkan_text.style.opacity = "1"
        starcraft.style.width = "20%"
        starcraft.style.filter = "grayscale(100%)"
        ST_text.style.opacity = "0"
    })
    
    game_display.addEventListener('mouseout', () => {
        starcraft.style.width = "50%"
        starcraft.style.filter = "grayscale(100%)"
        ST_text.style.opacity = "0"
        dokkan.style.width = "50%"
        dokkan.style.filter = "grayscale(100%)"
        dokkan_text.style.opacity = "0"
    })
}