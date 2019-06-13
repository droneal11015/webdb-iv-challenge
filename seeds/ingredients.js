exports.seed = function(knex, Promise) {
  return knex('ingredients').truncate()
    .then(function () {
      return knex('ingredients').insert([
        {ingredient_name: "Chicken Broth", amount: 4, measurement: "cups", recipe_id: 2},
        {ingredient_name: "Cocoa Powder", amount: 1.5, measurement: "cups", recipe_id: 3},
        {ingredient_name: "Salt", amount: 2, measurement: "tbsp", recipe_id: 2},
        {ingredient_name: "Eggs", amount: 4, measurement: "", recipe_id: 2},
        {ingredient_name: "Butter", amount: 1, measurement: "stick", recipe_id: 2},
        {ingredient_name: "Ginger", amount: 1.25, measurement: "cups", recipe_id: 3},
        {ingredient_name: "Chocolate Chips", amount: 2, measurement: "cups", recipe_id: 2},
        {ingredient_name: "Butter", amount: 4, measurement: "lbs", recipe_id: 1},
        {ingredient_name: "Pepperoni", amount: 1, recipe_id: 5},
        {ingredient_name: "Cheese", amount: 4, measurement: "tsp", recipe_id: 5},
    ]);
    });
};