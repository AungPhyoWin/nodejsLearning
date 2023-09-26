const aname = 'Max';
let age = 30;
let  hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobby){
    return ('Name is ' + userName  + ', age is ' + userAge + ' User hobby is ' + userHasHobby);  
}
console.log(summarizeUser(aname,age,hasHobbies)); /// updated with with let

age = 31;
hasHobbies = false;

const summarizeUser1 = (userName, userAge, userHasHobby) => {
    return ('Name is ' + userName  + ', age is ' + userAge + ' User hobby is ' + userHasHobby);  

}

console.log(summarizeUser1(aname,age,hasHobbies)); // added with arrow function
