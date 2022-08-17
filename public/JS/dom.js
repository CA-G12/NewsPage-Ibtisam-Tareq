const cards = document.querySelector('.cards');
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');


// const createElement = (type, options, parent) => {
//     const element = document.createElement(type);
//     element.setAttribute(options);
//     parent.appendChild(element);
//     return element;
//     } 

// const card = createElement('div', { class: 'card' }, cards)

const renderNews = (data)=> {
    cards.innerHTML = '';
    data.forEach((element) => {
        const card = document.createElement('div');
        card.setAttribute('class' , 'card');
        cards.appendChild(card);

        const img = document.createElement('img');
        if (element.image_url) img.setAttribute('src' , element.image_url);
        else img.setAttribute('src' , `../assets/loading.jpg`);
        card.appendChild(img);
        
        const action = document.createElement('div');
        action.setAttribute('class' , 'action');
        card.appendChild(action);
        
        const seeMore = document.createElement('a');
        seeMore.setAttribute('href' , element.link)
        seeMore.textContent = "See More";
        action.appendChild(seeMore);

        const news_details = document.createElement('div')
        news_details.setAttribute('class' , 'news_details')
        card.appendChild(news_details)

        const catagories = document.createElement('p')
        catagories.setAttribute('class' , 'catagories')
        if(element.category) catagories.textContent = element.category
        else catagories.textContent = "I WATCHED the excellent BBC1 Scotland Disclosure episode on Monday evening (August 15)."
        news_details.appendChild(catagories)

        const h4 = document.createElement('h4');
        h4.textContent = element.title;
        news_details.appendChild(h4)

        const description = document.createElement('p')
        description.setAttribute('class' , 'description')
        if(element.description) description.textContent = element.description
        else description.textContent = "You could just let go of all the manipulation or wanting something to be different or arguments that they might need to be making. They can just exist next to each other,” Odenkirk says."        
        news_details.appendChild(description);
    })
}