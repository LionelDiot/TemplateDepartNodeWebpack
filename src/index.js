import "./style/index.scss";


const callRoute = () => {
  const { hash } = window.location;
  const pathParts = hash.substring(1).split("/");

  const pageName = pathParts[0];
  const pageArgument = pathParts[1] || "";
  const pageFunction = routes[pageName];

  if (pageFunction !== undefined) {
    pageFunction(pageArgument);
  }
};

window.addEventListener("hashchange", () => callRoute());
window.addEventListener("DOMContentLoaded", () => callRoute());

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");


searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchQuery = searchInput.value.trim();
  PageList(searchQuery);
  
});
