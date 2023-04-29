import {lettersArray} from './letters.js';

if (localStorage.getItem('appLang') === null) {
  localStorage.setItem('appLang', 'eng');
}


const page = document.querySelector('body');


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

let lang = localStorage.getItem('appLang');
let buttonArray = [];
let btnIndex;
let symbolButtonArray = [];

class CustomButtonCommon extends HTMLButtonElement {
  constructor() {
    super();
    this.setAttribute('type', 'button');
    this.classList.add('custom-btn');
    this.keyCode = lettersArray[btnIndex][0];
    this.EngLayout = lettersArray[btnIndex][2];
    this.RusLayout = lettersArray[btnIndex][3];
    this.langValue = this.EngLayout;
    if (typeof this.langValue === 'string') {
      this.innerHTML = this.langValue.toUpperCase();
    } else {
      this.innerHTML = this.langValue[0];
    }
  }
}

customElements.define('common-letters', CustomButtonCommon, { extends: 'button' });


for (btnIndex = 0; btnIndex < lettersArray.length; btnIndex++) {
  let j = lettersArray[btnIndex][1];
  buttonArray[j] = document.createElement('button', { is: 'common-letters' });
  symbolButtonArray[btnIndex] = buttonArray[j];
}

buttonArray.forEach((el, i) => {
  keyboard.append(buttonArray[i])
})

class CustomButtonSpecial extends HTMLButtonElement {
  constructor() {
    super();
  }
}