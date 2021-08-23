// Load the necessary elements from html file 
const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let loadPercent = 0

let int = setInterval(blurry, 30)

function blurry() {
    loadPercent++
    if(loadPercent > 99) {
        clearInterval(int)
    }
    loadText.innerText = `${loadPercent}%`
    loadText.style.opacity = scale(loadPercent, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(loadPercent, 0, 100, 30, 0)}px)`
}

// Maps the loadPercent to a scale from 1 to 0
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}