/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://day1/./node_modules/bootstrap/dist/css/bootstrap.css?");

/***/ }),

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://day1/./src/style/index.scss?");

/***/ }),

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Home\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var _PageList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageList.js */ \"./src/PageList.js\");\n\r\nconst Home = (argument = '') => {\r\n  (0,_PageList_js__WEBPACK_IMPORTED_MODULE_0__.PageList)();\r\n};\r\n\r\n\n\n//# sourceURL=webpack://day1/./src/Home.js?");

/***/ }),

/***/ "./src/PageDetail.js":
/*!***************************!*\
  !*** ./src/PageDetail.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageDetail\": () => (/* binding */ PageDetail)\n/* harmony export */ });\n/* harmony import */ var _PageList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageList.js */ \"./src/PageList.js\");\n\r\n\r\nconst PageDetail = (argument) => {\r\n  const preparePage = () => {\r\n    const cleanedArgument = argument.trim().replace(/\\s+/g, \"-\");\r\n    const articleDOM = document.querySelector(\".page-detail .article\");\r\n    const displayGame = (gameData) => {\r\n      const {\r\n        name,\r\n        released,\r\n        description,\r\n        background_image,\r\n        developers,\r\n        publishers,\r\n        platforms,\r\n        genres,\r\n        tags,\r\n        website,\r\n        clip,\r\n        stores,\r\n        metacritic,\r\n      } = gameData;\r\n\r\n      articleDOM.querySelector(\"h1.title\").innerHTML = name;\r\n\r\n      // image\r\n      const imageDOM = document.createElement(\"img\");\r\n      imageDOM.src = background_image;\r\n      imageDOM.classList.add(\"img-fluid\", \"rounded\", \"my-3\");\r\n      imageDOM.style.width = \"75%\"; // Make the images smaller\r\n      articleDOM.appendChild(imageDOM);\r\n\r\n      // description\r\n      const descriptionDOM = document.createElement(\"p\");\r\n      descriptionDOM.innerHTML = description;\r\n      articleDOM.appendChild(descriptionDOM);\r\n\r\n      // release date\r\n      const releaseDateDOM = document.createElement(\"p\");\r\n      releaseDateDOM.innerHTML = `Release date: <span>${released}</span>`;\r\n      articleDOM.appendChild(releaseDateDOM);\r\n\r\n      // developers\r\n      const developersDOM = document.createElement(\"p\");\r\n      const devLinks = developers.map((dev) => {\r\n        return `<a href=\"#pagelist/${dev.id}/developers\">${dev.name}</a>`;\r\n      });\r\n      developersDOM.innerHTML = `Developers: ${devLinks.join(\", \")}`;\r\n      articleDOM.appendChild(developersDOM);\r\n\r\n      // publishers\r\n      const publishersDOM = document.createElement(\"p\");\r\n      const pubLinks = publishers.map((pub) => {\r\n        return `<a href=\"#pagelist/${pub.id}/publishers\">${pub.name}</a>`;\r\n      });\r\n      publishersDOM.innerHTML = `Publishers: ${pubLinks.join(\", \")}`;\r\n      articleDOM.appendChild(publishersDOM);\r\n\r\n      // platforms\r\n      const platformsDOM = document.createElement(\"p\");\r\n\r\n      const platLinks = platforms.map((plat) => {\r\n        return `<a href=\"#pagelist/${plat.platform.id}/platforms\">${plat.platform.name}</a>`;\r\n      });\r\n      platformsDOM.innerHTML = `Platforms: ${platLinks.join(\", \")}`;\r\n      articleDOM.appendChild(platformsDOM);\r\n\r\n      // genres\r\n      const genresDOM = document.createElement(\"p\");\r\n      const genreLinks = genres.map((genre) => {\r\n        return `<a href=\"#pagelist/${genre.id}/genres\">${genre.name}</a>`;\r\n      });\r\n      genresDOM.innerHTML = `Genres: ${genreLinks.join(\", \")}`;\r\n      articleDOM.appendChild(genresDOM);\r\n\r\n      // tags\r\n      const tagsDOM = document.createElement(\"p\");\r\n      const tagLinks = tags.map((tag) => {\r\n        return `<a href=\"#pagelist/${tag.id}/tags\">${tag.name}</a>`;\r\n      });\r\n      tagsDOM.innerHTML = `Tags: ${tagLinks.join(\", \")}`;\r\n      articleDOM.appendChild(tagsDOM);\r\n\r\n      // website\r\n      const websiteDOM = document.createElement(\"p\");\r\n      websiteDOM.innerHTML = `Website: <a href=\"${website}\">${website}</a>`;\r\n      articleDOM.appendChild(websiteDOM);\r\n\r\n      // video\r\n      if (clip) {\r\n        const videoDOM = document.createElement(\"video\");\r\n        videoDOM.src = clip.clip;\r\n        videoDOM.controls = true;\r\n        videoDOM.classList.add(\"w-100\", \"my-3\");\r\n        articleDOM.appendChild(videoDOM);\r\n      }\r\n\r\n      // metacritic\r\n      if (metacritic) {\r\n        const metacriticDOM = document.createElement(\"p\");\r\n        metacriticDOM.innerHTML = `Metacritic score: ${metacritic}`;\r\n        articleDOM.appendChild(metacriticDOM);\r\n      }\r\n\r\n      // stores\r\n      const storesDOM = document.createElement(\"p\");\r\n\r\n      const storeLinks = stores.map((sto) => {\r\n        const storeUrl = sto.store.domain.startsWith(\"http\")\r\n          ? sto.store.domain\r\n          : `https://${sto.store.domain}`;\r\n        return `<a href=\"${storeUrl}\">${sto.store.name}</a>`;\r\n      });\r\n      platformsDOM.innerHTML = `Stores: ${storeLinks.join(\", \")}`;\r\n      articleDOM.appendChild(storesDOM);\r\n\r\n      // screenshots\r\n      const fetchScreenShot = (url, argument) => {\r\n        fetch(`${url}/${argument}/screenshots?key=${_PageList_js__WEBPACK_IMPORTED_MODULE_0__.API_KEY}`)\r\n          .then((response) => response.json())\r\n          .then((responseData) => {\r\n            const screenshots = responseData.results;\r\n\r\n            if (screenshots.length > 0) {\r\n              const screenshotsDOM = document.createElement(\"div\");\r\n              screenshotsDOM.classList.add(\"my-3\");\r\n\r\n              // Only show the first 4 screenshots\r\n              const numScreenshotsToShow = 4;\r\n              const screenshotsToShow = screenshots.slice(\r\n                0,\r\n                numScreenshotsToShow\r\n              );\r\n\r\n              const screenshotsWrapper = document.createElement(\"div\");\r\n              screenshotsWrapper.classList.add(\"d-flex\");\r\n\r\n              screenshotsToShow.forEach((screenshot) => {\r\n                const screenshotDOM = document.createElement(\"img\");\r\n                screenshotDOM.src = screenshot.image;\r\n                screenshotDOM.classList.add(\r\n                  \"img-fluid\",\r\n                  \"rounded\",\r\n                  \"my-3\",\r\n                  \"me-3\"\r\n                );\r\n                screenshotDOM.style.width = \"25%\"; // Make the images smaller\r\n                screenshotsWrapper.appendChild(screenshotDOM);\r\n              });\r\n\r\n              screenshotsDOM.appendChild(screenshotsWrapper);\r\n              articleDOM.appendChild(screenshotsDOM);\r\n            }\r\n          });\r\n      };\r\n\r\n      fetchScreenShot(\"https://api.rawg.io/api/games\", gameData.slug);\r\n    };\r\n    const fetchGame = (url, argument) => {\r\n      fetch(`${url}/${argument}?key=${_PageList_js__WEBPACK_IMPORTED_MODULE_0__.API_KEY}`)\r\n        .then((response) => response.json())\r\n        .then((responseData) => {\r\n          displayGame(responseData);\r\n        });\r\n    };\r\n    fetchGame(\"https://api.rawg.io/api/games\", cleanedArgument);\r\n  };\r\n\r\n  const render = () => {\r\n    pageContent.innerHTML = `\r\n        <section class=\"page-detail\">\r\n  <div class=\"article\" id=\"game-details\">\r\n    <h1 class=\"title\" id=\"game-title\"></h1>\r\n    <p class=\"description\"></p>\r\n  </div>\r\n</section>\r\n      `;\r\n\r\n    preparePage();\r\n  };\r\n\r\n  render();\r\n};\r\n\n\n//# sourceURL=webpack://day1/./src/PageDetail.js?");

