 


const randomColor = function () {
    const hax = "0123456789ABCDEF"
    let color = "#"
    for(let i = 0; i < 6 ; i++  ){
        color += hax[Math.floor(Math.random() * 16)]
        // console.log(color) 
    }
    return color   
}

document.querySelector("#start").addEventListener('click', function (e){
    console.log(e)
    document.body.style.backgroundColor = "grey"
}) 

    



