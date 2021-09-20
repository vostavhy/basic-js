import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  console.log(members);
  let result = [];
  if (!Array.isArray(members)) return false;
  members.forEach(el => {
    if (Object.prototype.toString.call(el) == '[object String]') result.push(el.trim()[0].toUpperCase())  
  });
  return result.sort().join('');
}
