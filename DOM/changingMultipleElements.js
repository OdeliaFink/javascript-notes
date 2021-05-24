// Select all LI's on the page:
const allLis = document.querySelectorAll('li');

// One option, a regular for loop:
for (let i = 0; i < allLis.length; i++) {
  allLis[i].innerText = 'WE ARE THE CHAMPIONS!';
}

//Another option using for...of:
for (let li of allLis) {
  li.innerHTML = 'WE ARE <b>THE CHAMPIONS</b>';
}

const h1 = document.querySelector('h1');

// style property only contains INLINE styles...
// Even though we gave the h1 a purple color, we still get:
h1.style.color; //""
// Same with any property we did not set inline:
h1.style.fontSize; //""

// We can use getComputedStyle to figure out the ACTUAL styles that are applying:
const compStyles = getComputedStyle(h1);
compStyles.color; //"rgb(128, 0, 128)"  (purple as an RGB color)
compStyles.fontSize; //"60px"
