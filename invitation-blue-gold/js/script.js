const music = document.getElementById("weddingMusic");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

if (music) {
    music.play().then(() => {
        playing = true;
    }).catch(() => {
        // Browsers may block autoplay; the existing music button can start it.
    });
}

const countdown = document.querySelector(".countdown");

if (countdown) {
    const units = countdown.querySelectorAll("strong");
    const weddingDate = new Date("2026-11-08T18:00:00");

    function updateCountdown() {
        const remaining = Math.max(0, weddingDate.getTime() - Date.now());
        const seconds = Math.floor(remaining / 1000);
        const values = [
            Math.floor(seconds / 86400),
            Math.floor((seconds % 86400) / 3600),
            Math.floor((seconds % 3600) / 60),
            seconds % 60
        ];

        units.forEach((unit, index) => {
            unit.textContent = String(values[index]).padStart(2, "0");
        });
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

if (musicBtn) {

    musicBtn.addEventListener("click", () => {

        if (playing) {

            music.pause();
            musicBtn.innerHTML = "🔇";
            playing = false;

        } else {

            music.play();
            musicBtn.innerHTML = "🎵";
            playing = true;

        }

    });

}
