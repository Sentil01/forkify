import * as model from './model.js';
import icons from 'url:../img/icons.svg';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

const recipeContainer = document.querySelector('.recipe');
const recipeContainer1 = document.querySelector('.search-results');
const searchField = document.querySelector('.search__field');
const search = document.querySelector('.search');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
let id = window.location.pathname.slice(1);
console.log(id);

model.loadRecipe();
console.log(model.state);
const { recipe } = model.state.recipe;

console.log(model.state.recipe);

// if (!id) return;
// const res = await fetch(
//   `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
// );
// // 5ed6604591c37cdc054bc886
// const resp = await fetch(
//   `https://forkify-api.herokuapp.com/api/v2/recipes?search=${recipeName}`
// );
// const data1 = await resp.json();
// const data = await res.json();
// console.log(data);
// console.log(data1);
// const { recipe } = data.data;
// console.log(recipe);
// const { recipes } = data1.data;
// console.log(recipes);

// let html = recipes.map(i => {
//   return `
//   <li class="preview">
//     <a class="preview__link preview__link--active" href="${i.id}">
//       <figure class="preview__fig">
//         <img src="${i.image_url}" alt="Test" />
//       </figure>
//       <div class="preview__data">
//         <h4 class="preview__title">${i.title}</h4>
//         <p class="preview__publisher">${i.publisher}</p>
//         <div class="preview__user-generated">
//           <svg>
//             <use href="${icons}#icon-user"></use>
//           </svg>
//         </div>
//       </div>
//     </a>
//   </li>`;
// });
let markup = ` <figure class="recipe__fig">
  <img src="${recipe.image_url}" alt="Tomato" class="recipe__img" />
  <h1 class="recipe__title">
    <span>${recipe.title}</span>
  </h1>
</figure>

<div class="recipe__details">
  <div class="recipe__info">
    <svg class="recipe__info-icon">
      <use href="${icons}#icon-clock"></use>
    </svg>
    <span class="recipe__info-data recipe__info-data--minutes">${
      recipe.cooking_time
    }</span>
    <span class="recipe__info-text">minutes</span>
  </div>
  <div class="recipe__info">
    <svg class="recipe__info-icon">
      <use href="${icons}#icon-users"></use>
    </svg>
    <span class="recipe__info-data recipe__info-data--people">${
      recipe.servings
    }</span>
    <span class="recipe__info-text">servings</span>

    <div class="recipe__info-buttons">
      <button class="btn--tiny btn--increase-servings">
        <svg>
          <use href="${icons}#icon-minus-circle"></use>
        </svg>
      </button>
      <button class="btn--tiny btn--increase-servings">
        <svg>
          <use href="${icons}#icon-plus-circle"></use>
        </svg>
      </button>
    </div>
  </div>

  <div class="recipe__user-generated">
    <svg>
      <use href="${icons}#icon-user"></use>
    </svg>
  </div>
  <button class="btn--round">
    <svg class="">
      <use href="${icons}#icon-bookmark-fill"></use>
    </svg>
  </button>
</div>

<div class="recipe__ingredients">
  <h2 class="heading--2">Recipe ingredients</h2>
  <ul class="recipe__ingredient-list">
    
      ${recipe.ingredients
        .map(function (e) {
          return `
          <li class="recipe__ingredient">  
           <svg class="recipe__icon">     
            <use href="${icons}#icon-check"></use>
           </svg>
           <div class="recipe__quantity">${e.quantity}
           </div>
           <div class="recipe__description">
           <span class="recipe__unit">${e.unit}</span>
           ${e.description}
           </div>
    </li>`;
        })
        .join('')}


    
  </ul>
</div>

<div class="recipe__directions">
  <h2 class="heading--2">How to cook it</h2>
  <p class="recipe__directions-text">
    This recipe was carefully designed and tested by
    <span class="recipe__publisher">${recipe.publisher}</span>. Please check out
    directions at their website.
  </p>
  <a
    class="btn--small recipe__btn"
    href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/"
    target="_blank"
  >
    <span>Directions</span>
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-right"></use>
    </svg>
  </a>
</div>`;

recipeContainer1.insertAdjacentHTML('afterbegin', html);
recipeContainer.insertAdjacentHTML('afterbegin', markup);

// let name = searchField.value;
// console.log(name);

// search.addEventListener('submit', function (e) {
//   e.preventDefault();
//   name = searchField.value;
//   console.log(name);
//   render(name);
//   // searchField.textContent = '';
// });
// window.addEventListener('hashchange', function () {
//   render(name);
// });
// window.addEventListener('load', function () {
//   render(name);
// });
// recipeContainer1.addEventListener('click', function (e) {
//   // e.preventDefault();
//   console.log(e.target.closest('.preview__link--active'));
//   const selectId = e.target.closest('.preview__link--active');
//   id = selectId.getAttribute('href');
//   console.log(id);
//   // selectId.setAttribute('href', id);
//   console.log(e.target);
//   id = window.location.pathname;
//   name = searchField.value;
//   console.log(name);
//   render(id, name);

//   // render()
// });
// render(id, name);
