const searchBox = document.querySelector('.searchBox');
const searchBtn = document.querySelector('.searchBtn');
const recipeContainer = document.querySelector('.recipe-container')


 
    const fetchRecipes = async(query) => {
        recipeContainer.innerHTML = "fetching recipe...";
    const data =  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
   const response = await data.json();
   console.log(response.meals)
   response.meals.forEach((el)=> {
    console.log(el.strMealThumb)
    const div = document.createElement('div');
    div.classList.add('recipe')
    div.innerHTML = `<img src=${el.strMealThumb} id="img" alt="404"/>
    <h3>${el.strMeal}</h3>
    <p> ${el.strArea}</p>
    <p> ${el.strCategory}</p>
    
    
    `
    recipeContainer.appendChild(div)
    
   });
   
    
    
}

searchBtn.addEventListener('click' , (e) => {
    e.preventDefault();
    const searchInput = searchBox.value.trim();
    fetchRecipes(searchInput);
})


