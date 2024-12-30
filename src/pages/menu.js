import menu1 from "../pics/menu1.jpg"
import menu2 from "../pics/menu2.jpg"
const content = document.querySelector("#content")
const image1 = document.createElement("img")
const image2 = document.createElement("img")
image1.src = menu1
image2.src = menu2

const header1 = document.createElement("h1")
header1.textContent = "DDelight" 
const header2 = document.createElement("h1")
header2.textContent = "Pasta with Vodka Sauce"

const text1 = document.createElement('p')
text1.textContent = "Potatoes, corn, butter, sourcream. What could go wrong?"
const text2 = document.createElement('p')
text2.textContent = "A creamy meal that will leave you asking for more."


export function addMenu() { 
    content.appendChild(header1)
    content.appendChild(image1)
    content.appendChild(text1)
    content.appendChild(header2)
    content.appendChild(image2)
    content.appendChild(text2)
    }