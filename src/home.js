const content = document.querySelector("#content")
import chefRD from "./cbrd.jpg"
const image = document.createElement("img")
image.className = 'chefRD'
image.src = chefRD

const header = document.createElement("header")
header.textContent = "Welcome to Chef Boy RD"

content.appendChild(image)
content.appendChild(header)

export const home = "./home.js"