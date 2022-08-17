fetch('/news')
.then((data) => data.json())
.then((data) => renderNews(data.results))
.catch((err) => {throw new Error(err)});

searchBtn.addEventListener('click', () => {
  fetch(`/search/${searchInput.value}`)
  .then((data) => data.json())
  .then((data) => renderNews(data.results))
  .catch((err) => {throw new Error(err)});
})