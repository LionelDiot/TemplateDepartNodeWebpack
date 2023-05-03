import "./style/index.scss";
import 'bootstrap/dist/css/bootstrap.css';
import { routes } from "./routes.js";

const callRoute = () => {
  const { hash } = window.location;
  const pathParts = hash.substring(1).split("/");

  const pageName = pathParts[0];
  const pageFunction = routes[pageName];

  if (pageFunction !== undefined) {
    if (pathParts.length === 2) {
      pageFunction(pathParts[1], "search");
    } else if (pathParts.length === 3) {
      pageFunction(pathParts[1], pathParts[2]);
    } else {
      pageFunction();
    }
  }
};

window.addEventListener("hashchange", () => callRoute());
window.addEventListener("DOMContentLoaded", () => callRoute());

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");


searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchQuery = searchInput.value.trim();
  
  window.location.href=`#pagelist/${searchInput.value}` ;
});
