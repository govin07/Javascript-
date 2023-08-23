console.log('hello world')
const jsUser = {
    name: "govind",
    age: 20,
    location: "khandwa",
}

console.log(jsUser["name"]);
jsUser.name = "Govind singh solanki"
console.log (jsUser);
jsUser.age = 45
console.log (jsUser); 
jsUser.greeting = function(){
    console.log(`kya hal , ${this.name}`);
}
console.log(jsUser.greeting());



