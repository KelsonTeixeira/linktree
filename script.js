const app = document.querySelector('#root');

fetch('./links.json')
.then(response => response.json())
.then(response => {
  response.map(link => {
    const a = document.createElement('a');
    a.textContent = link.text;
    a.href = link.link;
    a.target = '_blank';
    a.className = 'link';
    app.appendChild(a);
  });
});