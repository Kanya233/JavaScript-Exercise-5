
// TODO: Create an array called numbers with values 1 through 5 
let numbers = [1, 2, 3, 4, 5];
// TODO: Write a for loop that prints each number in the array 
for(let m=0 ; m<numbers.length; m++) {
  console.log(numbers[m]);
}
// TODO: Write a while loop that counts down from 5 to 1 
let count = 5;
while (count > 0){
  console.log(count);
  count--;
}
// TODO: Create a loop that prints only even numbers from the numbers array 
for (let m=0 ; m<numbers.length ; m++){
  if (numbers[m] % 2==0){
    console.log(numbers[m]);
  }
  
}
// TODO: Create a loop that calculates the sum of all numbers in the array
let sum = 0;
for(let m =0 ; m<numbers.length ; m++){
  sum += numbers[m];
}
  console.log( "sum:",sum)
