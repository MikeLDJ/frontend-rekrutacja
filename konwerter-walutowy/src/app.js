import './style.scss';

if (module.hot) {
  module.hot.accept();
}

(() => {
  const button = document.querySelector('.convert-button');
  const output = document.querySelector('.tile-cards');
  const updated = document.querySelector('.time');
  let inputAmount = document.getElementById('amount');

  function appendDiv(el, str)  {
    const newTile = document.createElement('div');
    newTile.innerHTML = str;
    while (newTile.children.length > 0) {
      el.appendChild(newTile.children[0]);
    }
  }

  function activateTile() {
    setTimeout(() => {
      let listTile = document.querySelectorAll('.tile-container');
      listTile[listTile.length-1].classList.add('active');
    }, 100);
  }


  button.addEventListener('click', e => {
    let currentdate = new Date();
    let now = currentdate.getFullYear() + '.' + ('0' + (currentdate.getMonth()+1)).slice(-2) + '.' + ('0' + currentdate.getDate()).slice(-2) + ' ' + ('0' + currentdate.getHours()).slice(-2) + '.' + ('0' + currentdate.getMinutes()).slice(-2);
    let eur = inputAmount.value;
    let pln = ((eur * 4.2*(1+(Math.random()*50)/1000)).toFixed(4));
    let tile = `<div class="tile-container">
                  <h4 class="tile-title">PLN amount</h4>
                  <h2 class="tile-amount">${pln}</h2>
                </div>`;
    e.preventDefault();
    appendDiv(output, tile);
    activateTile();
    updated.innerHTML = now;
  });
})();

/*

- czas webpack ~5h, poświęcone na doczytywanie dokumentacji i grzebanie w innych repo;
- czas na zadanie ~6h, mam problem z dołączeniem klasy .active dla animacji, poradziłem sobie za pomocą setTimeout.

*/
