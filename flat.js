const fs = require('fs');

const startPrice = 25000;
const yearPayment = 6000;
const taxes = [1.1, 1.11, 1.12, 1.13, 1.14, 1.15, 1.16, 1.17, 1.18];

const countPayment = (acc, paymentLeft, tax) =>
  (paymentLeft < yearPayment ? {
    years: acc.years + 1,
    haveToPay: acc.haveToPay + paymentLeft,
  } :
    countPayment({
      years: acc.years + 1,
      haveToPay: acc.haveToPay + yearPayment,
    }, Math.round((paymentLeft - yearPayment) * tax), tax));

const result = {
  startPrice,
  yearPayment,
  payment: taxes.map(t =>
    ({
      tax: `${Math.round((100 * t) - 100)}%`,
      ...countPayment({
        years: 0,
        haveToPay: 0,
      }, startPrice * t, t),
    })),
};


fs.writeFileSync('./price.json', JSON.stringify(result));
