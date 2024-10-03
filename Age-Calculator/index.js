const calculateBtn = document.querySelector('#calculate-btn')

const span = document.querySelector('.span')

calculateBtn.addEventListener('click', calculate)

function calculate(){
    const input = document.querySelector('input').value
    const birthDay = new Date(input)
    console.log(birthDay.getFullYear())
    const today = new Date
    if (isNaN(birthDay)) {
        span.textContent = "Please enter a valid date.";
        return;
    }
    let age = today.getFullYear() - birthDay.getFullYear();
    const monthDiff = today.getMonth() - birthDay.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDay.getDate())) {
        age--;
        
    }

    span.textContent = `Your age is ${age} years.`;


    
    
}