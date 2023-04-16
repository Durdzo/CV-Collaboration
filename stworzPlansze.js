import { przyciskRestart } from './przyciskRestart.js';

export const stworzPlansze = () => {
  const pusteKomorki = ['', '', '', '', '', '', '', '', ''];
  const plansza = document.getElementById('plansza');
  const info = document.getElementById('info');

  pusteKomorki.map((_value, index) => {
    const komorka = document.createElement('div');
    komorka.classList.add('kwadrat');
    komorka.id = 'kwadrat--' + index;
    komorka.addEventListener('click', obslugaKlikniecia); // dodanie nasłuchiwania na kliknięcie
    plansza.append(komorka);
  });
};

// Dodawnie kółka lub krzyżyka do planszy
let czyKolko = true; // flaga wskazująca, która postać powinna być dodana do kolejnej klikniętej komórki
let czyPlanszaPelna = false; // flaga wskazująca, czy plansza jest już wypełniona

function obslugaKlikniecia(event) {
  // obsługa kliknięcia na komórkę
  if (czyPlanszaPelna) {
    return; // jeśli plansza jest już wypełniona, to nie można już klikać w komórki
  }

  const komorka = event.target;

  if (komorka.textContent !== '') {
    alert('Ta komórka jest już zajęta');
    return; // jeśli komórka już jest wypełniona, to nie można jej kliknąć ponownie
  }

  if (czyKolko) {
    komorka.textContent = 'O'; // dodanie kółka
  } else {
    komorka.textContent = 'X'; // dodanie krzyżyka
  }

  czyKolko = !czyKolko; // zmiana flagi na przeciwną po każdym kliknięciu

  // sprawdzenie, czy plansza jest już wypełniona
  const komorki = document.querySelectorAll('.kwadrat');
  let czyWszystkieKomorkiPelne = true;
  for (const komorka of komorki) {
    if (komorka.textContent === '') {
      czyWszystkieKomorkiPelne = false;
      break;
    }
  }
  if (czyWszystkieKomorkiPelne) {
    czyPlanszaPelna = true;
  }

  // sprawdzenie, czy któryś z graczy wygrał
  const plansza = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const [a, b, c] of plansza) {
    if (
      komorki[a].textContent &&
      komorki[a].textContent === komorki[b].textContent &&
      komorki[a].textContent === komorki[c].textContent
    ) {
      // alert('Gracz ' + komorki[a].textContent + ' wygrał!');
      console.log('Gracz ' + komorki[a].textContent + ' wygrał!');
      // Tworzenie drugiego diva
      const secondDiv = document.createElement('div');
      secondDiv.id = 'second-div';
      secondDiv.textContent = 'To jest drugi div';

      // Dodawanie drugiego diva do kontenera
      const info = document.getElementById('info');
      info.appendChild(secondDiv);

      // Zmiana tekstu drugiego diva
      const updatedSecondDiv = document.getElementById('second-div');
      updatedSecondDiv.textContent =
        'Gracz ' + komorki[a].textContent + ' wygrał!';
      // Dodaj klasę CSS do elementu, który zawiera tekst
      updatedSecondDiv.classList.add('slide-right');
      // Dodaj klasę CSS, która zmniejsza element plansza
      const plansza = document.getElementById('plansza');
      plansza.classList.add('scale-down');
      czyPlanszaPelna = true;
      break;
    }
  }
}

przyciskRestart();
