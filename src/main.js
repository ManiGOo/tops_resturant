import './style.css'
import createNavbar from "./components/navbar";
import loadHome from "./home";
import loadContact from "./contact";
import loadMenu from "./menu";

const content = document.getElementById('app');

function init() {
  content.innerHTML = '';

  const navbar = createNavbar(loadHome, loadMenu, loadContact);
  content.appendChild(navbar);

  loadHome();
}

init();