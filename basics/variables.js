const accountId = 1453
let accountEmail = "aidizeon@gmail.com"
var accountPassword = "1234" //Prefer not to use 'var' keyword because of issue in blockscope and functional scope
accountCity = "Kanchanpur"

let accountState;

// accountId = 354 // we can't change the value of const keyword

console.log(accountId)

accountEmail = "jeewanaidi@gmail.com"
accountPassword = "jaharh34"
accountCity = "Bankatty"

console.table([accountEmail, accountPassword, accountCity, accountState])



