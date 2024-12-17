let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrImg");
let qrTxt = document.getElementById("qrTxt");

function genQR(){

    if(qrTxt.value != ""){
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrTxt.value;
        imgBox.classList.add('showImg');
    }
    else{

        qrTxt.classList.add("empty-field");
        setTimeout(()=>{
            qrTxt.classList.remove("empty-field");
        },1000)

    }
    
}