//Write a program that lists all perfect numbers up to 1000.
console.log("----------LISTING PERFECT NUMBERS UP TO 1000----------")
function perfectNumbers() {
    for(let i = 1; i <= 1000; i++) {
        let sum = 0
        for(let j = 1; j < i; j++) {
            if(i % j == 0 ) {
                sum += j
            }
        }
        if(sum == i) {
            console.log(i + " is a perfect number.")
        }
    }
    
}

perfectNumbers()