const f = (cars) => {
  const iter = (car, acc) => {
    if (car.length === 0) {
      return acc;
    }
    const [{ year }, ...rest] = car;
    const value = acc[year] ? acc[year] + 1 : 1;
    return iter(rest, { ...acc, [year]: value });
  };
  return iter(cars, {});
};

const cars = [
  { brand: 'bmw', model: 'm5', year: 2014 },
  { brand: 'bmw', model: 'm4', year: 2013 },
  { brand: 'kia', model: 'sorento', year: 2014 },
  { brand: 'kia', model: 'rio', year: 2010 },
  { brand: 'kia', model: 'sportage', year: 2012 },
];

console.log(f(cars));
