let qrInput = document.getElementById('qr-input');
let qrmg = document.getElementById('qr-img');
let qrbutton = document.getElementById('qr-button');

console.log(qrinput, qrimg, qrbutton);


qrbutton.addEventListener('click',()=>{
    const inputValue = qrinput.ariaValueMax;
});

if(!inputValue){
    alert('Please enter a valid Url');
    return;
}else{
    qrimg.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}';
    qrimg.alert = 'QR code for {inputValue}';
}