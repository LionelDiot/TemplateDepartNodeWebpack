const PageDetail = (argument) => {
  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, "-");
    const articleDOM = document.querySelector(".page-detail .article");
    const displayGame = (gameData) => {
      const {
        name,
        released,
        description,
        background_image,
        developers,
        publishers,
        platforms,
        genres,
        tags,
        website,
        clip,
        metacritic,
      } = gameData;

      articleDOM.querySelector("h1.title").innerHTML = name;

      // image
      const imageDOM = document.createElement("img");
      imageDOM.src = background_image;
      imageDOM.classList.add("img-fluid", "rounded", "my-3");
      imageDOM.style.width = "75%"; // Make the images smaller
      articleDOM.appendChild(imageDOM);

      // description
      const descriptionDOM = document.createElement("p");
      descriptionDOM.innerHTML = description;
      articleDOM.appendChild(descriptionDOM);

      // release date
      const releaseDateDOM = document.createElement("p");
      releaseDateDOM.innerHTML = `Release date: <span>${released}</span>`;
      articleDOM.appendChild(releaseDateDOM);

      // developers
      const developersDOM = document.createElement("p");
      const devLinks = developers.map((dev) => {
        return `<a href="#pagelist/${dev.slug}">${dev.name}</a>`;
      });
      developersDOM.innerHTML = `Developers: ${devLinks.join(", ")}`;
      articleDOM.appendChild(developersDOM);

      // publishers
      const publishersDOM = document.createElement("p");
      const pubLinks = publishers.map((pub) => {
        return `<a href="#pagelist/${pub.slug}">${pub.name}</a>`;
      });
      publishersDOM.innerHTML = `Publishers: ${pubLinks.join(", ")}`;
      articleDOM.appendChild(publishersDOM);

      // platforms
      const platformsDOM = document.createElement("p");

      const platLinks = platforms.map((plat) => {
        return `<a href="#pagelist/${plat.platform.name}">${plat.platform.name}</a>`;
      });
      platformsDOM.innerHTML = `Platforms: ${platLinks.join(", ")}`;
      articleDOM.appendChild(platformsDOM);

      // genres
      const genresDOM = document.createElement("p");
      const genreLinks = genres.map((genre) => {
        return `<a href="#pagelist/${genre.slug}">${genre.name}</a>`;
      });
      genresDOM.innerHTML = `Genres: ${genreLinks.join(", ")}`;
      articleDOM.appendChild(genresDOM);

      // tags
      const tagsDOM = document.createElement("p");
      const tagLinks = tags.map((tag) => {
        return `<a href="#pagelist/${tag.slug}">${tag.name}</a>`;
      });
      tagsDOM.innerHTML = `Tags: ${tagLinks.join(", ")}`;
      articleDOM.appendChild(tagsDOM);

      // website
      const websiteDOM = document.createElement("p");
      websiteDOM.innerHTML = `Website: <a href="${website}">${website}</a>`;
      articleDOM.appendChild(websiteDOM);

      // video
      if (clip) {
        const videoDOM = document.createElement("video");
        videoDOM.src = clip.clip;
        videoDOM.controls = true;
        videoDOM.classList.add("w-100", "my-3");
        articleDOM.appendChild(videoDOM);
      }

      // metacritic
      if (metacritic) {
        const metacriticDOM = document.createElement("p");
        metacriticDOM.innerHTML = `Metacritic score: ${metacritic}`;
        articleDOM.appendChild(metacriticDOM);
      }

      // screenshots
      const fetchScreenShot = (url, argument) => {
        fetch(`${url}/${argument}/screenshots?key=${API_KEY}`)
          .then((response) => response.json())
          .then((responseData) => {
            const screenshots = responseData.results;

            if (screenshots.length > 0) {
              const screenshotsDOM = document.createElement("div");
              screenshotsDOM.classList.add("my-3");

              // Only show the first 4 screenshots
              const numScreenshotsToShow = 4;
              const screenshotsToShow = screenshots.slice(
                0,
                numScreenshotsToShow
              );

              const screenshotsWrapper = document.createElement("div");
              screenshotsWrapper.classList.add("d-flex");

              screenshotsToShow.forEach((screenshot) => {
                const screenshotDOM = document.createElement("img");
                screenshotDOM.src = screenshot.image;
                screenshotDOM.classList.add(
                  "img-fluid",
                  "rounded",
                  "my-3",
                  "me-3"
                );
                screenshotDOM.style.width = "25%"; // Make the images smaller
                screenshotsWrapper.appendChild(screenshotDOM);
              });

              screenshotsDOM.appendChild(screenshotsWrapper);
              articleDOM.appendChild(screenshotsDOM);
            }
          });
      };

      fetchScreenShot("https://api.rawg.io/api/games", gameData.slug);
    };
    const fetchGame = (url, argument) => {
      fetch(`${url}/${argument}?key=${API_KEY}`)
        .then((response) => response.json())
        .then((responseData) => {
          displayGame(responseData);
        });
    };
    fetchGame("https://api.rawg.io/api/games", cleanedArgument);
  };

  const render = () => {
    pageContent.innerHTML = `
        <section class="page-detail">
  <div class="article" id="game-details">
    <h1 class="title" id="game-title"></h1>
    <p class="description"></p>
  </div>
</section>
      `;

    preparePage();
  };

  render();
};
