const car = {
  damage: [],
};

function addDamage(detail, rate) {
  this.damage.push({
    detail,
    rate,
  });
}

addDamage.call(car, 'Капот', 10);
addDamage.apply(car, ['Бампер', 15]);
console.log(car);
