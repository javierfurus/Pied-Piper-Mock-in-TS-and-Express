import './style.css';
import './about.css';
import template from './partials/about.hbs';
import fetch from 'node-fetch';

(async () => {
  const response = await fetch('http://localhost:3000/about');
  const json = await response.json();

  const rows = json;
  document.addEventListener('DOMContentLoaded', function () {
    var div = document.createElement('div');
    div.innerHTML = template({ rows });
    document.body.appendChild(div);
  });
})();
