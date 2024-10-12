let qrInput = document.getElementById('qr-input');
let qrImg = document.getElementById('qr-img');
let qrButton = document.getElementById('qr-button');
let downloadLink = document.getElementById('download-link');

console.log(qrInput, qrImg, qrButton);


qrButton.addEventListener('click',()=>{
    let inputValue = qrInput.value;


if(!inputValue){
    alert('Please enter a valid Url');
    return;
}else{
    qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
    qrImg.alt = `QR code for ${inputValue}`;
    // Make the download button visible
    downloadButton.style.display = 'inline'; // Show the download button
        
    // Set up download functionality
    downloadButton.onclick = () => {
        const link = document.createElement('a');
        link.href = qrCodeSrc; // Set the download link
        link.download = 'qr-code.png'; // Suggest a filename
        document.body.appendChild(link); // Append to the body
        link.click(); // Simulate a cl
        document.body.removeChild(link);
   
}

});