let qrInput = document.getElementById('qr-input');
let qrImg = document.getElementById('qr-img');
let qrButton = document.getElementById('qr-button');
let downloadButton = document.getElementById('download-button');

qrButton.addEventListener('click', () => {
    let inputValue = qrInput.value;
    if (!inputValue) {
        alert('Please enter a valid URL');
        return;
    } else {
        const qrCodeSrc = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;