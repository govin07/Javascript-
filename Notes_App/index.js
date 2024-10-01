const createBtn = document.querySelector('#Create-Btn')
const inputBox = document.querySelector('.input-box-container')
const DltBtn = document.querySelector('.input-box') 

createBtn.addEventListener('click', CreatingInputBOx)


function CreatingInputBOx(){
    const p = document.createElement('p');
const img = document.createElement('img');
img.setAttribute('id', 'Dlt')
img.src = "notes-app-img/images/delete.png";
img.className = "input-box"
p.setAttribute('contenteditable', 'true');

p.appendChild(img)
inputBox.appendChild(p)


}

DltBtn.addEventListener('click', (e)=>{
    
    if(e.target.tagName === "IMG"){
    
         DltBtn.parentElement.remove()
    }
})

