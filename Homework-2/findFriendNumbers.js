//Write a program that finds whether two numbers entered as parameters are friend numbers.
console.log("----------FINDING FRIEND NUMBERS----------")
function findFriendNumbers(number1,number2) {
    let sum1 = 0
    let sum2 = 0

    for(let i = 1; i < number1; i++) {
        if(number1 % i == 0) {
            sum1 += i
        }
    }

    for(let i = 1; i < number2; i++) {
        if(number2 % i == 0) {
            sum2 += i
        }
    }

    if(sum2 == number1 && sum1 == number2) {
        console.log(number1 + " and " + number2 + " are friend numbers.")
    }
    else {
        console.log(number1 + " and " + number2 + " are not friend numbers.")
    }
}

findFriendNumbers(1184,1210)