window.addEventListener("load", () => {
  const page = document.querySelector('body');

  function letsStart() {
    let wrap = document.createElement('div');
    wrap.className = 'wrapper';

    let keyboard = document.createElement('div');
    keyboard.className = 'keyboard';
  
    let screen = document.createElement('div');
    screen.className = 'screen';
    screen.innerHTML = '<textarea class="screen-text" id="screen" rows="5" autofocus></textarea>';

    let rowFirst = document.createElement('div');
    let rowSecond = document.createElement('div');
    let rowThird = document.createElement('div');
    let rowFourth = document.createElement('div');
    let rowFifth = document.createElement('div');

    let keysWrapper = document.createElement('div');
    keysWrapper.className = 'keys-wrapper';

    keyboard.appendChild(keysWrapper);
    wrap.append(screen);
    wrap.appendChild(keyboard);
    page.appendChild(wrap);
    page.className = 'body';
  }
  
  letsStart();
});
