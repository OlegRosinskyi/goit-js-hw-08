console.log('played the video!');
//const Vimeo = require('@vimeo/player');
import { save, load } from './storage.js';
import Player from '@vimeo/player';
console.log(Player);
const iframe = document.querySelector('iframe');
console.log(iframe);
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});
localStorage.setItem('videoplayer-current-time', 'TimeRanges');
const videoplayerCT = localStorage.getItem('videoplayer-current-time');
console.log(videoplayerCT);

player.getVideoTitle().then(function (title) {
  console.log('title:', title);

  iframe.addEventListener('click', save);
  iframe.addEventListener('click', load);
});
