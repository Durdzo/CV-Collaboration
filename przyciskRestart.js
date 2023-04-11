export const przyciskRestart = () => {
  // Tworzenie przycisku i restart gry
  const button = document.createElement('button');
  button.textContent = 'Zacznij grę od nowa';
  container.appendChild(button);

  // Obsługa kliknięcia przycisku
  button.addEventListener('click', function () {
    document.location.reload();
  });
};
