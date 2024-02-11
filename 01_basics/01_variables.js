const accountId = 144553
let accountEmail = "harsh@gmail.com"
var accountPassword = "12345"
accountCity = "Katihar"
let accountState;

// accountId =2 // not allowed

accountEmail = "hchc.gmail.com"
accountPassword = "2211"
accountCity = "Bengalore"

// console.log(accountId);


/*
prefer not to use var
because of issue in block scope and sunctional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])