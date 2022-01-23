const req = new XMLHttpRequest();

req.onload = function() {
    const data = JSON.parse(this.responseText);
    const price = data.ticker.price;
    document.getElementById('#btc_price').innerText = price;
    
}

req.onerror = function() {
    console.log('Error');
    console.log(this);
}

req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd');

document.getElementById('#change_price').onclick = function () {
    req.send();
}