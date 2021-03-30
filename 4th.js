const inputIndex = 1

function checkPrimeNum(num) {
    // 1 is not prime
    if (num < 2) return false
    for(let i = 2; i < num; i += 1) {
        // if num modded by iteration i equal 0 that'd means there are integer i that can divide num, thus it is not a prime
        if (num % i === 0) return false
    }
    return true
}

function primeAt(index) {
    const primeNumArray = []
    let i = 0
    while (primeNumArray.length < index) {
        if (checkPrimeNum(i)) {
            primeNumArray.push(i)
        }
        i += 1
    }
    return primeNumArray[primeNumArray.length - 1]
}

console.time("1")
console.log(primeAt(10000))
console.timeEnd("1")
