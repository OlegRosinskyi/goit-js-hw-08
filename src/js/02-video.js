console.log('played the video!');
//const Vimeo = require('@vimeo/player');
//var throttle = require('lodash.throttle');
//import { save, load } from './storage';
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const key = 'videoplayer-current-time';
const value = 'TimeRanges';

const LOCALSTORAGE_KEY = 'videoplayer-current-time';
console.log(Player);
const iframe = document.querySelector('iframe');
console.log(iframe);

const player = new Player(iframe);

player.on('play', function () {
  console.log('Start played the video!');
  console.log(localStorage.getItem(key) !== '0');

  //----------------------------------------------------------
  if (localStorage.getItem(key) !== '0') {
    player
      .setCurrentTime(localStorage.getItem(key))
      .then(value => {
        console.log('Stop time video', value);
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
  }
});
//-----------------------------------------------------------
function timeRepeat() {
  console.log('played the video!');
  player
    .getCurrentTime()
    .then(value => {
      localStorage.setItem(key, value);
      console.log(value);
      // seconds = the current playback position
    })
    .catch(() => {
      console.log('Error');
    });
}

player.on('timeupdate', () => throttle(timeRepeat(), 1000));

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
