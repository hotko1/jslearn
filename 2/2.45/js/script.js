'use strict';

const btn = document.querySelector('button');

// btn.onclick = function() {
//     alert('Click');
// };

// btn.onclick = function() {
//     alert('Second click');
// };

btn.addEventListener('click', () => {
    alert('Click');
});

btn.addEventListener('click', () => {
    alert('Second click');
});

// btn.addEventListener('mouseenter', () => {
//     console.log('Hover');
// });

btn.addEventListener('mouseenter', (e) => {
    console.log(e.target);
    e.target.remove();
});