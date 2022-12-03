console.log('played the video!');
//const Vimeo = require('@vimeo/player');
import { save, load } from './storage';
import Player from '@vimeo/player';
const key = 'videoplayer-current-time';
const value = 'TimeRanges';

console.log(Player);
const iframe = document.querySelector('iframe');
console.log(iframe);
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
  save(key, value);
  load(key);
});
//localStorage.setItem('videoplayer-current-time', 'TimeRanges');
//const videoplayerCT = localStorage.getItem('videoplayer-current-time');
//console.log(videoplayerCT);

player.getVideoTitle().then(function (title) {
  console.log('title:', title);

  // iframe.addEventListener('click', save(key, value));
  //iframe.addEventListener('click', load(key));
});
