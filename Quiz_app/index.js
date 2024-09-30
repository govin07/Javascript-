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

let currentQuestonIndex = 0;
let score = 0

function startQuiz(){
    currentQuestonIndex = 0;
    score = 0;
    showQuestion()
} 
function showQuestion(){
    let currentQuestiion = questions[currentQuestonIndex];
    let questiNumber = currentQuestonIndex + 1 ;
    questionPart.textContent =  questiNumber + "." + currentQuestiion.question

    currentQuestiion.option.forEach((answer) => {
        // console.log(answer)
        const button = document.createElement('button');
        button.classList.add("btn")
        button.textContent = answer
        buttons.appendChild(button)
        button.addEventListener('click' ,function(e){
            if(e.target.innerText == "New Delhi"){
                button.style.backgroundColor = "green";
            }
                
            
        })

    })
}
nextBtn.addEventListener('click', ()=>{
currentQuestonIndex++;
showQuestion()
})
startQuiz()