const name = "Saubhagya"
const repoCount = 50

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const nameCode = new String('Saubhagya')

// console.log(nameCode[0]);
// console.log(nameCode.__proto__);
// console.log(nameCode.length);
// console.log(nameCode.toUpperCase());
console.log(nameCode.charAt(2));
console.log(nameCode.indexOf('S'));
const newstring = nameCode.substring(0,4)
console.log(newstring)

const newPromo = nameCode.slice(-8,4)
console.log(newPromo);

const newstring1 = "    Saubhagya.    "
console.log(newstring1);
console.log(newstring1.trim());

const url = "https://saubhagya.com/saubhagya%20khandelwal"

console.log(url.replace('%20', '-'))

console.log(url.includes('saubhagya'))

console.log(nameCode.split('-'));
