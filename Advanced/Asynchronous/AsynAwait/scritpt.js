function one() {
    return "one";
}

function sum() {
    let sum = 0;

    for (i = 1; i <= 10000; i++) {
        sum += i;
    }
    return sum;
}

function three() {
    return "three";
}

async function sumDelay() {
    let result = await sum();
    return result;
}

console.log(one());
sumDelay().then((res) => console.log(res));
console.log(three());