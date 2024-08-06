const button = document.getElementById('joke-btn');
const jokeEl = document.getElementById('joke');

function generateJoke() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        jokeEl.innerHTML = JSON.parse(this.responseText).value;
      } else {
        jokeEl.innerHTML = 'Something went wrong (Not funny)';
      }
    }
  };
  xhr.send();
}

button.addEventListener('click', generateJoke);
document.addEventListener('DOMContentLoaded', generateJoke);
