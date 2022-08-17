const cards = document.querySelector('.cards');
const searchInput = document.querySelector('.search-input');

fetch('/news')
.then((data) => data.json())
.then((data) => renderNews(data))
.catch((err) => {console.log(err);});


// fetch('/search', searchInput.value)

function renderNews(data) {
  console.log(data.results);
  // const parsedData = JSON.parse(data);
//   Object.entries(data).forEach(([key, value]) => {
//     console.log(`${key} ${value}`);
// });
  // console.log(parsedData);
  data.forEach((ele)=>{
    
  })
    cards.innerHTML = 
    `<div class="card">
      <img src=${data.results[0].image_url} alt="" />
      <h4>${data.results[0].title}</h4>
      <div class="action">
          <a href=${data.results[0].link}>See More</a>
      </div>
    </div>`
}