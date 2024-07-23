const listing = document.querySelector('.listing');
const detailPopup = document.getElementById("detail-popup");
const detail = document.getElementById("detail");
const close = document.getElementById("close");
const url = "http://127.0.0.1:8000/api/comments";
async function fetchData(url) {
    try {
        const jsonData = await fetch(url);
        const results = await jsonData.json();
        return results;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

fetchData(url).then(data => {
    if (Array.isArray(data)) {
        data.map(item => {
            const h1 = document.createElement('h1');
            const p = document.createElement('p');
            const detailBtn = document.createElement('button');
            detailBtn.setAttribute('id', 'detail');

            h1.textContent = item.name;
            p.textContent = item.text;
            detailBtn.textContent = "Detail";

            listing.append(h1, p, detailBtn);
        });
    } else {
        const item = data;
        const h1 = document.createElement('h1');
        const p = document.createElement('p');
        const detailBtn = document.createElement('button');
        detailBtn.setAttribute('id', 'detail');

        h1.textContent = item.name;
        p.textContent = item.text;
        detailBtn.textContent = "Detail";

        listing.append(h1, p, detailBtn);
    }
});

detail.onclick = function () {
    detailPopup.style.display = "block";
};

close.onclick = function () {
    detailPopup.style.display = "none";
};

window.onclick = function (event) {
    if (event.target === detailPopup) {
        detailPopup.style.display = "none";
    }
};
