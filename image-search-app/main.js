const accessKey = "CPDLGP36Rj1F2iu1jAOdXZNciSgDal-TNp2U4SZRZDE";

const formEl = document.querySelector("form");

const searchInputEl = document.getElementById("search-input");

const searchResultsEl = document.querySelector(".search-results");

const showMoreBtnEl = document.getElementById("show-more-btn");

let inputData = "";
let page = 1;

async function searchImage() {
  inputData = searchInputEl.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
  const response = await fetch(url);
  const data = await response.json();
  if (page === 1) {
    searchResultsEl.innerHTML = "";
  }
  const results = data.results;
  results.map((result) => {
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search-result");
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;

    imageWrapper.appendChild(image)
    imageWrapper.appendChild(imageLink)
    searchResultsEl.appendChild(imageWrapper)
  });
page++

  if (page > 1) {
    showMoreBtnEl.style.display = "block";
  }
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  searchImage();
});

showMoreBtnEl.addEventListener("click", ()=>{
  searchImage()
})
