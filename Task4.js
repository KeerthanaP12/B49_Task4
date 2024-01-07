let userDetails = {
    name: "Keerthana",
    age: 24,
    email: "keerthana@gmail.com",
    mobileNumber: 9788194612
}
 
for(let key in userDetails){
    console.log(userDetails[key]);
}
 
let keys = Object.keys(userDetails);
// [name, age, email]
console.log('Using Keys... For of')
for(let key of keys){
    console.log(userDetails[key])
}
 
console.log('Using for loop')
for(let i = 0; i < keys.length; i++){
    let key = keys[i];
    console.log(userDetails[key]);
}
 
console.log('Using forEach')
keys.forEach(key => {
    console.log(userDetails[key]);
})