/***/ }),

/***/ "./src/PageList.js":
/*!*************************!*\
  !*** ./src/PageList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_KEY\": () => (/* binding */ API_KEY),\n/* harmony export */   \"PageList\": () => (/* binding */ PageList)\n/* harmony export */ });\nconst API_KEY = \"c54d083b3b4b464cb0841daa2c8ee6c2\";\r\n\r\nconst PageList = (argument = \"\", searchType = \"search\") => {\r\n  const preparePage = () => {\r\n    const cleanedArgument = argument.trim().replace(/\\s+/g, \"-\");\r\n\r\n    const displayResults = (articles) => {\r\n      const resultsContent = articles.map(\r\n        (article) =>\r\n          `<div class=\"col-md-4 mb-3\">\r\n          <div class=\"card\">\r\n            <img src=\"${article.background_image}\" class=\"card-img-top\" alt=\"${\r\n            article.name\r\n          }\" style=\"max-height: 300px; object-fit: cover;\">\r\n            <div class=\"card-body\">\r\n              <h5 class=\"card-title\">${article.name}</h5>\r\n              <p class=\"card-text\">${article.platforms\r\n                .map((platform) => {\r\n                  switch (platform.platform.name) {\r\n                    case \"Linux\":\r\n                      return '<img src=\"linux.svg\" alt=\"Linux\">';\r\n                    case \"Mobile\":\r\n                      return '<img src=\"mobile.svg\" alt=\"Mobile\">';\r\n                    case \"PlayStation 4\":\r\n                      return '<img src=\"ps4.svg\" alt=\"PlayStation 4\">';\r\n                    case \"Nintendo Switch\":\r\n                      return '<img src=\"switch.svg\" alt=\"Nintendo Switch\">';\r\n                    case \"Windows\":\r\n                      return '<img src=\"windows.svg\" alt=\"Windows\">';\r\n                    case \"Xbox 360\":\r\n                      return '<img src=\"xbox.svg\" alt=\"Xbox\">';\r\n                    default:\r\n                      return platform.platform.name;\r\n                  }\r\n                })\r\n                .join(\" \")}</p>\r\n              <a href=\"#pagedetail/${\r\n                article.id\r\n              }\" class=\"btn btn-primary\">Détails</a>\r\n            </div>\r\n          </div>\r\n        </div>`\r\n      );\r\n\r\n      const resultsContainer = document.querySelector(\".page-list .articles\");\r\n      resultsContainer.innerHTML = `<div class=\"row row-cols-1 row-cols-md-3 g-3\">\r\n                                      ${resultsContent.join(\"\\n\")}\r\n                                      </div>`;\r\n    };\r\n\r\n    const fetchList = (url, argument, searchType) => {\r\n      const finalURL = argument ? `${url}&${searchType}=${argument}` : url;\r\n      fetch(finalURL)\r\n        .then((response) => response.json())\r\n        .then((responseData) => {\r\n          displayResults(responseData.results);\r\n        });\r\n    };\r\n\r\n    const baseUrl = `https://api.rawg.io/api/games?key=${API_KEY}`;\r\n    fetchList(baseUrl, cleanedArgument, searchType);\r\n  };\r\n\r\n  const render = () => {\r\n    pageContent.innerHTML = `\r\n        <section class=\"page-list\">\r\n          <div class=\"articles\">Loading...</div>\r\n        </section>\r\n      `;\r\n\r\n    preparePage();\r\n  };\r\n\r\n  render();\r\n};\r\n\n\n//# sourceURL=webpack://day1/./src/PageList.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/index.scss */ \"./src/style/index.scss\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes.js */ \"./src/routes.js\");\n\r\n\r\n\r\n\r\nconst callRoute = () => {\r\n  const { hash } = window.location;\r\n  const pathParts = hash.substring(1).split(\"/\");\r\n\r\n  const pageName = pathParts[0];\r\n  const pageFunction = _routes_js__WEBPACK_IMPORTED_MODULE_2__.routes[pageName];\r\n\r\n  if (pageFunction !== undefined) {\r\n    if (pathParts.length === 2) {\r\n      pageFunction(pathParts[1], \"search\");\r\n    } else if (pathParts.length === 3) {\r\n      pageFunction(pathParts[1], pathParts[2]);\r\n    } else {\r\n      pageFunction();\r\n    }\r\n  }\r\n};\r\n\r\nwindow.addEventListener(\"hashchange\", () => callRoute());\r\nwindow.addEventListener(\"DOMContentLoaded\", () => callRoute());\r\n\r\nconst searchForm = document.getElementById(\"search-form\");\r\nconst searchInput = document.getElementById(\"search-input\");\r\n\r\n\r\nsearchForm.addEventListener(\"submit\", (event) => {\r\n  event.preventDefault();\r\n  const searchQuery = searchInput.value.trim();\r\n  \r\n  window.location.href=`#pagelist/${searchInput.value}` ;\r\n});\r\n\n\n//# sourceURL=webpack://day1/./src/index.js?");

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"routes\": () => (/* binding */ routes)\n/* harmony export */ });\n/* harmony import */ var _Home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.js */ \"./src/Home.js\");\n/* harmony import */ var _PageDetail_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageDetail.js */ \"./src/PageDetail.js\");\n/* harmony import */ var _PageList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageList.js */ \"./src/PageList.js\");\n\r\n\r\n\r\n\r\nconst routes = {\r\n    '': _Home_js__WEBPACK_IMPORTED_MODULE_0__.Home,\r\n    'pagelist': _PageList_js__WEBPACK_IMPORTED_MODULE_2__.PageList,\r\n    \r\n    'pagedetail': _PageDetail_js__WEBPACK_IMPORTED_MODULE_1__.PageDetail,\r\n  };\r\n \n\n//# sourceURL=webpack://day1/./src/routes.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;