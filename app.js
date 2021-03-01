const res_btn = document.getElementById('cat_btn');
const res_result = document.getElementById('cat_result');


res_btn.addEventListener("click", getRandomRecipe);


function getRandomCat() {
	fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/extract`)
		.then(res => res.json())
		.then(data => {
			//res_result.innerHTML = `<img src=${data.file} alt="cat" />`
		});
}
