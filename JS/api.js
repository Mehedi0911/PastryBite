const searchBtn= document.querySelector('#search-btn');

searchBtn.addEventListener('click', function(e){
    e.preventDefault();
    searchMeal();
    // const searchInput = document.querySelector('#search-input').value = '';
    
})

const searchMeal = async() =>{
    const searchInput = document.querySelector('#search-input');
    const searchValue = searchInput.value;
    const searchValueFirstLeter = searchValue.charAt(0);
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f='+searchValueFirstLeter+''
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    displayFoods(data.meals);
}

const displayFoods = meals =>{
    const foodArea = document.querySelector('#food-area');
    foodArea.innerHTML ='';
    meals.forEach(meal => {
        const foodBox = document.createElement('div');
        const price = Math.floor(Math.random() * 5);
        const foodInfo = `<div class ="food-box" data-aos="fade-up">
            <img src="${meal.strMealThumb}">
            <h2 class = "item-header text-center">${meal.strMeal}</h2>
            <h3 class = "text-center">$ ${price}.99</h3>
            <div class = "dis-flex just-center"><button class = "warn-btn">Order Now</button></div>
        `
        foodBox.innerHTML = foodInfo;
        foodArea.appendChild(foodBox);
    });
}