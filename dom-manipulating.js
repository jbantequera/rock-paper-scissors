// PRIMERA APROXIMACIÓN (Sin eventos)
///////////////////////////////////////////////////////////////////////////////////////
/*const container = document.querySelector('#container');

let content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

// container.appendChild(content);

let redParag = document.createElement('p');
redParag.setAttribute('style', 'color: red;');
redParag.textContent = "Hey I'm red!";

let blueH3 = document.createElement('h3');
blueH3.setAttribute('style', 'color: blue');
blueH3.textContent = "I'm a blue h3!";

let pinkDiv = document.createElement('div');
pinkDiv.setAttribute('style', 'background: pink; border: 1px solid black');

let divH1 = document.createElement('h1');
divH1.textContent = "I'm in a div!";

let divP = document.createElement('p');
divP.textContent = 'ME TOO!';

pinkDiv.appendChild(divH1);
pinkDiv.appendChild(divP);

container.appendChild(redParag);
container.appendChild(blueH3);
container.appendChild(pinkDiv);*/

// SEGUNDA APROXIMACIÓN (Eventos)
///////////////////////////////////////////////////////////////////////////////////////
let boton = document.querySelector('#btn');

boton.addEventListener('click', () => {alert('Hello World')});
btn.addEventListener('click', function(e){
    e.target.style.background = 'blue';
  })