export const animacjaUruchomienia = () => {
  const state = true;

  document.getElementById('container').style.display = 'none';

  if (state) {
    setTimeout(function () {
      document.getElementById('wybor--znaku').style.display = 'none';
      setTimeout(function () {
        document.getElementById('container').style.display = 'flex';
      }, 10);
    }, 2000);
  } else {
    document.getElementById('container').style.display = 'none';
  }
};

// Zmienna przechowująca informację o wybranym znaku
// let wybranyZnak = '';

// export const animacjaUruchomienia = () => {
//   // Ukrycie kontenera gry
//   document.getElementById('container').style.display = 'none';

//   // Wyświetlenie wyboru znaku
//   document.getElementById('wybor--znaku').style.display = 'block';

//   // Obsługa zdarzenia kliknięcia krzyżyka
//   document.querySelector('.krzyzyk').addEventListener('click', function () {
//     wybranyZnak = 'X';
//     document.getElementById('wybor--znaku').style.display = 'none';
//     setTimeout(function () {
//       document.getElementById('container').style.display = 'flex';
//     }, 10);
//   });

//   // Obsługa zdarzenia kliknięcia kółka
//   document.querySelector('.kolko').addEventListener('click', function () {
//     wybranyZnak = 'O';
//     document.getElementById('wybor--znaku').style.display = 'none';
//     setTimeout(function () {
//       document.getElementById('container').style.display = 'flex';
//     }, 10);
//   });

//   // Ustawienie tekstu informacyjnego o kolejności graczy
//   const info = document.getElementById('info');
//   if (wybranyZnak === 'X') {
//     info.textContent = 'Gracz X zaczyna';
//   } else if (wybranyZnak === 'O') {
//     info.textContent = 'Gracz O zaczyna';
//   }
// };
