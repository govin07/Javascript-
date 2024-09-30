const inputBox = document.querySelector('input');
const buttons = document.querySelector('button');
const listContainer = document.querySelector('#list-container')
// const button = document.createElement('button');
// let li = document.createElement('li');

 buttons.addEventListener('click', function(e){
  if(inputBox.value === ''){
    alert("please enter something");
  }
  else{
    let li = document.createElement('li');
    li.textContent = inputBox.value
    console.log(li)
    listContainer.appendChild(li);
    let button = document.createElement('button');
    button.classList.add('button')
    button.innerHTML = "\u00d7";
    li.appendChild(button)
  }
  inputBox.value = "";
  savedata()

 })
 listContainer.addEventListener('click' , function(e){
  e.target.button == "gray"
  listContainer.parentElement.nodeName
 })
 

 function savedata(){
    localStorage.setItem('data', listContainer.innerHTML)
 }
 function dataGet(){
   listContainer.innerHTML =  localStorage.getItem('data')
 }
 dataGet()