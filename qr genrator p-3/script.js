let qr = document.querySelector(".qr")
let qrimg = document.getElementById("qrimage")
console.log(qrimg)
let qrtext = document.getElementById("qrtext")
let generatebtn = document.getElementById("generatebtn")
let qrapi = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
function clickqr() {
    if (qrtext.value.length > 0) {

        console.log(qrimg);
        qrimg.src = qrapi + qrtext.value;
        console.log(qrimg);
        qr.style.display = "block";
    }
    else if (qrtext.value.length == 0) {
        generatebtn.classList.add("error");
        setTimeout(() => {
            generatebtn.classList.remove("error");
        }, 2000);
    }
}
