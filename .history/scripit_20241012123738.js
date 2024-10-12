const qrinput = document.getElementById('qr-input');
const qrimg = document.getElementById('qr-img');
const qrbutton = document.getElementById('qr-button');

qrbutton.addEventListener('click',()=>{
    const inputValue = qrinput.ariaValueMax;
});

if(!inputValue){
    alert('Please enter a valid Url')
}