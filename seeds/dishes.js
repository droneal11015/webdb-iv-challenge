exports.seed = function(knex, Promise) {
  return knex('dishes').truncate()
    .then(function () {
      return knex('dishes').insert([
        {dish_name: "Pancakes"},
        {dish_name: "Roast Chicken"},
        {dish_name: "Gingerbread cookies"},
        {dish_name: "Lemon Squares"},
        {dish_name: "Pizza"},
        {dish_name: "Spaghetti"}
    ]);
    });
};