const name = "Harsh"
const repoCount = 50

// console.log(name + repoCount + " value");
// String interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('harsh-hc-com')
// console.log(gameName[0]);
// console.log(gameName.__proto__);



// console.log(gameName.toUpperCase());

console.log(gameName.charAt(4));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4)
// console.log(newString);

const anotherString = gameName.slice(-8,5)
console.log(anotherString);

const newStringOne = "  harsh  "
console.log(newStringOne);
console.log(newStringOne.trim());
console.log(newStringOne.length);


const url ="https://harsh.com/harsh%20tiway"

console.log(url.replace('%20','-'))

console.log(url.includes('sunfar'))


console.log(gameName.split('-'));