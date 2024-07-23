function one() {
    console.log("One");
}

function two(ok) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ok) {
                resolve("function two OK");
            } else {
                reject("Function two fail");
            }
        }, 2000);
    });
}

function threee() {
    console.log("Three");
}

one();
two(true)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
threee();