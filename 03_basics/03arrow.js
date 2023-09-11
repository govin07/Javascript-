const user = {
    username: "govind",

    price: 333,
     
    welcomeMessage: function(){
        console.log(`${this } , WELCOME TO WEBSITE `);
    }
}
function chai(){
    console.log(this);
}
chai()
const chai = () => {
    let username = "govind"
    console.log(this.username);

}
chai()
//arrow function
const addTwo = (num1,num2) => {
    return num1 + num2
}
addTwo (3,  4)

