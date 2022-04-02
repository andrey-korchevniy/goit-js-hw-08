import playerVimeo from "@vimeo/player";

const iframe = document.querySelector('iframe');
const player = new playerVimeo(iframe);

player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time"))).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});

player.on('timeupdate', function (event) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(event.seconds));
});

