const cards = document.querySelector('.cards');
console.log(cards);

fetch('/news')
.then((data) => data.json())
.then((data) => renderNews(data.results))
.catch((err) => {console.log(err);});

function renderNews(data) {
  // console.log(typeof data);
  console.log(data);
  // data = JSON.parse(data)
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
    
  });

}


cards.innerHTML = 
`<div class="card">
  <img src=${data.results[0].image_url} alt="" />
  <h4>${data.results[0].title}</h4>
  <div class="action">
      <a href=${data.results[0].link}>See More</a>
  </div>
</div>`

