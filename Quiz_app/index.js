const questions = [{
    question: "what is capital of india",
    option: ["Delhi", 'New Delhi', "Mumbai", "Bhopal",],
    answer: "New Delhi",
},
{
    question: "who is PM of India",
    option: ["Shree Narendra Modi", 'Shivraj singh chouhan', "rahul Ghandi", "Jai shankar",],
    answer: "Shree Narendra Modi",
},
{
    question: "which state is heart of india",
    option: ["MP", 'UP', "AP", "Goa",],
    answer: "MP",
},
{
    question: "who is the richest man in india",
    option: ["Ambani", 'Adani', "Birla", "Ratan Tata",],
    answer: "Ambani",
}
]
const questionPart = document.querySelector('#question-part');
const buttons = document.querySelector('.answer-btn');
const nextBtn = document.querySelector('#next')

function start(){
    const button = document.createElement('button');
    questions.forEach((item) => {
         questionPart.textContent = item.question
         button.classList.add('btn')
         button.textContent = item.option;
         buttons.appendChild(button)
         
    })
}
start()