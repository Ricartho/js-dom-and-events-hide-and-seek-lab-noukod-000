// function getFirstSelector(selector){
//   return document.querySelector(selector);
// }

const nestedTarget = () => document.querySelector('#nested .target');
const deepestChild = () => document.querySelector('#grand-node div div div div');
const getFirstSelector = (selector) => document.querySelector(selector); 
const increaseRankBy = (n) => {
    const rankedLists = document.querySelectorAll('.ranked-list');
}