export const tworzenieZnakow = () => {
  // Pobieranie elementu HTML o identyfikatorze "wybor--znaku"
  const wyborZnaku = document.getElementById('wybor--znaku');

  // Tworzenie kontenrea krzyzyka
  const kontenerKrzyzyka = document.createElement('div');
  kontenerKrzyzyka.classList.add('kontenerKrzyzyka');
  kontenerKrzyzyka.id = 'kontenerKrzyzyka';
  wyborZnaku.appendChild(kontenerKrzyzyka);

  let wybranyZnak; // zmienna, w której będzie zapisany wybrany znak

  // Obsługa zdarzenia kliknięcia krzyżyla
  kontenerKrzyzyka.addEventListener('click', function () {
    wybranyZnak = 'X';
    console.log('Wybrałeś krzyżyk');
  });

  // Tworzenie diva krzyzyk
  const krzyzyk = document.createElement('div');
  krzyzyk.classList.add('krzyzyk');
  kontenerKrzyzyka.appendChild(krzyzyk);

  // Elementy stworzone dynamicznie do krzyżyka
  const krzyzykGora = document.createElement('div');
  krzyzykGora.classList.add('krzyzyk-pion');
  const krzyzykDol = document.createElement('div');
  krzyzykDol.classList.add('krzyzyk-poziom');
  krzyzyk.appendChild(krzyzykGora);
  krzyzyk.appendChild(krzyzykDol);

  // Tworzenie diva kólko
  const kolko = document.createElement('div');
  kolko.classList.add('kolko');
  kolko.id = 'kolko';
  wyborZnaku.appendChild(kolko);

  // Obsługa zdarzenia kliknięcia kółka
  kolko.addEventListener('click', function () {
    wybranyZnak = 'O';
    console.log('Wybrałeś kółko');
  });
  console.log(wybranyZnak);
};
