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
    
    const action = document.createElement('div');
    action.setAttribute('class' , 'action')
    
    const seeMore = document.createElement('a');
    seeMore.setAttribute('href' , `${element.link}`)
    seeMore.textContent = "See More"
    
    const news_details = document.createElement('div')
    news_details.setAttribute('class' , 'news_details')

    const catagories = document.createElement('p')
    catagories.setAttribute('class' , 'catagories')
    if(element.category) {
      catagories.textContent = `${element.category}`
    } else {
      catagories.textContent = "I WATCHED the excellent BBC1 Scotland Disclosure episode on Monday evening (August 15)."
    }

    const h4 = document.createElement('h4');
    h4.textContent = `${element.title}`

    const description = document.createElement('p')
    description.setAttribute('class' , 'description')
    description.textContent = `${element.description}`
  
    action.appendChild(seeMore);
    card.appendChild(img)
    news_details.appendChild(catagories)
    news_details.appendChild(h4)
    news_details.appendChild(description)
    card.appendChild(news_details)
    card.appendChild(action)
    cards.appendChild(card)
    
  })
}
