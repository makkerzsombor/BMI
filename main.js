function szamit() {
    let mag = parseInt(document.getElementById('cm').value)
    let suly = parseInt(document.getElementById('kg').value)
    let ered = suly / (mag / 100) ** 2;
    document.getElementById('sajatbmi').textContent = 'Az ön BMI értéke: ' + ered.toFixed(2);
    
}
document.getElementById('szamitas').addEventListener('click',szamit)