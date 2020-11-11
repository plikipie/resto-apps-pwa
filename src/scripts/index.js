import "regenerator-runtime";
import "../scripts/styles/css/main.css";
import "../scripts/styles/css/responsive.css";
import App from "./views/app";
import "../scripts/scroll";

const app = new App({
  button: document.querySelector("#hamburgerButton"),
  drawer: document.querySelector("#navigationDrawer"),
  content: document.querySelector("#mainContent"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
});
