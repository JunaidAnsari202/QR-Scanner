let qrInput = document.getElementById('qr-input');
let qrImg = document.getElementById('qr-img');
let qrButton = document.getElementById('qr-button');

console.log(qrInput, qrImg, qrButton);


qrbutton.addEventListener('click',()=>{
    const inputValue = qrInput.value;


if(!inputValue){
    alert('Please enter a valid Url');
    return;
}else{
    qrImg.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}';
    qrImg.alert = 'QR code for {inputValue}';
}
