function szamit() {
    let mag = parseInt(document.getElementById('cm').value)
    let suly = parseInt(document.getElementById('kg').value)
    document.getElementById('sajatbmi').textContent = Math.round((suly / (mag / 100) ** 2)* 100 / 100);
}
document.getElementById('szamitas').addEventListener('click',szamit)