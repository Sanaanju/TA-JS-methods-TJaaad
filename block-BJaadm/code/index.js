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

// Create an array peopleName and store value of sex key from persons array
function people (x){
  return x.name;
}
let peopleName = persons.map(people);
// Create an array peopleGrade and store the value of grade key from persons array
function people1(y){
  return y.grade;
}
let peopleGrade = persons.map(people1);
// Create an array peopleSex and store the value of sex key from persons array
function people2(z){
  return z.sex
}
let peopleSex = persons.map(people2)
// Log the filtered named of people in peopleName that starts with 'J' or 'P'
function named(filt){
   return filt.startsWith("J") || filt.startsWith("P")
}
let peopleName1 = peopleName.filter(named)
// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
function namedd (per){
  return per.startsWith("A") || per.startsWith("C")
}
let people3 = peopleName.filter(namedd)
// Log all the filtered male ('M') in persons array
function male(se){
  return se == "M";
}
let sex1 = peopleSex.filter(male)
// Log all the filtered female ('F') in persons array
function female(se){
  return se === "F";
}
let checkFemale = peopleSex.filter(female)
// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
function femalee (se){
  return  se.name.startsWith("C") || se.name.startsWith("J") && se.sex === "F" 
}
let checkFemal = persons.filter(femalee)
// Log all the even numbers from peopleGrade array
function evennumber (even){
  return even % 2 === 0;
}
let peopleGrade1 = peopleGrade.filter(evennumber);
// Find the first name that starts with 'J' in persons array and log the object
function firstName (first){
  return first.name.startsWith("J")
}
let nameStartsWith = persons.find(firstName);

// Find the first name that starts with 'P' in persons array and log the object
function firstP (first){
  return first.name.startsWith("P")
}
let nameStartP = persons.find(firstP)
// Find the first name that starts with 'J', grade is greater than 10 and is a female
function firstJ (first){
  return first.name.startsWith("J") && first.grade > 10 && first.sex === "F"
}
let nameStartsJ =persons.find(firstJ)
// Filter all the female from persons array and store in femalePersons array
function femalePerson (first){
  return first.sex === "F"
}
let femalePersons = persons.filter(femalePerson)
// Filter all the male from persons array and store in malePersons array
function malePerson (first){
  return first.sex === "M"
}
let malePersons = persons.filter(malePerson)
// Find the sum of all grades and store in gradeTotal
function grade (acc,cv){
   acc = acc + cv.grade
   return acc;
}
let gradeTotal = persons.reduce(grade,0);
// Find the average grade
function grade1 (acc,cv){
  acc = acc + cv.grade
  return acc 
}
let gradeTotal1 = persons.reduce(grade1,0)/persons.length;
// Find the average grade of male
let gradeTotal2 = malePersons.reduce(grade1,0)/ malePersons.length;
// Find the average grade of female
let averageFemale = femalePersons.reduce(grade1,0)/femalePersons.length;
// Find the highest grade
function highest (acc,cv){
  if(acc < cv){
    acc = cv
  } return acc;
}
let accum = peopleGrade.reduce(highest,0)

// Find the highest grade in male
let highestMaleGrade = persons.filter(x => {
  return x.sex === "M" 
}).sort((a,b) => a.grade - b.grade).pop();

// Find the highest grade in female
let highestFemaleGrade = persons.filter(x => {
  return x.sex === "F"
}).sort((a,b) => a.grade - b.grade).pop();
// Find the highest grade for people whose name starts with 'J' or 'P'
let highestGradePeople = persons.filter(x => {
  return x.name.startsWith("J") || x.name.startsWith("P");
}).sort((a,b) => a.grade - b.grade).pop();
// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
console.log(peopleGrade.sort((a, b) => a - b)); // Yes, elements of people grade changes.
// Sort the peopleGrade in descending order
console.log(peopleGrade.sort((a, b) => b - a));
// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
console.log([...peopleGrade].sort((a, b) => b - a));
// Sort the array peopelName in ascending `ABCD..Za....z`
console.log(peopleName.sort());
// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
console.log([...peopleName].sort());