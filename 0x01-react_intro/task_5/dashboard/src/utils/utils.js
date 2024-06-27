/**
 * Returns the current year
 */
export function getFullYear() {
  return new Date().getFullYear(); 
}

/**
 * Retuns a string dependingon the valueof the parameter
 * @param {*} isIndex boolean
 */
export function getFooterCopy(isIndex) {
  if (isIndex) return 'Holberton School';
  return 'Holberton School main dashboard';
}

export function getLatestNotification() {
  return "<strong>Urgent requirement</strong> - complete by EOD";
}
