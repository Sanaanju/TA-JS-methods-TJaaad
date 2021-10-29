let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];
// NOTE: Use reduce method whereever you can to solve this exercise:

// Find the average grade

let peopleGrade = persons.map((person) => person.grade);

let gradeAverage =  peopleGrade.reduce((acc ,cv)=> {
  acc = acc + cv
  return acc
} ,0) / peopleGrade.length

console.log(gradeAverage)



// Find the average grade of male

let maleGrade = persons.filter((person) => person.sex == "M").map((person) => person.grade)

let averageMaleGrade = maleGrade.reduce((acc ,cv)=> {
  acc = acc + cv
  return acc
} ,0) / maleGrade.length


console.log(averageMaleGrade);


// Find the average grade of female
let femaleGrade = persons.filter((person) => person.sex == "F").map((person) => person.grade)

let averageFemaleGrade = femaleGrade.reduce((acc ,cv)=> {
  acc = acc + cv
  return acc
} ,0) / femaleGrade.length


console.log(averageFemaleGrade);





// Find the highest grade


let heighestGrade = [...peopleGrade].sort((a,b) => a-b).pop();

console.log(heighestGrade)


// Find the highest grade in male
let heighestGradeMale = [...maleGrade].sort((a,b) => a-b).pop();

console.log(heighestGradeMale)



// Find the highest grade in female

let heighestGradeFemale = [...femaleGrade].sort((a,b) => a-b).pop();

console.log(heighestGradeFemale)


// Find the highest grade for people whose name starts with 'J' or 'P'

let peopleNameWith  = persons.filter((person) => person.name.startsWith("J") || person.name.startsWith("P"))

let peopleGradeWithName = peopleNameWith.map((people) => people.grade)

let heightGradeForpjName = [...peopleGradeWithName].sort((a,b) => a - b).pop();


console.log(heightGradeForpjName);




const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig',
];

//Use the fruitBasket array to create an object where key will be the fruit and value will be the number of times
//hat fruit has appeared in the array. Store it in new variable fruitsObj

let finalFruitsObj = fruitBasket.reduce((acc ,cv)=>{
  if( acc[cv]){
    acc[cv] = acc[cv] + 1
  } else{
    acc[cv] = 1;
  }
  return acc
}

, {})

console.log(finalFruitsObj)


//Output: 
//{banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}

Object.keys(finalFruitsObj).reduce((acc,cv) =>{
  acc = acc.concat([[cv, finalFruitsObj[cv]]])
  return acc
} , [])



/* 
Use the fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times
that fruit appeared. Use the variable defined above (fruitsObj). To get all the keys of an array you can use Object.keys()
Output: 
[['banana', 2], ['cherry', 3], ['orange', 3], ['apple', 2], ['fig', 1]]
*/

const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

// Using reduce flat data array

let final =data.reduce((acc , cv) =>{
  acc = acc.concat(cv)

  return acc
} , [])

console.log(final)


/*let flatData = data.flat(Infinity)
let finalData = flatData.reduce((acc, cv)=>{
  acc = acc + cv
  return acc
}, 0)
console.log(finalData)*/



const dataTwo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11], 12],
];

/*let finalData =[];
function cb(dataTwo){
  for( let i = 0 ; i < dataTwo.length; i++){
    finalData = finalData + dataTwo[i]
  
  }
  return finalData
}
console.log(cb(dataTwo));*/

let flatDataTwo = dataTwo.reduce((acc ,cv ) =>{


  acc = acc.concat(cv.flat(Infinity))
  return acc
} , [])


//console.log(flatDataTwo)
// Using reduce flat dataTwo array

/*
Create these functions which accepts a number value and returns a number value:
  - `increment` adds one to the input value
  - `double` doubles the input value
  - `decrement` decrement 1 from the value 
  - `triple` triples the input 
  - `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)
*/

function increment(num){
  return num + 1;
}

console.log(increment(43));


function double(num){
  return num * 2
}

console.log(double(43));

function decrement(num){
  return num -  1;
}
console.log(decrement(43));


function triple(num){
  return num * 3
}
console.log(triple(43));

function half(num){
  return Math.round(num / 2) 
}

console.log(half(43))

let pipeline = [
  increment,
  double,
  decrement,
  decrement,
  double,
  triple,
  half,
  increment,
];

/*
Using the pipeline variable that contains the collection of functions, taking the initial value 3 find the output.
NOTE: Initial value will be passed to first function the output of that function will be the input to next function.
EXAMPLE:
  initialValue - 3
  increment(3) - return 4
  double(4) - return 8
  decrement(8) - return 7
  ...
*/

let finalPipeline = pipeline.reduce((acc , cv) =>{
  acc = cv(acc);
  return acc;

} , 3)

console.log(finalPipeline);


let pipeline2 = [
  increment,
  half,
  double,
  decrement,
  decrement,
  triple,
  double,
  triple,
  half,
  increment,
  triple,
];

// Find the output using pipeline2 the initial value if 8

let finalPipeline2 = pipeline2.reduce((acc , cv) =>{
  acc = cv(acc);
  return acc;

} , 8)

console.log(finalPipeline2);
