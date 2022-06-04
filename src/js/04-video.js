import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const player = new Player('vimeo-player');

 player.on('timeupdate', throttle(loadTime, 1000));

function loadTime({ seconds }) {
  localStorage.setItem("videoplayer-current-time", seconds)
}

function setTimeToRefresh() {
     return localStorage.getItem("videoplayer-current-time") ?? 0
}

player.setCurrentTime(setTimeToRefresh());