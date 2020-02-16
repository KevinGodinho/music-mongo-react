const Artist = require("../models/artist");

/**
 * Finds the lowest and highest age of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max ages, like { min: 16, max: 45 }.
 */
module.exports = () => {
  const min = Artist.find({})
    .sort("age")
    .limit(1);
  const max = Artist.find({})
    .sort("-age")
    .limit(1);
  return Promise.all([min, max]).then(val => {
    const minMax = { min: val[0][0].age, max: val[1][0].age };
    return minMax;
  });
};
