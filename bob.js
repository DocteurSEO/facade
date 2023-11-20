/**
 * Permet de facilté le clique sur un élément
 * @param {string} selector 
 * @param {function} callback 
 */

export function click(selector, callback) {
  document.querySelector(selector)
  .addEventListener('click', callback);
}


/**
 * 
 * Permet de faciliter la sauvegarde de données
 * @param {string} name 
 * @param {string} data 
 */

export function save(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}


/**
 * Selection un élément dans le DOM
 * @param {string} selector 
 * @returns 
 */

export function getDom (selector) {
  return document.querySelector(selector);
}