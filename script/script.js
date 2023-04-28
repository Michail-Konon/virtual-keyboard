import {lettersArray} from './letters.js';

if (localStorage.getItem('appLang') === null) {
  localStorage.setItem('appLang', 'eng');
}


const page = document.querySelector('body');

function letsStart() {
  let wrap = document.createElement('div');
  wrap.className = 'wrapper';

  let keyboard = document.createElement('div');
  keyboard.className = 'keyboard';
  
  let screen = document.createElement('div');
  screen.className = 'screen';

  let textField = document.createElement('textarea');
  textField.className = "screen-text";
  textField.setAttribute('autofocus', 'autofocus');
  textField.focus();

  let keysWrapper = document.createElement('div');
  keysWrapper.className = 'keys-wrapper';

  screen.appendChild(textField);
  keyboard.appendChild(keysWrapper);
  wrap.append(screen);
  wrap.appendChild(keyboard);
  page.appendChild(wrap);
  page.className = 'body';
}
  
letsStart();

class CustomButtonCommon extends HTMLButtonElement {
  constructor() {
    super();
  }
}

class CustomButtonSpecial extends HTMLButtonElement {
  constructor() {
    super();
  }
}