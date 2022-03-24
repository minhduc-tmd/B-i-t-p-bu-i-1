const arr1 = ['John', 'Pete', 'Mary']
const arr2 = ['Mary', 'Henry', 'Harry']
const arr3 = arr1.concat(arr2);

let arr = arr3.filter((item, index) => {
   return arr3.indexOf(item) === index
});
console.log(arr);