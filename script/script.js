'use strict';

import {lettersArray} from './letters.js';

if (localStorage.getItem('appLang') === null) {
  localStorage.setItem('appLang', 'eng');
}

let lang = localStorage.getItem('appLang');

const specialLettersArray = [
  ['Backspace', 13, 'BACKSPACE', backspaceFunction, emptyFunction, '160px'],
  ['Tab', 14, 'TAB', tabFunction, emptyFunction, '80px'],
  ['Delete', 28, 'DEL', deleteFunction, emptyFunction, '80px'],
  ['CapsLock', 29, 'CAPS LOCK', capsFunction, emptyFunction, '120px'],
  ['Enter', 41, 'ENTER', enterFunction, emptyFunction, '120px'],
  ['ShiftLeft', 42, 'SHIFT', shiftFunction, unShiftFunction, '120px'],
  ['ShiftRight', 55, 'SHIFT', shiftFunction, unShiftFunction, '80px'],
  ['ControlLeft', 56, 'CTRL', ctrlFunction, unCtrlFunction, '80px'],
  ['OSLeft', 57, 'WIN', emptyFunction, emptyFunction, '40px'],
  ['AltLeft', 58, 'ALT', altFunction, unAltFunction, '40px'],
  ['Space', 59, '&#160', spaceFunction, emptyFunction, '320px'],
  ['AltRight', 60, 'ALT', altFunction, unAltFunction, '40px'],
  ['ControlRight', 61, 'CTRL', ctrlFunction, unCtrlFunction, '40px'],
  //['ArrowUp', 54, '↑', emptyFunction, emptyFunction, '40px'],
  //['ArrowLeft', 62, '←', emptyFunction, emptyFunction, '40px'],
  //['ArrowDown', 63, '↓', emptyFunction, emptyFunction, '40px'],
  //['ArrowRight', 64, '→', emptyFunction, emptyFunction, '40px']
];

let isShift = false, 
    isCtrl = false,
    isCaps = false,
    isAlt = false;

function emptyFunction() {
  return null
}

function spaceFunction() {
  textField.setRangeText(' ', textField.selectionStart, textField.selectionEnd, 'end');
}

function backspaceFunction() {
  if (textField.selectionStart > 0) {
    textField.setRangeText('', textField.selectionStart - 1, textField.selectionEnd, 'end');
  }
}

function tabFunction() {
  textField.setRangeText('\t', textField.selectionStart, textField.selectionEnd, 'end');
}

function deleteFunction() {
  if (textField.selectionStart > 0) {
    textField.setRangeText('', textField.selectionStart, textField.selectionEnd + 1, 'end');
  }
}
let counter = 0;

function capsFunction() {
  counter++;
  if (counter % 2 === 1) {
    isCaps = true;
  } else {
    isCaps = false;
  }
  buttonArray[29].classList.toggle('btn-active');
}

function enterFunction() {
  textField.setRangeText('\n', textField.selectionStart, textField.selectionEnd, 'end');
}

function shiftFunction() {
  isShift = true;
  console.log(isShift);
}

function unShiftFunction() {
  isShift = false;
  console.log(isShift);
}

function ctrlFunction() {
  isCtrl = true;
  langCheck()
  console.log(isCtrl);
}

function unCtrlFunction() {
  isCtrl = false;
  langCheck()
  console.log(isCtrl);
}

function altFunction() {
  isAlt = true;
  langCheck()
  console.log(isAlt);
}

function unAltFunction() {
  langCheck()
  isAlt = false;
  console.log(isAlt);
}

function langCheck() {
  if ((isCtrl === true) && (isAlt === true)) {
    if (localStorage.getItem('appLang') === 'eng') {
      localStorage.setItem('appLang', 'ru');
      lang = 'ru';
      changeLang();
    } else {
      localStorage.setItem('appLang', 'eng');
      lang = 'eng';
      changeLang();
    }
  }
}

const page = document.querySelector('body');
const head = document.querySelector('head');

let cssLink = document.createElement('link');
cssLink.setAttribute('rel', 'stylesheet');
cssLink.setAttribute('href', './styles/style.css');

let cssFav = document.createElement('link');
cssFav.setAttribute('rel', 'shortcut icon');
cssFav.setAttribute('href', './favicon.ico');

head.appendChild(cssLink);
head.appendChild(cssFav);


let wrap = document.createElement('div');
wrap.className = 'wrapper';

let textContainer = document.createElement('div');
textContainer.className = 'hint-wrapper'
textContainer.innerHTML = `
                          <p class='hint-text'>Клавиатура сделана в операционной системе Windows</p>
                          <p class='hint-text'>Смена языка осуществляется комбинацией Alt + Ctrl</p>
                          `

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
wrap.appendChild(textContainer);
page.appendChild(wrap);
page.className = 'body';

let buttonArray = [];
let btnIndex;
let symbolButtonArray = [];

document.addEventListener('keypress', (event) => {
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
    if (lang === 'eng') {
      this.langValue = this.EngLayout;
    } else {
      this.langValue = this.RusLayout;
    }
    if (typeof this.langValue === 'string') {
      this.innerHTML = this.langValue.toUpperCase();
    } else {
      this.innerHTML = this.langValue[0];
    }
    this.addEventListener('mousedown', () => {
      if (typeof this.langValue === 'string') {
        if (isShift) {
          if (!isCaps) {
            this.inputValue = this.langValue.toUpperCase();
          } else {
            this.inputValue = this.langValue;
          }
        } else if (isCaps) {
          this.inputValue = this.langValue.toUpperCase();
        } else {
          this.inputValue = this.langValue;
        }
      } else if (isShift) {
        this.inputValue = this.langValue[1];
      } else {
        this.inputValue = this.langValue[0];
      }
      textField.setRangeText(this.inputValue, textField.selectionStart, textField.selectionEnd, 'end');
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
  for (let index = 0; index < buttonArray.length; index++) {
    if (event.code === buttonArray[index].keyCode) {
      event.preventDefault();
      buttonArray[index].classList.remove('btn-active');
      if ((event.code !== 'ArrowRight') 
            && (event.code !== 'ArrowLeft') 
            && (event.code !== 'Backspace') 
            && (event.code !== 'Delete')) {
        let myEvent = new Event('mouseup', { bubbles: true });
        buttonArray[index].dispatchEvent(myEvent);
      }
    }
  }
});

function changeLang() {
  symbolButtonArray.forEach((el) => {
    if (lang === 'eng') {
      el.langValue = el.EngLayout;
    } else {
      el.langValue = el.RusLayout;
    }
    if (typeof el.langValue === 'string') {
      el.innerHTML = el.langValue.toUpperCase();
    } else {
      el.innerHTML = el.langValue[0];
    }
  });
}

document.addEventListener("keydown", (event) => {
    if(event.key === 'CapsLock') {
      buttonArray[29].classList.toggle('btn-active_caps');
    }
  }
);