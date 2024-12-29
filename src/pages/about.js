import about from "./pics/about.jpg"
const content = document.querySelector("#content")
const image = document.createElement("img")
image.className = 'about'
image.src = about

const header = document.createElement("h1")
header.textContent = "Pockets of food" 

const text = document.createElement('p')
text.textContent = "From putting food in his pockets, giving it to the dog, or throwing it on the roof; RD found a way to dispose of the food that Stella wanted him to eat. This fueled his passion to make food that would always be enjoyed by all, with the only pocket getting filled hopefully being your stomach."


export function addContent() { 
    content.appendChild(image)
    content.appendChild(header)
    content.appendChild(text)
    }