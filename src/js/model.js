import { async } from 'regenerator-runtime';
export const state = {
  recipe: {},
};

export const loadRecipe = async function () {
  // if (!id) return;
  try {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886`
    );
    // 5ed6604591c37cdc054bc886
    // const resp = await fetch(
    //   `https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza`
    // );
    // const data1 = await resp.json();
    const data = await res.json();
    console.log(data);

    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log(state.recipe);
    console.log(state);
  } catch (err) {
    alert(err);
  }
};
