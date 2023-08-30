'use strict';

const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btns.onclick = function() {
//     alert('Click');
// };

// btns.onclick = function() {
//     alert('Second click');
// };

// btns.addEventListener('click', () => {
//     alert('Click');
// });

// btns.addEventListener('click', () => {
//     alert('Second click');
// });

// btns.addEventListener('mouseenter', () => {
//     console.log('Hover');
// });

// btns.addEventListener('mouseenter', (e) => {
//     console.log(e.target);
//     e.target.remove();
// });

// btns.addEventListener('click', (e) => {
//     // console.log(e.target);
//     e.target.remove();
// });

// let i = 0;
const deleteElement = (e) => {
    // e.target.remove();
    // console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btns.removeEventListener('click', deleteElement);
    // }
}

// btns.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

// btns.removeEventListener('click', deleteElement);

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});

const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault();

    console.log(event.target);
});
