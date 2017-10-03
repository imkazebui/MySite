const img1 = require('./service1.jpg');
const img2 = require('./service2.jpg');
const img3 = require('./service3.jpg');
const img4 = require('./service4.jpg');

export default {
  title: 'WHY CHOOSE US ?',
  description: 'Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis',
  listItems: [
    {
      title: 'Professional Staff',
      description: 'Maecenas tempus, tellus eget condi men tum rhon cus, sem quam semper libero, sit amet adipiscing sem.',
      image: img1,
    },
    {
      title: '24/7 Services',
      description: 'Maecenas tempus, tellus eget condi men tum rhon cus, sem quam semper libero, sit amet adipiscing sem.',
      image: img2,
    },
    {
      title: 'Save money',
      description: 'Maecenas tempus, tellus eget condi men tum rhon cus, sem quam semper libero, sit amet adipiscing sem.',
      image: img3,
    },
    {
      title: 'Free Shipping',
      description: 'Maecenas tempus, tellus eget condi men tum rhon cus, sem quam semper libero, sit amet adipiscing sem.',
      image: img4,
    },
  ],
};
