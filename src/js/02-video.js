import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', onPlayVideo);

function onPlayVideo(event) {
  console.log('played the video!');

  const videoStopTime = event.seconds;
  console.log(videoStopTime);
}

localStorage.setItem('videoplayer-current-time', 30);
const timePlayer = localStorage.getItem('videoplayer-current-time');

player
  .setCurrentTime(timePlayer)
  .then(function () {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

player.setVolume(0.1);
