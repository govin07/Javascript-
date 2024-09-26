const box1 = document.querySelector('#box1')
// const img1 = document.querySelector('#img1');
 const h21 = document.querySelector('h2')
 const img = document.createElement('img')

 async function movies() {
    const api = "https://dummyapi.online/api/movies"
    try{
        
        const response = await fetch(api)
        console.log(response)
        const data =  await response.json()
        console.log(data)
        data.forEach((e)=> {
          console.log(e.movie)   
          h21.textContent = `name is : ${e.movie}`
         const imgg =  img.innerHTML = ` <img id="img1" src="${e.image}" alt="img">`
         box1.appendChild(imgg)                 
        })
        
       
    //   
        
    }
    catch(error ){
        console.log(error)

    }
    
 }
 movies()
 