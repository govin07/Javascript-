const createBtn = document.querySelector('#Create-Btn')
const inputBox = document.querySelector('.input-box-container')
// const inputDlt = document.querySelector('#Dlt');

createBtn.addEventListener('click', CreatingInputBOx)


function CreatingInputBOx(){
    const p = document.createElement('p');
const img = document.createElement('img');
img.setAttribute('id', 'Dlt')
img.src = "notes-app-img/images/delete.png";
p.className = "input-box"
p.setAttribute('contenteditable', 'true');

p.appendChild(img)
inputBox.appendChild(p)


}

// input-box-container.addEventListener('click', (e)=>{
//     if(e.target.tagName === "IMG"){
//         // inputBox.parentElement.remove()
//     }
// })

// inputDlt.addEventListener('click',
//     () => {
//          console.log("govind")
//     }
// )