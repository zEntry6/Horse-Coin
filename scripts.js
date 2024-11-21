let score = 0;

function addPoint() {
    score++;
    console.log("Koin diklik, skor saat ini: " + score);
    document.getElementById('score').textContent = score;
}

