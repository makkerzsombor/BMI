function szamit() {   
    
    var element = document.getElementById("sovany");
    element.classList.remove("sargatable");
    var element = document.getElementById("normal");
    element.classList.remove("sargatable");
    var element = document.getElementById("tulsuly");
    element.classList.remove("sargatable");
    var element = document.getElementById("tul1");
    element.classList.remove("sargatable");
    var element = document.getElementById("tul2");
    element.classList.remove("sargatable");
    var element = document.getElementById("tul3");
    element.classList.remove("sargatable");

    let mag = parseInt(document.getElementById('cm').value)
    let suly = parseInt(document.getElementById('kg').value)
    let ered = suly / (mag / 100) ** 2;
    document.getElementById('sajatbmi').textContent = 'Az ön BMI értéke: ' + ered.toFixed(2);

    let low = (18.5*(mag/100)**2).toFixed(1);
    let high = (24.9*((mag/100)**2)).toFixed(1);
    let atlag = ((low + high)/2);
    document.getElementById("idealisbmi").innerHTML = "Az ideális testtömege: " + atlag + " kg";
    document.getElementById("kozott").innerHTML = low + " - " + high + " kg";
    console.log(atlag);    

    if (ered.toFixed(2)<=18.5) {
        element = document.getElementById("sovany");
        element.classList.add("sargatable");
    }else if (ered.toFixed(2)<=24.9) {
        element = document.getElementById("normal");
        element.classList.add("sargatable");
    }else if(ered.toFixed(2)<=29.9){
        element = document.getElementById("tulsuly");
        element.classList.add("sargatable");
    }else if(ered.toFixed(2)<=34.9){
        element = document.getElementById("tul1");
        element.classList.add("sargatable");
    }else if(ered.toFixed(2)<=39.9){
        element = document.getElementById("tul2");
        element.classList.add("sargatable");
    }else{
        element = document.getElementById("tul3");
        element.classList.add("sargatable");
    }
}
document.getElementById('szamitas').addEventListener('click',szamit)