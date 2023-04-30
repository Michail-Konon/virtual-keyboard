import {textField} from './script.js';

export const specialLettersArray = [
  ['Backspace', 13, 'BACKSPACE', emptyFunction, emptyFunction, '160px'],
  ['Tab', 14, 'TAB', emptyFunction, emptyFunction, '80px'],
  ['Delete', 28, 'DEL', emptyFunction, emptyFunction, '80px'],
  ['CapsLock', 29, 'CAPS LOCK', emptyFunction, emptyFunction, '120px'],
  ['Enter', 41, 'ENTER', emptyFunction, emptyFunction, '120px'],
  ['ShiftLeft', 42, 'SHIFT', emptyFunction, emptyFunction, '120px'],
  ['ShiftRight', 55, 'SHIFT', emptyFunction, emptyFunction, '80px'],
  ['ControlLeft', 56, 'CTRL', emptyFunction, emptyFunction, '80px'],
  ['OSLeft', 57, 'WIN', emptyFunction, emptyFunction, '40px'],
  ['AltLeft', 58, 'ALT', emptyFunction, emptyFunction, '40px'],
  ['Space', 59, '&#160', spaceFunction, emptyFunction, '320px'],
  ['AltRight', 60, 'ALT', emptyFunction, emptyFunction, '40px'],
  ['ControlRight', 61, 'CTRL', emptyFunction, emptyFunction, '40px'],
];

function emptyFunction() {
  return null
}

function spaceFunction() {
  textField.setRangeText(' ', textField.selectionStart, textField.selectionEnd, 'end');
}
