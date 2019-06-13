exports.seed = function(knex, Promise) {
  return knex('recipes').truncate()
    .then(function () {
      return knex('recipes').insert([
        {recipe_name: "Biscuits", dish_id: 1},
        {recipe_name: "Southern Fried Chicken", dish_id: 2},
        {recipe_name: "Fancy Chicken", dish_id: 2},
        {recipe_name: "Traditional Dish", dish_id: 5},
        {recipe_name: "Best Cookies", dish_id: 3},
        {recipe_name: "Family Christmas Recipe", dish_id: 3},
        {recipe_name: "Papa Smurf's Recipe", dish_id: 5},
    ]);
    });
  }