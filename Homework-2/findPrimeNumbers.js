
//Write a function that you can send as many parameters as you want with JavaScript.
//For each number you send to this function, write whether it is prime or not as the output.
//Finding Prime Numbers
console.log("----------FINDING PRIME NUMBERS")
function findPrimeNumbers(...numbers) {
    for(let i = 0; i < numbers.length; i++) {
        let flag = 1
        for(let j = 2; j <= numbers[i]/2; j++) {
            if(numbers[i] % j == 0){
                console.log(numbers[i] + " is not a prime number.")
                flag = 0
            }
        }
        if(flag == 1) {
            console.log(numbers[i] + " is a prime number.")
        }
    }
}

findPrimeNumbers(13,46,78,7,5,3,6,2,-5)