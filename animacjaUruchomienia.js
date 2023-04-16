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
