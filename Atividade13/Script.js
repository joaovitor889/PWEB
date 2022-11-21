function mClick(obj){
    let txt = document.getElementById('Texto').value;
    let maiusculo = document.getElementById('Maiusculo');
    let minusculo = document.getElementById('Minusculo');
    if(maiusculo. checked && minusculo. checked) {
        alert("Só pode ser escolhido um");
    }else if(maiusculo. checked){
        alert(txt.toUpperCase());
    }else if(minusculo. checked){
        alert(txt.toLowerCase())
    }
}