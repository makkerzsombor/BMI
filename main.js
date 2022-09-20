function szamit() {
    let mag = parseInt(document.getElementById('cm').value)
    let suly = parseInt(document.getElementById('kg').value)
    let ered = suly / (mag / 100) ** 2;
    document.getElementById('sajatbmi').textContent = 'Az ön BMI értéke: ' + ered.toFixed(2);
    if (ered.toFixed(2)<=18.5) {
        let element = document.getElementById("sovany");
        element.classList.add("sargatable");
    }else if (ered.toFixed(2)<=24.9) {
        let element = document.getElementById("normal");
        element.classList.add("sargatable");
    }else if(ered.toFixed(2)<=29.9){
        var element = document.getElementById("tulsuly");
        element.classList.add("sargatable");
    }else if(ered.toFixed(2)<=34.9){
        var element = document.getElementById("tul1");
        element.classList.add("sargatable");
    }else if(ered.toFixed(2)<=39.9){
        var element = document.getElementById("tul2");
        element.classList.add("sargatable");
    }else{
        var element = document.getElementById("tul3");
        element.classList.add("sargatable");
    }
}
document.getElementById('szamitas').addEventListener('click',szamit)