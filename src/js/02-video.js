console.log('played the video!');
//const Vimeo = require('@vimeo/player');
//import Vimeo from '@vimeo/player';
import Player from '@vimeo/player';
console.log(Player);
const iframe = document.querySelector('iframe');
console.log(iframe);
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});
const videoplayerCT = getItem('videoplayer-current-time');
console.log(videoplayerCT);

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
