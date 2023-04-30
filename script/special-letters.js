export const specialLettersArray = [
  ['Backspace', 14, 'BACKSPACE', emptyFunction, emptyFunction, '180px'],
  ['Tab', 15, 'TAB', emptyFunction, emptyFunction, '80px'],
  ['Delete', 29, 'DEL', emptyFunction, emptyFunction, '80px'],
  ['CapsLock', 30, 'CAPS LOCK', emptyFunction, emptyFunction, '120px'],
  ['Enter', 42, 'ENTER', emptyFunction, emptyFunction, '180px'],
  ['ShiftLeft', 43, 'SHIFT', emptyFunction, emptyFunction, '120px'],
  ['ArrowUp', 55, '&#8593', emptyFunction, emptyFunction],
  ['ShiftRight', 56, 'SHIFT', emptyFunction, emptyFunction, '120px'],
  ['ControlLeft', 57, 'CTRL', emptyFunction, emptyFunction, '80px'],
  ['OSLeft', 58, 'WIN', emptyFunction, emptyFunction],
  ['AltLeft', 59, 'ALT', emptyFunction, emptyFunction],
  ['Space', 60, '&#160', emptyFunction, emptyFunction, '400px'],
  ['AltRight', 61, 'ALT', emptyFunction, emptyFunction],
  ['ControlRight', 62, 'CTRL', emptyFunction, emptyFunction],
  ['ArrowLeft', 63, '&#8592', emptyFunction, emptyFunction],
  ['ArrowDown', 64, '&#8595', emptyFunction, emptyFunction],
  ['ArrowRight', 65, '&#8594', emptyFunction, emptyFunction]
];

function emptyFunction() {
  return console.log('Work?')
}