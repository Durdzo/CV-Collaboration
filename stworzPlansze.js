import { przyciskRestart } from './przyciskRestart.js';

export const stworzPlansze = () => {
  const pusteKomorki = ['', '', '', '', '', '', '', '', ''];
  const plansza = document.getElementById('plansza');

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
    alert('Ta komorka jest już zajęta');
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
}

przyciskRestart();
