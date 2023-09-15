const header = document.getElementById('header')

const display = () =>{
    if (header.style.transform == "translateX(0%)"){
        header.style.transform = "translateX(-100%)"
    } else{
        header.style.transform = "translateX(0%)"
    }
}