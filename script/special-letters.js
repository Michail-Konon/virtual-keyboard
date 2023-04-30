import {textField} from './script.js';

export const specialLettersArray = [
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
];

export let isShift = false;

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

function capsFunction() {

}

function enterFunction() {
  textField.setRangeText('\n', textField.selectionStart, textField.selectionEnd, 'end');
}

function shiftFunction() {
  isShift = true;
  console.log('shift active');
}

function unShiftFunction() {
  isShift = false;
  console.log('shift diactivated');
}

function ctrlFunction() {

}

function unCtrlFunction() {

}

function altFunction() {

}

function unAltFunction() {
  
}