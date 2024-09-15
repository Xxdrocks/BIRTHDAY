const audio = document.getElementById('audioPlayer');
const controlButton = document.getElementById('controlButton');

const lastTime = localStorage.getItem('audioTime');
if (lastTime) {
    audio.currentTime = lastTime; 
}

audio.addEventListener('timeupdate', () => {
    localStorage.setItem('audioTime', audio.currentTime);
});

controlButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        controlButton.textContent = 'Pause';
    } else {
        audio.pause();
        controlButton.textContent = 'Play';
    }
});

window.addEventListener('storage', (event) => {
    if (event.key === 'audioTime') {
        audio.currentTime = event.newValue;
    }
});

window.addEventListener('load', () => {
    if (!audio.paused) {
        audio.play();
    }
});

