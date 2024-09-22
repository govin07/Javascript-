 const buttons = document.querySelectorAll('button');
 const name = document.querySelector('h1');


 function addName(value) {
    name.textContent = `${value}`
    
 }

 buttons.forEach((button) =>
{
      button.addEventListener('click', function(e){
             const value = e.target.id
             addName(value)
      })
}
)