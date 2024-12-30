import { addHome } from "./pages/home.js";
import "./styles.css";
import { addAbout } from "./pages/about.js";
import { addMenu } from "./pages/menu.js"
let content = document.querySelector("#content")

const buttons = document.querySelectorAll("button") 

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        content.innerHTML = "" 
        if(button.id == "home") {
            
            addHome()
        }
        else if(button.id == "about") {
            
            addAbout()
        
        }
        else if (button.id == "menu") {
            addMenu()
        }

    })
})


