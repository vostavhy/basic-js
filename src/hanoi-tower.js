import { NotImplementedError } from '../extensions/index.js';

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
export default function calculateHanoi(disksNumber, turnsSpeed) {
  const turnsNumber = 2 ** disksNumber - 1;
  const turnInSecond = turnsSpeed / 60 / 60;
  const seconds = Math.floor(turnsNumber / turnInSecond);
  return {
    turns: turnsNumber,
    seconds: seconds,
  }
}
