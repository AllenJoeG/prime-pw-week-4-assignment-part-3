console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// In the beginning, there was basket.
let basket = [];
// Stretch goal #1
const maxItems = 5;

// Stretch goal #2.
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
    console.log(`${item} cannot be added, basket is full. Returning false.`);
    return false
  } else {
    basket.push(item);
    console.log(`${item} successfully added to basket. Returning true`)
    return true;
  }
}
// Required feature.
function listItems(){
  for (let item of basket){
    console.log(item);
  }
}
// Required feature. Take food from Bezos' corpulent, alien baby maws.
function empty(){
  basket = [];
  return console.log('You have emptied your basket.')
}
//Stretch goal #4
function removeItem(itemStr){
  let index = basket.indexOf(itemStr);
  let removedItem = basket[index];
  if (index != -1){
    basket.splice(basket.indexOf(itemStr), 1);
  }
  return removedItem || null;
}
// Let the testing begin. Fill 'er up.
console.log('--TESTING addItem:');
addItem('food');
addItem('drink');
addItem('condiments');
addItem('impulse buy');
addItem('protection plan for food');

//Testing listItems()
console.log("--TESTING listItems(basket):");
listItems(basket);

//Testing removeItem()
console.log("--TESTING 'removeItem('condiments')':", removeItem('condiments'));
console.log("--TESTING 'removeItem('SOUP')':", removeItem('SOUP'));
console.log('--Logging basket:');
console.log(basket);

//Refilling basket  to test overfill attempts
addItem('single banana');

//Testing overfill attempts
console.log('--TESTING addItem() on a 6th item:');
addItem('single banana');
console.log("--TESTING addItem() within this console.log on a 6th item:", addItem('single banana'));

//Testing empty()
console.log('--TESTING empty()');
empty();
console.log('Logging basket:', basket);
