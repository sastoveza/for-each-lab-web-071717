function iterativeLog (array) {
  array.forEach(callback);
}


function callback (element, index, array) {
  console.log(`${index}: ${element}`);
  }



function iterate (callback) {
  array = [1, 2, 3, 4, 5];
  array.forEach(callback);
  return array;
}


function callback (element, index) {
  console.log(`${index}: ${element}`);
}


function doToArray (array, callback) {
  array.forEach(callback);
}