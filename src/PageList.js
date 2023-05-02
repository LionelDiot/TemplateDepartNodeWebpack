const API_KEY = "c54d083b3b4b464cb0841daa2c8ee6c2";

const PageList = (argument = "") => {
  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, "-");

    const displayResults = (articles) => {
      const resultsContent = articles.map(
        (article) =>
          `<div class="col-md-4 mb-3">
          <div class="card">
            <img src="${article.background_image}" class="card-img-top" alt="${article.name}" style="max-height: 300px; object-fit: cover;">
            <div class="card-body">
              <h5 class="card-title">${article.name}</h5>
              <p class="card-text">${article.platforms.map((platform) => platform.platform.name).join(', ')}</p>
              <a href="#pagedetail/${article.id}" class="btn btn-primary">Détails</a>
            </div>
          </div>
        </div>`
      );

      const resultsContainer = document.querySelector(".page-list .articles");
      resultsContainer.innerHTML = `<div class="row row-cols-1 row-cols-md-3 g-3">
                                      ${resultsContent.join("\n")}
                                      </div>`;
    };

    const fetchList = (url, argument) => {
      const finalURL = argument ? `${url}&search=${argument}` : url;
      fetch(finalURL)
        .then((response) => response.json())
        .then((responseData) => {
          displayResults(responseData.results);
        });
    };

    fetchList(`https://api.rawg.io/api/games?key=${API_KEY}`, cleanedArgument);
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
