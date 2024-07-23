let btn = document.getElementById('btn');
let body = document.querySelector('.body');
let title = document.querySelector('.title');
let getData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                const data = xhr.responseText;
                const joke = JSON.parse(data);
                title.textContent = joke.id;
                body.textContent = joke.value;
            } else {
                console.error("Error: " + xhr.status);
            }
        }
    };
    xhr.send();
};

btn.addEventListener('click', getData);