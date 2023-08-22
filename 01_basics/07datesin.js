let myDate = new Date()
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toUTCString());
console.log( typeof myDate);

let myCreatedDates = new Date(2023, 0 , 23 , 5, 3 )
    console.log(myCreatedDates.toLocaleDateString());