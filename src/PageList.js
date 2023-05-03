export const API_KEY = "c54d083b3b4b464cb0841daa2c8ee6c2";

export const PageList = (argument = "", searchType = "search") => {
  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, "-");

    const displayResults = (articles) => {
      const resultsContent = articles.map(
        (article) =>
          `<div class="col-md-4 mb-3">
          <div class="card">
            <img src="${article.background_image}" class="card-img-top" alt="${
            article.name
          }" style="max-height: 300px; object-fit: cover;">
            <div class="card-body">
              <h5 class="card-title">${article.name}</h5>
              <p class="card-text">${article.platforms
                .map((platform) => {
                  switch (platform.platform.name) {
                    case "Linux":
                      return '<img src="linux.svg" alt="Linux">';
                    case "Mobile":
                      return '<img src="mobile.svg" alt="Mobile">';
                    case "PlayStation 4":
                      return '<img src="ps4.svg" alt="PlayStation 4">';
                    case "Nintendo Switch":
                      return '<img src="switch.svg" alt="Nintendo Switch">';
                    case "Windows":
                      return '<img src="windows.svg" alt="Windows">';
                    case "Xbox 360":
                      return '<img src="xbox.svg" alt="Xbox">';
                    default:
                      return platform.platform.name;
                  }
                })
                .join(" ")}</p>
              <a href="#pagedetail/${
                article.id
              }" class="btn btn-primary">Détails</a>
            </div>
          </div>
        </div>`
      );

      const resultsContainer = document.querySelector(".page-list .articles");
      resultsContainer.innerHTML = `<div class="row row-cols-1 row-cols-md-3 g-3">
                                      ${resultsContent.join("\n")}
                                      </div>`;
    };

    const fetchList = (url, argument, searchType) => {
      const finalURL = argument ? `${url}&${searchType}=${argument}` : url;
      fetch(finalURL)
        .then((response) => response.json())
        .then((responseData) => {
          displayResults(responseData.results);
        });
    };

    const baseUrl = `https://api.rawg.io/api/games?key=${API_KEY}`;
    fetchList(baseUrl, cleanedArgument, searchType);
  };

  const render = () => {
    pageContent.innerHTML = `
        <section class="page-list">
          <div class="articles">Loading...</div>
        </section>
      `;

    preparePage();
  };

  render();
};
