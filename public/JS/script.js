const cards = document.querySelector('.cards');
const searchInput = document.querySelector('.search-input');

searchInput.addEventListener('click', () => {
  fetch(`/search/${searchInput.value}`)
  .then((data) => data.json())
  .then((data) => renderNews(data.results))
  .catch((err) => {console.log(err)});
})

fetch('/news')
.then((data) => data.json())
.then((data) => console.log(data.results))
.catch((err) => {console.log(err);});

function renderNews(data) {
  data.forEach((element) => {
    const card = document.createElement('div');
    card.setAttribute('class' , 'card')

    const img = document.createElement('img');
    if (element.image_url) {
      img.setAttribute('src' , `${element.image_url}`)
    } else {
      img.setAttribute('src' , `../assets/loading.jpg`)
    }
    
    const h4 = document.createElement('h4');
    h4.textContent = `${element.title}`

    const action = document.createElement('div');
    action.setAttribute('class' , 'action')

    const seeMore = document.createElement('a');
    seeMore.setAttribute('href' , `${element.link}`)
    seeMore.textContent = "See More"

    action.appendChild(seeMore);

    card.appendChild(img)
    card.appendChild(h4)
    card.appendChild(action)
    cards.appendChild(card)
    
  })
}
