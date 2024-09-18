const arr1 = ["govind", "singh " , "solanki"];
const arr2 = ['aditya', "singh ", "tawar"];

const objArr = [{
    "name": "saching",
    "age": 20,
}, {
    "name": "deepanshu",
    "age": 20,
} ,{
    "name": "vishal bhalse",
    "age" : 20,
}];
for (const i of objArr) {
   if(i.age == 20){
    console.log(`${i.name},your are same bro ${i.age}`)
   }
    
}

const govind = [" govind singh solanki"];
for (const name of govind) {
    if(name){
        console.log(name)

    }
    
}
const map = new Map()
map.set(objArr);

for(const key in map){
    console.log(key.length())

}







const addbhai = ["govind", "sachin", "aditya", "deepanshu"];

function call(call){
    console.log(call)

}
addbhai.forEach(call)





const num = 0;
const redu = [500, 2000 , 350 , 50]
redu.reduce((acc , value) => { return console.log(acc + value , num)
;
});