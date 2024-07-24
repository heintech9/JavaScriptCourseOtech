const listing = document.querySelector('.listing');
const detailPopup = document.getElementById("detail-popup");
const detail = document.getElementById("detail");
const close = document.getElementById("close");
const h2 = document.querySelector("#detail-popup .detail-content h2");
const description = document.querySelector("#detail-popup .detail-content p");
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

            detailBtn.onclick = function () {
                h2.textContent = item.name;
                description.textContent = item.text;
                detailPopup.style.display = "block";
            };
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
        detailBtn.onclick = function () {
            
            detailPopup.style.display = "block";
        };
    }
});

close.onclick = function () {
    detailPopup.style.display = "none";
};

function deleteItem(itemId) {
    const delUrl = `${url}/${itemId}`;

    fetch(delUrl, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log('Item deleted successfully:', data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}
