import {lettersArray} from './letters.js';
import {specialLettersArray} from './special-letters.js';
import {isShift} from './special-letters.js';

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

export let textField = document.createElement('textarea');
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

textField.addEventListener('keypress', (event) => {
  event.preventDefault();
});

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
    this.addEventListener('mousedown', () => {
      this.textField = this.langValue[0];
      textField.setRangeText(this.textField, textField.selectionStart, textField.selectionEnd, 'end');
      textField.focus();
    });
    this.addEventListener('mouseup', () => {
      textField.focus();
    });
  }
}

customElements.define('common-letters', CustomButtonCommon, { extends: 'button' });

for (btnIndex = 0; btnIndex < lettersArray.length; btnIndex++) {
  let j = lettersArray[btnIndex][1];
  buttonArray[j] = document.createElement('button', { is: 'common-letters' });
  symbolButtonArray[btnIndex] = buttonArray[j];
}

buttonArray.forEach((el, i) => {
  keysWrapper.append(buttonArray[i])
})

class CustomButtonSpecial extends HTMLButtonElement {
  constructor() {
    super();
    this.setAttribute('type', 'button');
    this.classList.add('custom-btn_special');
    this.keyCode = specialLettersArray[btnIndex][0];
    this.innerHTML = specialLettersArray[btnIndex][2];
    this.style.width = specialLettersArray[btnIndex][5];
    this.addEventListener('mousedown', specialLettersArray[btnIndex][3]);
    this.addEventListener('mouseup', specialLettersArray[btnIndex][4]);
    this.addEventListener('mouseup', () => {
      textField.focus();
    });
  }
}

customElements.define('special-letters', CustomButtonSpecial, { extends: 'button' });

for (btnIndex = 0; btnIndex < specialLettersArray.length; btnIndex++) {
  let j = specialLettersArray[btnIndex][1];
  buttonArray[j] = document.createElement('button', { is: 'special-letters' });
}

buttonArray.forEach((el, i) => {
  keysWrapper.append(buttonArray[i])
})

document.addEventListener('keydown', (event) => {
  buttonArray.forEach((el, i) => {
    if (event.code === buttonArray[i].keyCode) {
      textField.focus();
      buttonArray[i].classList.add('btn-active');
      if ((event.code !== 'ArrowRight') 
          && (event.code !== 'ArrowLeft') 
          && (event.code !== 'ArrowDown') 
          && (event.code !== 'ArrowUp') 
          && (event.code !== 'ArrowUp') 
          && (event.code !== 'ArrowUp') 
          && (event.code !== 'Backspace') 
          && (event.code !== 'Delete')) {
        let myEvent = new Event('mousedown', { bubbles: true });
        buttonArray[i].dispatchEvent(myEvent);
      }
    }
  })
});

document.addEventListener('keyup', (event) => {
  buttonArray.forEach((el, i) => {
    if (event.code === buttonArray[i].keyCode) {
      buttonArray[i].classList.remove('btn-active');
    }
  })
});