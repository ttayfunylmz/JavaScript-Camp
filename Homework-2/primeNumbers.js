//Write a program that lists all prime numbers up to 1000.
console.log("----------LISTING PRIME NUMBERS UP TO 1000----------")
function primeNumbers() {
    for (let i = 2; i <= 1000; i++) {
      let flag = 1
      for (let j = 2; j <= i/2; j++) {
        if (i % j == 0) {
          flag = 0
        }
      }
      if (flag == 1) {
        console.log(i + " is a prime number.");
      }
    }
  }

primeNumbers()