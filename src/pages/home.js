import chefRD from "../pics/cbrd.jpg"
const content = document.querySelector("#content")
const image = document.createElement("img")
image.className = 'chefRD'
image.src = chefRD

const header = document.createElement("h1")
header.textContent = "Welcome to Chef Boy RD" 

const text = document.createElement('p')
text.textContent = "We are committed to making comfort meals from childhood. These few handpicked meals will be sure to satiate memories and appetites."



export function addHome() { 
    content.appendChild(image)
    content.appendChild(header)
    content.appendChild(text)
    }