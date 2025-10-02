
document.body.addEventListener('click', function playMusic() 
{
    const audio = new Audio('Music.mp3');
    audio.loop = true; // Make the music loop
    audio.volume = 0.3; // Set a pleasant volume
    audio.play();
    document.body.removeEventListener('click', playMusic);
}, { once: true });