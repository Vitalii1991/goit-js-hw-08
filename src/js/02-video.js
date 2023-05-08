import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', onPlay);

function onPlay(data) {
  const currentTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
}

const timeLocalStorage = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(timeLocalStorage).catch(function (error) {
  switch (error.name) {
    case 'RangeError':
      break;
    default:
      break;
  }
});

player.setVolume(0.1);
