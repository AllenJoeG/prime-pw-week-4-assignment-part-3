console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// In the beginning, there was basket.
let basket = [];
// Stretch #1
const maxItems = 5;

// Stretch goal #2
function isFull(){
  if (basket.length < maxItems){
    return false;
  } else {
    return true;
  }
}
// Required feature and Stretch goal #3
function addItem(item){
  if (isFull() === true){
    console.log('Item cannot be added, basket is full.');
    return false
  } else {
    basket.push(item);
    console.log(`${item} successfully added to basket.`)
    return true;
  }
}
// Required feature
function listItems(array){
  for (let item in array){
    console.log(item);
  }
}
// Required feature. Take food out of Bezos' corpulent, alien maw.
function empty(){
  basket = [];
  return console.log('You have emptied your basket.')
}
//Stretch goal #4
function removeItem(itemStr){
  let removedItem = basket.indexOf(itemStr);
  basket.splice(basket.indexOf(itemStr), 1);
  return removedItem || null;
}
