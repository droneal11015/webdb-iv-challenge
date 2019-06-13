exports.seed = function(knex, Promise) {
  return knex('instructions').truncate()
    .then(function () {
      return knex('instructions').insert([
        {instructions: "Sift dry ingredients together.", order: 1, recipe_id: 1},
        {instructions: "Add lemon zest to the pan", order: 4, recipe_id: 1},
        {instructions: "Cream butter and sugar together in mixing bowl.", order: 1, recipe_id: 5},
        {instructions: "Blend liquid ingredients in large bowl.", order: 2, recipe_id: 1},
        {instructions: "Bake for 10 minutes.", order: 5, recipe_id: 5},
        {instructions: "Let sit for 30 min.", recipe_id: 5},
        {instructions: "Cook until golden brown.", recipe_id: 3}, 
    ]);
    });
};