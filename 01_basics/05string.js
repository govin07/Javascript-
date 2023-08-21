const name = "govind singh solanki"
const repoCount = 50
console.log(`hello my name is ${name} and my repo is ${repoCount}`);
console.log(typeof String)
const gameName = new String ('govind-ji')

console.log(gameName[0]);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('ov'));
 const newString = gameName.substring(0, 4)
 console.log(newString);
 const anotherString = gameName.slice(-8, 4)
 console.log(anotherString);
 const url = "https://govindsingh.com/govind%20solanki"
 console.log(url.replace('%20', '_'));
 console.log(url.includes('raja'));

