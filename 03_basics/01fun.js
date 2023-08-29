function sayMyName(){
    console.log("g");
console.log("o");
console.log("v");
console.log("i");
console.log("n");
}
//sayMyName()
function addTwoNumbers( number1, number2 ){
    console.log( number1 + number2);
  

}
addTwoNumbers(3, 4)
function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username");
        return

    }
    return `${ username} just logged in`

}
console.log(loginUserMessage());
