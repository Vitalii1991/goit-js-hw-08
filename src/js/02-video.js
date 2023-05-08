import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', onPlay);

function onPlay(data) {
  console.log('played the video!');

  const videoStopTime = data.seconds;
  console.log(videoStopTime);
}

// localStorage.setItem('videoplayer-current-time', 0);
// const timePlayer = localStorage.getItem('videoplayer-current-time');

player
  .setCurrentTime(25)
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
