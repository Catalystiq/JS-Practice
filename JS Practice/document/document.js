const aPara = document.querySelector('body > h1');

console.log(aPara);
console.log('');

const allParas = document.querySelectorAll('p');
const errors = document.querySelectorAll('.error');
allParas.forEach(para => {
    console.log(para);
});

console.log(allParas[2])
console.log(errors);
console.log('');



// get an element by ID
const theTitle = document.getElementById('page-title');
console.log(theTitle);

// get elements by their class name
const allErrors = document.getElementsByClassName('error');
console.log(allErrors);
console.log(allErrors[0]);
// allErrors.forEach(error => {
//     console.log(error);
// })
console.log('');
// get elements by their tag name
const theParas = document.getElementsByTagName('p');
console.log(theParas);
console.log(theParas[1]);





const para = document.querySelector('p');
console.log(para.innerText);

// para.innerText = ' ninjas are awesome!';

const anParas = document.querySelectorAll('p');
anParas.forEach(para => {
    console.log(para.innerText);
    //para.innerText += ' new text';
});




const theContent = document.querySelector('.content');

console.log(theContent.innerHTML);
theContent.innerHTML += '<h2>THIS IS A NEW H2</h2>';
console.log('');


const people = ['mario', 'luigi', 'yoshi'];
people.forEach(person => {
    theContent.innerHTML += `<p>${person}</p>`;
});




const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.thenetninja.co.uk');
link.innerText = 'TheNetNinjaWebsite';

const mssg = document.querySelector('p');

console.log(mssg.getAttribute('class'));
//mssg.setAttribute('class', 'error');
//mssg.setAttribute('style', 'color: crimson');



const title = document.querySelector('h1');

//title.setAttribute('style', 'margin: 50px');

console.log(title.style);
console.log(title.style.color);

title.style.margin = '50px';
title.style.color = 'crimson';
title.style.fontSize = '60px';
title.style.margin = '';



const content = document.querySelector('p');

console.log(content.classList);
content.classList.add('error');
content.classList.remove('error');
content.classList.add('success');




//Challenge
const all = document.querySelectorAll('p');

all.forEach(p => {
    //console.log(p.innerText);
    //console.log(p.textContent);
    if (p.textContent.includes('error')) {
        p.classList.add('error');
    }
    if (p.textContent.includes('success')) {
        p.classList.add('success');
    }
});


const title1 = document.querySelector('.title');
title1.classList.toggle('test');
title1.classList.toggle('test');