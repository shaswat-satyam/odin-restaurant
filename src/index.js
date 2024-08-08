import home from "./home";
import menu from "./menu";
import contact from "./contact";

let homeButton = document.getElementById("home");
homeButton.addEventListener("click", home);

let contactButton = document.getElementById("contact");
contactButton.addEventListener("click", contact);

let menuButton = document.getElementById("menu");
menuButton.addEventListener("click", menu);

home();
