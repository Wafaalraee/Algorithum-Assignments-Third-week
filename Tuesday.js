//Tuesday : Selection Sort
//Create function that's take array as input
//Create for loop
//Create two variable lowestValue [0]
//indexOfTheValue
//Create second loop
//Create an if statement => check if the index's value from my first
// loop > or <
//if it 's < we have to swap the values
//return our array
const selectionSort= (arr) =>{
  for (let i=0; i<arr.length; i++){
    let lowestValue =arr[i];
    let indexOfLowestValue = i;
    for(let j=i ; j<arr.length; j++){
      if(arr[j]< lowestValue){
        lowestValue = arr[j];
        indexOfLowestValue = j
      }
    }
    let temp = arr[i];
    arr[i] = arr[indexOfLowestValue]
    arr[indexOfLowestValue] = temp
  }
  return arr
}
console.log(selectionSort([5, -1 ,9, 4, 3, -7]))





