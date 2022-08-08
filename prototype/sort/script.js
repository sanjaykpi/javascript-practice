    //   sort
    // The sort() method sorts an array alphabetically:

    //  sort  string  
let name=["sanjay","deepan","mani","jeni","arun","vairam","harish","karthi","mari"]
name.sort();
console.log(name);

//    sort  number
//    asanding order
let number=[60,30,80,55,13,4,96,20]
number.sort(function(a,b){return a-b});
console.log(number);

    //  desending order
let numbers=[60,30,80,55,13,4,96,20]
numbers.sort(function(a,b){return b-a});
console.log(numbers);