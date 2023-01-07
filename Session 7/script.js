const wrapper = document.getElementById('wrapper');
const qrInput = document.getElementById('input');
const button = document.getElementById('button');
const qrImg = document.getElementById('img');



button.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if(qrValue == "") return;
    button.innerText = "Generating Qr Code..."
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=350x350&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        button.innerText = "Generate Qr Code"
    })

})