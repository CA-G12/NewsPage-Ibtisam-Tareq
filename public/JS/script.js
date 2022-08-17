const cards = document.querySelector('.cards');
console.log(cards);

fetch('/news')
.then((data) => data.json())
.then((data) => renderNews(data))
.catch((err) => {console.log(err);});

function renderNews(data) {
  console.log(data);
    cards.innerHTML = 
    `<div class="card">
      <img src=${data.results[0].image_url} alt="" />
      <h4>${data.results[0].title}</h4>
      <div class="action">
          <a href=${data.results[0].link}>See More</a>
      </div>
    </div>`
}