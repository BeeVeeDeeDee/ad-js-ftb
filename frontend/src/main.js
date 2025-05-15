import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

// fetch('http://localhost:2727/')
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error('Error:', error));

async function fetchData() {
  try {
    const response = await fetch('http://localhost:2727/');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);

    // schrijf data naar DOM 
    const app = document.querySelector('#app');
    const dataDiv = document.createElement('div');
    dataDiv.innerHTML = `
      <h2>Data from server:</h2>
      <pre>${JSON.stringify(data, null, 2)}</pre>
    `;
    app.appendChild(dataDiv);

  } catch (error) {
    console.error('Error:', error);
  }
};

fetchData();

setupCounter(document.querySelector('#counter'))
