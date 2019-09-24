// function getFirstSelector(selector){
//   return document.querySelector(selector);
// }

const nestedTarget = () => document.querySelector('#nested .target');
const deepestChild = () => return document.querySelector('#grand-node div div div div');

const getFirstSelector = (selector) => document.querySelector(selector); 