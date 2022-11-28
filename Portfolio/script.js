function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    }
    else{
        menuMobile.classList.add('open');
    }
}
function mPassa(){
    var vCV = document.getElementById("CV");
    vCV.innerHTML = "Baixe o meu curriculo";
}

function mEsconde(){
    var vCV = document.getElementById("CV");
    vCV.innerHTML = "";
}