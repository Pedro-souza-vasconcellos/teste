const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const trackName = document.getElementById('track-name');
const cover = document.getElementById('cover');
const progress = document.getElementById('progress');
const currentTimeElem = document.getElementById('current-time');
const durationElem = document.getElementById('duration');

const tracks = [
    { src: 'assets/audios/Villa-Lobos-Valsa-mística.mp3', name: 'Valsa Mística - Villa Lobos ', cover: 'assets/images/fotosPlayer/valsaMistica.jpg' },
    { src: 'assets/audios/Villa-Lobos-Bailado-infernal.mp3', name: 'Bailado Infernal - Villa Lobos', cover: 'assets/images/fotosPlayer/bailado.jpg' },
    {src: 'assets/audios/Pequena.mp3', name : 'Pequena Suite: l. Romancette - Villa Lobos', cover : 'assets/images/fotosPlayer/pequena.jpg'},
    {src: 'assets/audios/Villa-Lobos-Rodante.mp3', name : 'Rodante - Villa Lobos', cover : 'assets/images/fotosPlayer/rodante.jpg'},
    {src: 'assets/audios/Villa-Lobos-Afiandeira.mp3', name : 'A fiandeira - Villa Lobos', cover : 'assets/images/fotosPlayer/afia.jpg'},
    {src: 'assets/audios/Villa-Lobos-OTrenzinhoCaipira.mp3', name : 'O Trenzinho Caipira - Villa Lobos', cover : 'assets/images/fotosPlayer/trem.jpg'},
    {src: 'assets/audios/BachianasBrasileiras.mp3', name : 'Bachianas Brasileiras No. 5 - Villa Lobos', cover : 'assets/images/fotosPlayer/brasileiras.webp'},
];

let currentTrack = 0;

function loadTrack(trackIndex) {
    const track = tracks[trackIndex];
    audio.src = track.src;
    trackName.textContent = track.name;
    cover.src = track.cover;
    audio.addEventListener('loadedmetadata', () => {
        progress.max = audio.duration;
        durationElem.textContent = formatTime(audio.duration);
    });
}

function playTrack() {
    if (audio.paused) {
        audio.play();
        playButton.textContent = 'PAUSE';
    } else {
        audio.pause();
        playButton.textContent = 'PLAY';
    }
}

function playNextTrack() {
    currentTrack = (currentTrack + 1) % tracks.length;
    loadTrack(currentTrack);
    audio.play();
    playButton.textContent = 'PAUSE';
}

function playPrevTrack() {
    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrack);
    audio.play();
    playButton.textContent = 'PAUSE';
}

function updateProgress() {
    progress.value = audio.currentTime;
    currentTimeElem.textContent = formatTime(audio.currentTime);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

playButton.addEventListener('click', playTrack);
nextButton.addEventListener('click', playNextTrack);
prevButton.addEventListener('click', playPrevTrack);
progress.addEventListener('input', () => {
    audio.currentTime = progress.value;
});

audio.addEventListener('timeupdate', updateProgress);

// Carregar a primeira faixa ao iniciar
loadTrack(currentTrack);
