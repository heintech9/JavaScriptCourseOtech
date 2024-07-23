const countryData = function (country){
    const requestData = new XMLHttpRequest();

    requestData.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    requestData.send();

    requestData.addEventListener('load', function(){
       if (requestData.status == 200){
        const data = JSON.parse(this.responseText);
        console.log(data);
       } else {
        alert(`Error: ${requestData.status} Country ${requestData.statusText}`);
       }
    })
}

countryData('Myanmar');