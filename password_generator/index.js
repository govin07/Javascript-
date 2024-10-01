const passwordText = document.querySelector("#password-space"
);
const GenerateBtn = document.querySelector('#btn');
const copyBtn = document.querySelector('#img');

const lenght = 12;
let UpperCase = "ABCDEFGHIJKLMNOPQISTUVWXZY";
let lowerCase = "abcdefghijklmnopqistuvwxyz"
let number = "0123456789";
let symbols = "~!@#$%^&*()_+|?><,./";
let allChats = UpperCase + lowerCase + number + symbols;
//on click function password generating
GenerateBtn.addEventListener('click',passSection)
// on click function for copy text from input field
copyBtn.addEventListener('click', textCopy)

//This function is generating random password
function passSection(){
    let password = "";
    password  += UpperCase[Math.floor(Math.random() * UpperCase.length)];
    
    password  += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    
    password  += number[Math.floor(Math.random() * number.length)];
    
    password  += symbols[Math.floor(Math.random() * symbols.length)];
    
    while(lenght >= password.length){
        password += allChats[Math.floor(Math.random() * allChats.length)];
    }
    
    passwordText.value = password;
    
}

function textCopy(){
    passwordText.select();
    passwordText.setSelectionRange(0, 99999);
     navigator.clipboard.writeText(passwordText.value)
     alert(`copied the text ${passwordText.value}`)
}



