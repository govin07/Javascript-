const createBtn = document.querySelector('#Create-Btn')
const inputBox = document.querySelector('.input-box')
const inputDlt = document.querySelector('#Dlt');

createBtn.addEventListener('click', CreatingInputBOx)


function CreatingInputBOx(){
    const p = document.createElement('p');
const img = document.createElement('img');
img.setAttribute('id', 'Dlt')
img.src = "notes-app-img/images/delete.png";
p.setAttribute('contenteditable', 'true')
inputBox.appendChild(p).appendChild(img)

inputDlt.addEventListener('click',
    () => {
         console.log("govind")
    }
)
}

// inputDlt.addEventListener('click',
//     () => {
//          console.log("govind")
//     }
// )