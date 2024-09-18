// const govind = new String("my name is govind singh solanki me badiya gyasur me rahta hu")
// const aditya = "mera naam aditya singh tawar he me pipliya tahar me rahta hu or me ek software developer hu ! thik he ";
// console.log(aditya)
// console.log(govind.toLocaleLowerCase());
// console.log(govind.slice(0, 4))
// console.log(govind.replace("govind", "sand"));
// console.log(aditya.split("mera "));


// const min = 8;
// const max = 15;

// console.log(Math.floor(Math.random() * (max - min + 1)  + min)); 

const govind = ["fullname-govind", "address-badiya gyasur" ];
const aditya = ["full name - aditya singh tawar", "address -pipliya tahar "]
console.log(govind);
console.log(aditya);
govind.push("father's name - Baban singh solanki")
console.log(govind);
govind.slice(0,2)
console.log(aditya.toString());
govind.push(...aditya)
console.log(govind);